<template>
  <div class="skin-detail-page">
    <div v-if="isFixed" class="sub-header-placeholder"></div>
    <!-- 第二层黑条：新皮肤信息 + 锚点；滚过顶栏后吸顶 -->
    <div class="sub-header" :class="{ 'is-fixed': isFixed }">
      <div class="sub-cont">
         <div class="sub-text">
          <p class="titF">新皮肤</p>
          <p class="titS">
            <span>云端乐园</span>
          </p>
         </div>
         <div class="sub-list">
          <ul>
            <li class="on">
              <div class="showHero">
                皮肤展示
              </div>
            </li>
          </ul>
         </div>
      </div>
    </div>

    <div class="HeroSkinDetail" v-if="skin">
      <img :src="skin.images || skin.img" :alt="skin.name" />
      <div class="detail-info">
        <h1 class="detail-name">{{ skin.name }}</h1>
        <p class="detail-desc">{{ skin.desc }}</p>
        <p class="detail-get" v-if="skin.getWay">{{ skin.getWay }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { getSkinById } from '@/utils/HeroList.js'

const route = useRoute()
const skin = computed(() => getSkinById(route.params.id))

// 「烈焰狂欢-卢雅那」→ 显示「烈焰狂欢」
const skinShortName = computed(() => {
  if (!skin.value?.name) return ''
  return skin.value.name.split('-')[0]
})

const activeTab = ref('show')
const isFixed = ref(false)
let scrollEl = null
const TOP_HEIGHT = 80

const onScroll = () => {
  if (!scrollEl) return
  isFixed.value = scrollEl.scrollTop >= TOP_HEIGHT
}

onMounted(async () => {
  await nextTick()
  scrollEl = document.querySelector('.HeroSiteHome')
  if (!scrollEl) return
  scrollEl.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  if (scrollEl) scrollEl.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>
.skin-detail-page {
  position: relative;
}

.sub-header-placeholder {
  height: 70px;
}

.sub-header {
  width: 100%;
  height: 70px;
 background-color: rgba(0, 0, 0, 0.1);
  z-index: 998;
  position: relative;

  &.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #000;
  }
}

.sub-cont {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: hidden;
}
.sub-text{
  position:absolute;
  left:0;
  top:12px;
  border-right:1px solid rgba(255, 255, 255,0.2);
  height:39px;
  padding:0 60px 0 45px;
  .titF{
    font-size:14px;
    letter-spacing:0px;
    color:#c39b5e;
  }
  .titS{
    font-size:18px;
    letter-spacing:0px;
    color:#f2d2a2;
  }
  .titS span:first-child{
    margin-right:15px;
  }
}
.sub-list{
  width:1200px;
  overflow:hidden;
  margin:0 auto;
  text-align:center;
  ul{
    padding:0;
    list-style:none;
  }
  li{
    display:inline-block;
    list-style:none;
  }
}
.sub-list li.on .showHero{
    color: #c39b5e;
    font-weight: bold;
}
.sub-list li .showHero {
    display: block;
    line-height: 70px;
    font-size: 14px;
    color: #a59e94;
    margin-right: 70px;
}
.sub-skin-name {
  display: block;
  margin-top: 4px;
  font-size: 18px;
  color: #fff;
  letter-spacing: 1px;
}

.sub-tabs {
  position: relative;
  display: flex;
  align-items: center;
  gap: 18px;
  height: 100%;
  padding-top: 2px;
  /* 右侧 tab 上方金色指示线 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #c39b5e;
  }
}

.sub-tab {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  padding: 6px 0;
  line-height: 1;

  &.active,
  &:hover {
    color: #c39b5e;
  }
}

.sub-split {
  width: 1px;
  height: 14px;
  background: rgba(255, 255, 255, 0.45);
}

.HeroSkinDetail {
  min-width: 1200px;
  margin: auto;
  width: 100%;
  max-width: 1920px;
  position: relative;
  text-align: center;

  img {
    display: block;
    width: 100%;
    border: 0;
  }
}

.detail-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 48px;
  z-index: 2;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.detail-name {
  margin: 0 0 10px;
  font-size: 40px;
  letter-spacing: 4px;
  color: #e8c57a;
}

.detail-desc {
  margin: 0 0 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.detail-get {
  margin: 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
}
</style>
