<template>
  <el-drawer
    v-model="drawer"
    class="ip-drawer"
    :direction="direction"
    append-to-body
    size="25%"
    :with-header="false"
    :show-close="false"
    :z-index="3000"
  >
    <div class="drawerImg">
      <img src="/image/banner1/ipBG.webp" alt="抽屉背景图" />
      <img src="/image/banner1/ipTitle.png" class="ipTitle" alt="" />
      <div class="ip-card ipPvp">
        <img src="/image/banner1/pvpIP.webp" alt="王者荣耀" />
      </div>
      <div class="ip-card ipWorld">
        <img src="/image/banner1/worldIP.png" alt="世界" />
      </div>
      <div class="ip-card wxqIP">
        <img src="/image/banner1/wxqIP.webp" alt="无双" />
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { computed } from 'vue'

const direction = 'ttb'
const props = defineProps({
  drawerVisible: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:drawerVisible'])
const drawer = computed({
  get: () => props.drawerVisible,
  set: (v) => emit('update:drawerVisible', v),
})
</script>

<style lang="scss">
.ip-drawer {
  .el-drawer__body {
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
}

.drawerImg {
  position: relative;
  width: 100%;
  height: 100%;

  > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  .ipTitle {
    position: absolute;
    left: 30px;
    top: 40px;
    width: 70px;
    height: 34px;
  }
}

.ip-card {
  position: absolute;
  top: 35px;
  width: 267px;
  height: 157px;
  padding: 2px;
  box-sizing: border-box;
  cursor: pointer;
  background: linear-gradient(
    135deg,
    rgba(255, 236, 190, 0.15),
    rgba(201, 162, 80, 0.08)
  );
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
  transition:
    transform 0.28s ease,
    background 0.28s ease,
    box-shadow 0.28s ease;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-3px) scale(1.03);
    background: linear-gradient(135deg, #f8e7b4 0%, #c9a227 48%, #f3d27a 100%);
    box-shadow:
      0 0 0 1px rgba(255, 244, 214, 0.7),
      0 0 18px rgba(232, 196, 122, 0.55),
      0 10px 22px rgba(0, 0, 0, 0.35);
  }
}

.ipPvp {
  left: 170px;
}

.ipWorld {
  left: 470px;
}

.wxqIP {
  left: 770px;
}
</style>
