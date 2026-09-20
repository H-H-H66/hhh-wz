<template>
  <div class="menu-container-2023">
    <div class="menu1-2023 li-2023">
      <div class="menu1-word-contianer-2023">
        <div class="menu1-big-word-link-2023" @click="GotoHome">首页</div>
        <div class="menu1-small-word-2023">HOME</div>
      </div>
    </div>

    <el-tooltip
      class="box-item"
      effect="dark"
      placement="bottom"
      :offset="tipOffset"
      popper-class="box-item-container"
    >
      <template #content>
        <div class="box-item_li">
          <div class="box_item_row" @click="GotoVersionZone({ name: 'VersionZone' })"><span class="box_item_icon_slot"></span><span>版本专区</span></div>
          <div class="box_item_row" @click="GotoHero({ name: 'Hero' })"><span class="box_item_icon_slot"></span><span>英雄资料</span></div>
          <div class="box_item_row"><span class="box_item_icon_slot"></span><span>爆料站</span></div>
          <div class="box_item_row"><span class="box_item_icon_slot"></span><span>游戏壁纸</span></div>
          <div class="box_item_row"><span class="box_item_icon_slot"></span><span>世界观站</span></div>
        </div>
      </template>
      <div class="menu1-2023 li-2023">
        <div class="menu1-word-contianer-2023">
          <div class="menu1-big-word-link-2023">游戏资料</div>
          <div class="menu1-small-word-2023">GAME DATA</div>
        </div>
      </div>
    </el-tooltip>

    <el-tooltip
      class="box-item"
      effect="dark"
      placement="bottom"
      :offset="tipOffset"
      popper-class="box-item-container"
    >
      <template #content>
        <div class="box-item_li">
          <div class="box_item_row"><span class="box_item_icon_slot"></span><span>攻略中心</span></div>
          <div class="box_item_row"><span class="box_item_icon_slot"></span><span>开放素材库</span></div>
          <div class="box_item_row">
            <span class="box_item_icon_slot">
              <img src="../../../public/image/banner1/new.png" alt="" />
            </span>
            <span>内容共创平台</span>
          </div>
        </div>
      </template>
      <div class="menu1-2023 li-2023">
        <div class="menu1-word-contianer-2023">
          <div class="menu1-big-word-link-2023">内容中心</div>
          <div class="menu1-small-word-2023">CONTENT CENTER</div>
        </div>
      </div>
    </el-tooltip>

    <el-tooltip
      class="box-item"
      effect="dark"
      placement="bottom"
      :offset="tipOffset"
      popper-class="box-item-container"
    >
      <template #content>
        <div class="box-item_li">
          <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>KPL十周年</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot">
              <img src="../../../public/image/banner1/hot.png" alt="" />
            </span>
            <span>KPL</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>K甲</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot">
              <img src="../../../public/image/banner1/hot.png" alt="" />
            </span>
            <span>挑战者杯</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>全国大赛</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>高校联赛</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot">
              <img src="../../../public/image/banner1/new.png" alt="" />
            </span>
            <span>赛事授权</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot">
              <img src="../../../public/image/banner1/new.png" alt="" />
            </span>
            <span>授权合作赛</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>赛事数据</span>
          </div>
        </div>
      </template>
      <div class="menu1-2023 li-2023">
        <div class="menu1-word-contianer-2023">
          <div class="menu1-big-word-link-2023">赛事中心</div>
          <div class="menu1-small-word-2023">TOURNAMENT CENTER</div>
        </div>
      </div>
    </el-tooltip>


    <el-tooltip
      class="box-item"
      effect="dark"
      placement="bottom"
      :offset="tipOffset"
      popper-class="box-item-container"
    >
      <template #content>
        <div class="box-item_li">
          <div class="box_item_row"><span class="box_item_icon_slot"></span><span>共创研发陈列馆</span></div>
          <div class="box_item_row"><span class="box_item_icon_slot"></span><span>王者荣耀天天向上</span></div>
          <div class="box_item_row"><span class="box_item_icon_slot"></span><span>IP剧集观影站</span></div>
        </div>
      </template>
      <div class="menu1-2023 li-2023">
        <div class="menu1-word-contianer-2023">
          <div class="menu1-big-word-link-2023">王者文化</div>
          <div class="menu1-small-word-2023">KINGDOM CULTURE</div>
      </div>
    </div>
    </el-tooltip>

    <el-tooltip
      class="box-item"
      effect="dark"
      placement="bottom"
      :offset="tipOffset"
      popper-class="box-item-container"
    >
      <template #content>
        <div class="box-item_li">
          <div class="box_item_row">
            <span class="box_item_icon_slot">
              <img src="../../../public/image/banner1/hot.png" alt="" />
            </span>
            <span>体验服专区</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot">
              <img src="../../../public/image/banner1/hot.png" alt="" />
            </span>
            <span>高校认证</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>腾讯游戏防沉迷</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>成长守护平台</span>
          </div>
           <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>对局环境情报站</span>
          </div>
           <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>客服专区</span>
          </div>
           <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>礼包兑换</span>
          </div>
           <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>自助服务</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot"></span>
            <span>商户特权</span>
          </div>
          <div class="box_item_row">
            <span class="box_item_icon_slot">
              <img src="../../../public/image/banner1/new.png" alt="" />
            </span>
            <span>手语打法参考</span>
          </div>
        </div>
      </template>
    <div class="menu1-2023 li-2023">
      <div class="menu1-word-contianer-2023">
        <div class="menu1-big-word-link-2023">玩家支持</div>
        <div class="menu1-small-word-2023">PLAYER SUPPORT</div>
      </div>
    </div>
    </el-tooltip>


    <el-tooltip
      class="box-item"
      effect="dark"
      placement="bottom"
      :offset="tipOffset"
      popper-class="box-item-container"
    >
      <template #content>
        <div class="box-item_li">
          <div class="box_item_row"><span class="box_item_icon_slot"></span><span>共创研发陈列馆</span></div>
          <div class="box_item_row"><span class="box_item_icon_slot"></span><span>王者荣耀天天向上</span></div>
          <div class="box_item_row"><span class="box_item_icon_slot"></span><span>IP剧集观影站</span></div>
        </div>
      </template>
    <div class="menu1-2023 li-2023">
      <div class="menu1-word-contianer-2023">
        <div class="menu1-big-word-link-2023">王者中心</div>
        <div class="menu1-small-word-2023">KINGDOM CENTER</div>
      </div>
    </div>
    </el-tooltip>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const tipOffset = computed(() => (route.path === '/home' ? 8 : 0))
