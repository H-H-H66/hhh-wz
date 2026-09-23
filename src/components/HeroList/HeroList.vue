<template>
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
              <ul class="herolist">
                <li v-for="item in filterHero" :key="item.id" :class="item.type">
                 
                  <div v-if="item.type === 'pair'" class="mingge">
                    <div class="yhero">
                      <div class="gotoHero">
                        <div class="mask">
                          <img v-if="item.left.img" :src="item.left.img" :alt="item.left.name" />
                        </div>
                        <p class="hero-name">{{ item.left.name }}</p>
                      </div>
                    </div>
                    <div class="mghero">
                      <div class="gotoHero">
                        <div class="mask">
                          <img v-if="item.right.img" :src="item.right.img" :alt="item.right.name" />
                        </div>
                        <p class="hero-name">{{ item.right.name }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div v-else class="gotoHero single">
                    <div class="mask">
                      <img v-if="item.img" :src="item.img" :alt="item.name" />
                    </div>
                    <p class="hero-name">{{ item.name }}</p>
                  </div>
                </li>
              </ul>
      </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search } from '@element-plus/icons-vue'
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

const input = ref('')
const keyword = ref('')
const onSearch = () => {
  // 后续接搜索逻辑
  keyword.value=input.value.trim()
}

// job：职业标识，可多个。上面「游戏职业」按这个筛选
const heroCards = ref([
  {
    id: 1,
    type: 'pair',
    left: { name: '孙悟空', img: '/image/hero/sw.jpg', jobs: ['assassin', 'warrior'] },
    right: { name: '心魔六耳', img: '/image/hero/le.jpg', jobs: ['assassin', 'warrior'] },
  },
  { id: 2, type: 'single', name: '卢雅那', img: '/image/hero/yl.jpg', jobs: ['mage'] },
  { id: 3, type: 'single', name: '元流之子(刺客)', img: '/image/hero/ylzz.jpg', jobs: ['assassin'] },
  { id: 4, type: 'single', name: '大禹', img: '/image/hero/dy.jpg', jobs: ['warrior'] },
  { id: 5, type: 'single', name: '元流之子(辅助)', img: '/image/hero/ylzzfz.jpg', jobs: ['support'] },
  { id: 6, type: 'single', name: '影', img: '/image/hero/ying.jpg', jobs: ['mage'] },
  { id: 7, type: 'single', name: '孙权', img: '/image/hero/sq.jpg', jobs: ['tank', 'warrior'] },
  { id: 8, type: 'single', name: '元流之子(射手)', img: '/image/hero/ylzzss.jpg', jobs: ['marksman'] },
  { id: 9, type: 'single', name: '空空儿', img: '/image/hero/kkr.jpg', jobs: ['assassin'] },
  { id: 10, type: 'single', name: '苍', img: '/image/hero/can.jpg', jobs: ['assassin'] },
  { id: 11, type: 'single', name: '嗤姹', img: '/image/hero/zc.jpg', jobs: ['assassin'] },
  { id: 12, type: 'single', name: '少司缘', img: '/image/hero/ssy.jpg', jobs: ['support'] },
  { id: 13, type: 'single', name: '元流之子(坦克)', img: '/image/hero/ylzztk.png', jobs: ['tank'] },
  { id: 14, type: 'single', name: '元流之子(法师)', img: '/image/hero/ylzzfs.png', jobs: ['mage'] },
  { id: 15, type: 'single', name: '敖隐', img: '/image/hero/ab.jpg', jobs: ['warrior'] },
  { id: 16, type: 'single', name: '大司命', img: '/image/hero/dsm.jpg', jobs: ['mage', 'support'] },
  { id: 17, type: 'single', name: '云中君', img: '/image/hero/yzj.jpg', jobs: ['assassin', 'warrior'] },
  { id: 18, type: 'single', name: '海诺', img: '/image/hero/hru.jpg', jobs: ['mage', 'support'] },
  { id: 19, type: 'single', name: '朵莉亚', img: '/image/hero/dly.jpg', jobs: ['support'] },
])
const matchJob = (jobs)=>{
 return jobValue.value ==='all' || jobs.includes(jobValue.value)
}
const matchName = (names)=>{
  if(!keyword.value) return true
  return names.some((name) => name.includes(keyword.value))
}
const filterHero = computed(()=>{
 return heroCards.value.filter((item)=>{
    if(item.type==='pair'){
       return (
        (matchJob(item.left.jobs) || matchJob(item.right.jobs)) && matchName([item.left.name, item.right.name])
      )
    }
     return matchJob(item.jobs) && matchName([item.name])
  })
})
</script>

<style scoped lang="scss">

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
  .herolist{
    display: flex;
    flex-wrap: wrap;
    /* 统一间距：列间距 18px，行间距 34px */
    gap: 34px 18px;
    overflow: visible;
  }
  .herolist > li{
    float: none;
    margin: 0;
    width: 90px;
  }
  /* 命格占两格宽 = 单卡*2 + 中间间隙0，整体对齐网格 */
  .herolist > li.pair{
    width: 198px; /* 90 + 18 + 90 */
  }
  .mingge{
    display: flex;
    width: 100%;
    gap: 18px; /* 和单卡之间的间距一致 */
  }
  .yhero,
  .mghero{
    width: 90px;
    flex: 0 0 90px;
  }
  .gotoHero{
    display: block;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  .mask{
    position: relative;
    width: 90px;
    height: 90px;
    overflow: hidden;
    border: 2px solid #258df2;
    background: #e8eef5;
    box-sizing: border-box;
    border-radius: 10px 0 10px 0;
  }
  .mask img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .single{
    width: 90px;
  }
  .hero-name{
    margin: 8px 0 0;
    font-size: 12px;
    line-height: 1.3;
    color: #4b4b4b;
    text-align: center;
    word-break: break-all;
  }
  .gotoHero:hover .hero-name{
    color: #258df2;
  }
  :deep(.radios-item .el-radio) {
    margin-right: 24px;
    height: auto;
  }
</style>