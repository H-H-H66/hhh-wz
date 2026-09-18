<template>
  <el-dialog
    :model-value="modelValue"
    :title="shape === 'circle' ? '裁剪头像' : '裁剪封面'"
    width="720px"
    append-to-body
    class="avatar-crop-dialog"
    :close-on-click-modal="false"
    @update:model-value="emit('update:modelValue', $event)"
    @opened="initCropper"
    @closed="destroyCropper"
  >
    <div
      class="avatar-crop-wrap"
      :class="shape === 'circle' ? 'is-circle' : 'is-rect'"
    >
      <div ref="cropContainerRef" class="avatar-crop-container" />
      <!-- Cropper 选区本身是矩形；圆形靠遮罩模拟 -->
      <div
        v-if="shape === 'circle'"
        class="circle-mask"
        :style="circleMaskStyle"
      />
      <div
        v-if="shape === 'circle'"
        class="circle-ring"
        :style="circleRingStyle"
      />
    </div>
    <template #footer>
      <el-button @click="emit('update:modelValue', false)">取消</el-button>
      <el-button type="primary" :loading="confirming" @click="onConfirm">
        确认并上传
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import Cropper from 'cropperjs'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    /** 待裁剪原图 */
    file?: File | null
    aspectRatio?: number
    outputWidth?: number
    outputHeight?: number
    /** circle：头像圆形选区；rect：封面方形/比例选区 */
    shape?: 'circle' | 'rect'
  }>(),
  {
    file: null,
    aspectRatio: 1,
    outputWidth: 400,
    outputHeight: 400,
    shape: 'circle',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  /** 裁剪完成，把 File 交给父组件上传 */
  confirm: [file: File]
}>()

const cropContainerRef = ref<HTMLElement | null>(null)
const confirming = ref(false)
const circleMaskStyle = ref<Record<string, string>>({})
const circleRingStyle = ref<Record<string, string>>({})
let cropper: Cropper | null = null
let cropObjectUrl = ''

/** 中间固定选区：框不拖不缩放，只平移/缩放图片 */
const buildTemplate = (aspectRatio: number) =>
  '<cropper-canvas background>' +
  '<cropper-image rotatable scalable skewable translatable></cropper-image>' +
  '<cropper-shade hidden></cropper-shade>' +
  '<cropper-handle action="move" plain></cropper-handle>' +
  `<cropper-selection initial-coverage="0.72" aspect-ratio="${aspectRatio}">` +
  '</cropper-selection>' +
  '</cropper-canvas>'

const syncCircleOverlay = () => {
  if (props.shape !== 'circle' || !cropper) return
  const selection = cropper.getCropperSelection() as
    | (HTMLElement & { x?: number; y?: number; width?: number; height?: number })
    | null
  if (!selection) return

  const x = Number(selection.x ?? 0)
  const y = Number(selection.y ?? 0)
  const width = Number(selection.width ?? 0)
  const height = Number(selection.height ?? 0)
  if (!width || !height) return

  const cx = x + width / 2
  const cy = y + height / 2
  const r = Math.min(width, height) / 2

  circleMaskStyle.value = {
    WebkitMaskImage: `radial-gradient(circle ${r}px at ${cx}px ${cy}px, transparent ${r - 0.5}px, #000 ${r}px)`,
    maskImage: `radial-gradient(circle ${r}px at ${cx}px ${cy}px, transparent ${r - 0.5}px, #000 ${r}px)`,
  }
  circleRingStyle.value = {
    left: `${x}px`,
    top: `${y}px`,
    width: `${width}px`,
    height: `${height}px`,
  }
}

const destroyCropper = () => {
  const selection = cropper?.getCropperSelection() as
    | (HTMLElement & { removeEventListener?: (type: string, listener: () => void) => void })
    | null
    | undefined
  selection?.removeEventListener?.('change', syncCircleOverlay)
  cropper?.destroy()
  cropper = null
  if (cropObjectUrl) {
    URL.revokeObjectURL(cropObjectUrl)
    cropObjectUrl = ''
  }
  circleMaskStyle.value = {}
  circleRingStyle.value = {}
}