const GotoHome = ()=>{
  router.push('/home')
}
const GotoVersionZone = (path) => {
  const { href } = router.resolve(path)
  window.open(href, '_blank')
}
const GotoHero = (path) => {
  const { href } = router.resolve(path)
  window.open(href, '_blank')
}
</script>

<style scoped lang="scss">
.menu-container-2023 {
  left: 300px;
  position: absolute;
  top: 0;
  width: 960px;
  user-select: none;
  display: flex;
}
.menu1-2023 {
  flex: 1;
  min-width: 0;
  text-align: center;
  padding-top: 18px;
  box-sizing: border-box;
}
.menu-container-2023 > .box-item,
.menu-container-2023 > .el-tooltip {
  display: flex;
  align-items: center;
  height: auto;
  align-self: flex-start;
}
.menu1-word-contianer-2023 {
  color: #fff;
}
.menu1-big-word-link-2023 {
  font-size: 14px;
  cursor: pointer;
}
.menu1-small-word-2023 {
  font-size: 10px;
  opacity: 0.35;
}
.box-item {
  flex: 1;
  min-width: 0;
  width: auto;
}
</style>

<style>
.box-item-container {
  width: max-content !important;
  min-width: 120px;
  padding: 6px 0 !important;
  text-align: left !important;
  background: rgba(0, 0, 0, 0.5) !important;
  margin-top: 15px;
}
.box-item-container .box-item_li {
  text-align: left;
}
.box-item-container .box_item_row {
  display: flex;
  align-items: center;
  padding: 6px 14px;
  opacity: 0.7;
  white-space: nowrap;
  cursor: pointer;
}
.box-item-container .box_item_icon_slot {
  width: 15px;
  height: 15px;
  margin-right: 6px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.box-item-container .box_item_icon_slot img {
  width: 15px;
  height: 15px;
  display: block;
}
.box-item-container .box_item_row:hover {
  opacity: 1;
  color: #ffa500;
}
</style>
