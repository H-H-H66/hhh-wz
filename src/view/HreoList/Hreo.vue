<template>
  <div class="Hreo">
    <div class="page-scroll">
     <banner-top />
     <bannerList></bannerList>
      <div class="content-Top">
        <div class="content-bottom">
          <div class="zk-con1">
          <breadcrumb></breadcrumb>
          <h1 class="herolist-title">英雄介绍</h1>
          <ul class="herolist-nav">
              <li :class="{'current':currentSelected===heros.id}" v-for="heros in heroList" :key="heros.id" @click="select(heros)">
                <span>{{heros.text}}</span>
              </li>
          </ul>
          </div>
          <div class="herolist-box">
            <div class="clearfix herolist-types">
              <div class="types-left">
                <li>综合</li>
                <li>游戏职业</li>
              </div>
              <div class="clearfix types-ms">
                 <el-radio-group v-model="filterValue" class="radios-item">
                  <el-radio
                    v-for="item in filterOptions"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </el-radio>
                </el-radio-group>
              </div>
                <div class="clearfix types-ms">
                 <el-radio-group v-model="jobValue" class="radios-item">
                  <el-radio
                    v-for="item in jobOptions"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </el-radio>
                </el-radio-group>
              </div>
              <div class="herosearch">
                <el-input
                  v-model="input"
                  class="herosearch-input"
                  clearable
                  placeholder="请输入你想要搜索的英雄名"
                  @keyup.enter="onSearch"
                >
                  <template #suffix>
                    <button
                      type="button"
                      class="herosearch-btn"
                      title="点击搜索"
                      @click="onSearch"
                    >
                      <el-icon :size="16"><Search /></el-icon>
                    </button>
                  </template>
                </el-input>
              </div>
            </div>
            <div class="herolist-content">
              <ul class="herolist clearfix">
                <li>
                  <div class="mingge">
                    <div class="yhero">
                      <div class="gotoHero">
                        <div class="mask">
                          <img src="" alt="孙悟空" />
                        </div>
                        <p class="hero-name">孙悟空</p>
                      </div>
                    </div>
                    <div class="mghero">
                      <div class="gotoHero">
                        <div class="mask">
                          <img src="" alt="心魔六耳" />
                        </div>
                        <p class="hero-name">心魔六耳</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import bannerTop from '@/components/bannerTop/bannerTop.vue'
import bannerList from "@/components/bannerList/bannerList.vue"
import breadcrumb from "@/components/breadcrumb/breadcrumb.vue"

const filterValue = ref('all')
const jobValue = ref('all')

// 选项列表：只用来渲染，不要绑到 v-model
const filterOptions = [
  { value: 'all', label: '全部' },
  { value: 'free', label: '免费英雄' },
  { value: 'new', label: '新手推荐' },
]
const jobOptions = [
  { value: 'all', label: '全部' },
  { value: 'tank', label: '坦克' },
  { value: 'warrior', label: '战士' },
  { value: 'assassin', label: '刺客' },
  { value: 'mage', label: '法师' },
  { value: 'marksman', label: '射手' },
  { value: 'support', label: '辅助' },
]
const heroList = ref(
  [
    {
      id:1,
      text:'英雄'
    },
    {
      id:2,
      text:'局内道具'
    },
    {
      id:3,
      text:'召唤师技能'
    }
  ]
  )
  const currentSelected = ref(1)
  const select = (heros) => {
    currentSelected.value = heros.id
  }
  const input = ref('')
  const onSearch = () => {
    // 后续接搜索逻辑
    console.log('search:', input.value)
  }
</script>


