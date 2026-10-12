<template>
  <div class="skinInspir skin-feature">
    <div class="wrap-tit">
      <h3>灵感及特性介绍</h3>
    </div>

    <div
      class="wrap-content"
      v-for="section in storyBlocks"
      :key="section.key"
    >
      <div class="design-cont-txt">
        <b>
          <font>{{ section.title }}</font>
          <span></span>
        </b>
        <!-- 普通文案 -->
        <p v-if="section.type === 'text' && section.content" class="section-desc">
          {{ section.content }}
        </p>
        <!-- 技能视频说明（孙尚香有，卢雅那为空则不进循环） -->
        <div v-else-if="section.type === 'skillVideo'" class="skill-video-list">
          <div
            class="skill-video-item"
            v-for="item in section.items"
            :key="item.id"
          >
            <p class="skill-title">{{ item.title }}</p>
            <p v-if="item.desc" class="section-desc">{{ item.desc }}</p>
            <div class="skill-media" v-if="item.media">
              <img :src="item.media" alt="">
            </div>
            <p v-if="item.desc2" class="section-desc">{{ item.desc2 }}</p>
            <div class="skill-media" v-if="item.media2">
              <img :src="item.media2" alt="">
            </div>
          </div>
        </div>
      </div>

      <!-- 区块配图：如动画 gif、美宣图 -->
      <div class="relation-cont" v-if="section.media">
        <img :src="section.media" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getSkinById } from '@/utils/HeroList.js'
import { useRoute } from 'vue-router'

const route = useRoute()
const skin = computed(() => getSkinById(route.params.id))

// 统一区块配置；不同皮肤缺字段/为空时自动跳过
const STORY_SECTIONS = [
  { key: 'Themedesign', title: '主题设计' },
  { key: 'CharacterProfile', title: '角色介绍' },
  { key: 'CharacterDesign', title: '角色设计' },
  { key: 'SceneDesign', title: '场景设计' },
  { key: 'AnimationDesign', title: '动画设计', mediaKey: 'Animation' },
  { key: 'ArtDesign', title: '美宣图设计', mediaKey: 'imagedesc' },
  { key: 'SkillDesign', title: '技能设计' },
  { key: 'SkillVideo', title: '技能特效', type: 'skillVideo' },
  { key: 'RecallDesign', title: '回城设计' },
  { key: 'RandomAnimation', title: '随机行走动作' },
  { key: 'IdleAnimation', title: '待机动作' },
  { key: 'MusicDesign', title: '音乐设计' },
  { key: 'SkinStory', title: '皮肤故事' },
]

const storyBlocks = computed(() => {
  const current = skin.value
  const story = current?.story
  if (!story) return []

  return STORY_SECTIONS.map((section) => {
    const value = story[section.key]

    // 技能视频数组
    if (section.type === 'skillVideo') {
      const items = Array.isArray(value) ? value.filter(Boolean) : []
      if (!items.length) return null
      return {
        key: section.key,
        title: section.title,
        type: 'skillVideo',
        items,
        media: '',
      }
    }

    const content = typeof value === 'string' ? value.trim() : ''
    const media = section.mediaKey ? (current[section.mediaKey] || '') : ''

    // 文案和配图都没有则跳过（适配两个皮肤字段不一致）
    if (!content && !media) return null

    return {
      key: section.key,
      title: section.title,
      type: 'text',
      content,
      media,
    }
  }).filter(Boolean)
})
</script>

<style lang="scss" scoped>
.skinInspir{
  position: relative;
  width: 1200px;
  margin: 112px auto 0;
  scroll-margin-top: 70px;

  .wrap-tit{
    position: relative;
    font-size:40px;
    line-height:60px;
    letter-spacing: 4px;
    color:#c39b5e;
    text-align: center;
  }
  .wrap-tit h3::after{
    content: '';
    position:absolute;
    width:1200px;
    height:9px;
    background:url('/image/HeroSite/heroIcon-bg.webp') no-repeat;
    background-position-y:-220px;
    top:68px;
    left:0;
  }
  .wrap-content{
    width:1200px;
    margin:0 auto;
  }
  .design-cont-txt{
    font-size: 16px;
    line-height: 36px;
    letter-spacing: 1px;
    color:#8f897f;
    margin-top:40px;
  }
  font{
    color:rgb(218,165,32);
  }
  .section-desc{
    margin: 12px 0 0;
    white-space: pre-wrap;
  }
  .skill-video-item{
    margin-top: 24px;
  }
  .skill-title{
    color: #c39b5e;
    margin: 0;
  }
  .skill-media{
    width: 100%;
    margin-top: 16px;
    text-align: center;
  }
  .relation-cont{
    width:1200px;
    margin-top:49px;
    text-align: center;
  }
  .relation-cont img,
  .skill-media img{
    display: block;
    width: auto;
    max-width: 1000px;
    height: auto;
    margin: 0 auto;
  }
}
</style>