const initCropper = async () => {
  destroyCropper()
  if (!props.file || !cropContainerRef.value) return

  cropObjectUrl = URL.createObjectURL(props.file)
  await nextTick()

  const image = new Image()
  image.alt = 'avatar-crop'
  image.src = cropObjectUrl
  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve()
    image.onerror = () => reject(new Error('图片加载失败'))
  })

  cropper = new Cropper(image, {
    container: cropContainerRef.value,
    template: buildTemplate(props.aspectRatio),
  })

  await nextTick()
  const selection = cropper.getCropperSelection() as
    | (HTMLElement & {
        width?: number
        height?: number
        initialCoverage?: number
        $center?: () => void
        addEventListener?: (type: string, listener: () => void) => void
      })
    | null

  if (selection && (!selection.width || !selection.height)) {
    selection.initialCoverage = 0.72
    await selection.$center?.()
  }

  selection?.addEventListener?.('change', syncCircleOverlay)
  requestAnimationFrame(() => {
    syncCircleOverlay()
  })
}

const onConfirm = async () => {
  const selection = cropper?.getCropperSelection()
  if (!selection) {
    ElMessage.error('裁剪器未就绪')
    return
  }
  confirming.value = true
  try {
    const canvas = await selection.$toCanvas({
      width: props.outputWidth,
      height: props.outputHeight,
    })
    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob((b) => resolve(b), 'image/jpeg', 0.92)
    })
    if (!blob) {
      ElMessage.error('裁剪失败，请重试')
      return
    }
    const prefix = props.shape === 'circle' ? 'avatar' : 'cover'
    const file = new File([blob], `${prefix}-${Date.now()}.jpg`, { type: 'image/jpeg' })
    emit('confirm', file)
    emit('update:modelValue', false)
  } catch {
    ElMessage.error('裁剪失败，请重试')
  } finally {
    confirming.value = false
  }
}

watch(
  () => props.file,
  () => {
    if (props.modelValue && props.file) void initCropper()
  },
)

const MOVE_STEP = 1
const moveCropImage = (dx: number, dy: number) => {
  const image = cropper?.getCropperImage() as { $move?: (x: number, y?: number) => void } | null
  image?.$move?.(dx, dy)
}

const onCropperKeydown = (event: KeyboardEvent) => {
  if (!props.modelValue || confirming.value || event.isComposing) return

  if (event.key === 'Enter') {
    event.preventDefault()
    void onConfirm()
    return
  }

  const step = event.shiftKey ? MOVE_STEP * 3 : MOVE_STEP
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault()
      moveCropImage(step, 0)
      break
    case 'ArrowRight':
      event.preventDefault()
      moveCropImage(-step, 0)
      break
    case 'ArrowUp':
      event.preventDefault()
      moveCropImage(0, step)
      break
    case 'ArrowDown':
      event.preventDefault()
      moveCropImage(0, -step)
      break
    default:
      break
  }
}

watch(
  () => props.modelValue,
  (visible) => {
    if (visible) {
      window.addEventListener('keydown', onCropperKeydown)
    } else {
      window.removeEventListener('keydown', onCropperKeydown)
    }
  },
)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onCropperKeydown)
  destroyCropper()
})
</script>

<style>
.avatar-crop-dialog .el-dialog__body {
  padding: 12px 16px;
}

.avatar-crop-wrap {
  position: relative;
  width: 100%;
  height: 480px;
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1a;
}

.avatar-crop-container {
  width: 100%;
  height: 100%;
}

.avatar-crop-container cropper-canvas {
  width: 100%;
  height: 100%;
}

.avatar-crop-wrap.is-circle cropper-selection {
  /* 隐藏方形选区边框，改用圆形 ring */
  border: 0 !important;
  outline: none !important;
  box-shadow: none !important;
  background: transparent !important;
  pointer-events: none;
}

.avatar-crop-wrap.is-rect cropper-selection {
  border: 2px solid rgba(255, 255, 255, 0.95) !important;
  outline: none !important;
  box-sizing: border-box;
  pointer-events: none;
}

.avatar-crop-wrap.is-rect cropper-selection::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(#fff, #fff) left top / 16px 3px no-repeat,
    linear-gradient(#fff, #fff) left top / 3px 16px no-repeat,
    linear-gradient(#fff, #fff) right top / 16px 3px no-repeat,
    linear-gradient(#fff, #fff) right top / 3px 16px no-repeat,
    linear-gradient(#fff, #fff) left bottom / 16px 3px no-repeat,
    linear-gradient(#fff, #fff) left bottom / 3px 16px no-repeat,
    linear-gradient(#fff, #fff) right bottom / 16px 3px no-repeat,
    linear-gradient(#fff, #fff) right bottom / 3px 16px no-repeat;
}

.circle-mask {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.55);
}

.circle-ring {
  position: absolute;
  z-index: 3;
  pointer-events: none;
  border: 2px solid rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  box-sizing: border-box;
}

.avatar-crop-container cropper-handle[action='move'] {
  background: transparent !important;
}
</style>