<style scoped lang="scss">
.Hreo{
   height: 100vh;
   overflow: hidden;
   background: #f2efe6;
}
.page-scroll {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.content-Top {
  margin-top: -5px;
  background-color: #f2efe6;
}

.content-bottom {
  width: 1200px;
  min-height: calc(100vh - 300px);
  margin: 0 auto;
  padding-bottom: 55px;
  box-sizing: border-box;
}
.zk-con1{
  padding-top: 40px;
  overflow: hidden;
}
.herolist-title{
    margin-top: 25px;
    padding-left: 25px;
    font: bold 20px / 22px '\5FAE\8F6F\96C5\9ED1';
    background: url('/public/image/hero/icon_hero.webp') no-repeat;
}
ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
}
.herolist-nav{
    margin-top: 20px;
    height: 32px;
    font-size: 16px;
    border-bottom: 3px solid #D4D4D4;
    border-radius: 0 0 3px 3px;
}
.herolist-nav li{
    float: left;
    width: 33%;
    margin-bottom: -3px;
    position: relative;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    text-align: center;

}
.herolist-nav li.current {
    border-bottom: 3px solid #3589DD;
    border-radius: 0 0 3px 3px;
}
.herolist-nav .current span{
  color:#3589DD;
  font-weight: bold;
  width: 100%;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
}
.herolist-nav span{
    display: block;
    width: 100%;
    line-height: 32px;
    text-align: center;
    color: #4B4B4B;
    cursor: pointer;
}
.herolist-box{
   margin-top:25px;
  padding:35px 28px;
  border:2px solid #E8E8E8;
  border-top:0;
  position: relative;
  .herolist-types{
    background-color:#EFEFEF;
    border-radius:5px;
    color:#686869;
    /* 包住内部 float，否则父级高度塌成 0，蓝块会漏出盒子 */
    overflow: hidden;
  }
  .clearfix::after {
    content: '';
    display: table;
    clear: both;
  }
  .types-left{
    float: left;
    width:80px;
    height:106px;
    text-align: center;
    background-color:#2c88E2;
    color:#fff;
    border-radius:5px 0 0 5px;
  }
  .types-left li{
    display: flex;
    align-items: center;
    justify-content: center;
    height:53px;
    font-size:16px;
    padding: 0 !important;
    margin: 0;
  }
  .types-ms{
    float: left;
    width: 900px;
    height: 53px;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  .radios-item{
    padding-left: 15px;
    min-width: 90px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .herosearch{
    position: absolute;
    top: 46px;
    right: 48px;
    z-index: 2;
  }

  .herosearch-input {
    width: 260px;

    :deep(.el-input__wrapper) {
      height: 34px;
      padding: 0 8px 0 12px;
      border-radius: 17px;
      background: #fff;
      box-shadow: 0 0 0 1px #d5d5d5 inset;
      transition: box-shadow 0.2s ease, background 0.2s ease;
    }

    :deep(.el-input__wrapper:hover) {
      box-shadow: 0 0 0 1px #2c88e2 inset;
    }

    :deep(.el-input__wrapper.is-focus) {
      box-shadow: 0 0 0 1px #2c88e2 inset, 0 0 0 3px rgba(44, 136, 226, 0.15);
    }

    :deep(.el-input__inner) {
      height: 34px;
      font-size: 13px;
      color: #4b4b4b;
    }

    :deep(.el-input__inner::placeholder) {
      color: #a8a8a8;
    }

    :deep(.el-input__suffix) {
      display: flex;
      align-items: center;
    }
  }

  .herosearch-btn {
    appearance: none;
    border: 0;
    background: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-left: 2px;
    border-radius: 50%;
    color: #8b8b8b;
    cursor: pointer;
    transition: color 0.2s ease, background 0.2s ease;

    &:hover {
      color: #2c88e2;
      background: rgba(44, 136, 226, 0.1);
    }
  }
  .herolist-content{
    margin-top: 40px;
  }
  .herolist-content ul{
    overflow: hidden;
  }
  .herolist-content li{
    float: left;
    margin: 0 24px 34px 0;
  }
  .mingge{
    display: flex;
    width: 204px;
  }
  .yhero,
  .mghero{
    width: 50%;
    min-width: 0;
  }
  .gotoHero{
    display: block;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  .mask{
    position: relative;
    height: 90px;
    overflow: hidden;
    border: 2px solid #258df2;
    background: #e8eef5;
    box-sizing: border-box;
  }
  .yhero .mask{
    border-radius: 10px 0 0 10px;
    border-right: none;
  }
  .mghero .mask{
    border-radius: 0 10px 10px 0;
  }
  .mask img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .hero-name{
    margin: 8px 0 0;
    font-size: 13px;
    line-height: 1.2;
    color: #4b4b4b;
    white-space: nowrap;
  }
  .gotoHero:hover .hero-name{
    color: #258df2;
  }
  :deep(.radios-item .el-radio) {
    margin-right: 24px;
    height: auto;
  }
}
</style>