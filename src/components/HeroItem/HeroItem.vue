<template>
    <div class="clearfix herolist-types item-types">
       <ul class="clearfix types-ms parent-type">
         <el-radio-group v-model="ModeType" class="radios-item">
          <el-radio   
            v-for="item in ModeTypeOptions"
            :key="item.value"
            :value="item.value">{{item.label}}
          </el-radio>
        </el-radio-group>
       </ul>
        <ul class="clearfix types-ms parent-type">
         <el-radio-group v-model="TypeList" class="radios-item">
          <el-radio   
            v-for="item in TypeListOptions"
            :key="item.value"
            :value="item.value">{{item.label}}
          </el-radio>
        </el-radio-group>
       </ul>
        <div class="herosearch">
                <el-input
                  v-model="input"
                  class="herosearch-input"
                  clearable
                  placeholder="请输入你想要搜索的道具名"
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
        <ul class="clearfix herolist">
        <el-tooltip
            class="box-item"
            effect="dark"
            placement="top"
            v-for="item in heroModeType" :key="item.id"
           >
           <template #content>
            <div class="item-tooltip">
              <div class="tooltip-left">
                <img :src="item.img" :alt="item.name" />
              </div>
              <div class="tooltip-right">
                <h3>{{ item.name }}</h3>
                <p>售价：{{ item[ModeType].price }}</p>
                <p>总价：{{ item[ModeType].totalPrice }}</p>
                <p v-for="(attr, i) in item[ModeType].attributes" :key="i">{{ attr }}</p>
                <p v-if="item[ModeType].unique" class="unique">
                  {{ item[ModeType].unique }}
                </p>
              </div>
            </div>
          </template>
        <li class="heroItem" > 
                <div class="gotoLis">
                    <img :src="item.img">
                </div>
                 <p class="hero-name">{{item.name}}</p>
            </li>
       </el-tooltip>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
const ModeType = ref('Regular')
const TypeList = ref('all')
const keyword = ref('')
const onSearch = () => {
  // 后续接搜索逻辑
  keyword.value=input.value.trim()
}
// 选项列表：只用来渲染，不要绑到 v-model
const ModeTypeOptions = [
  { value: 'Regular', label: '常规模式' },
  { value: 'Various', label: '边境突围模式' }
]
const TypeListOptions = [
  { value: 'all', label: '全部' },
  { value: 'gj', label: '攻击' },
  { value: 'fs', label: '法术' },
  { value: 'fy', label: '防御' },
  { value: 'yd', label: '移动' },
  { value: 'dy', label: '打野' },
  { value: 'yz', label: '游走' },
]
// job：职业标识，可多个。上面「游戏职业」按这个筛选
const heroModeType = ref([
  {
     id: 1, 
     type: 'normal', 
     name: '铁剑',
     img:'/image/HeroItem/tj.webp',
     jobs:['gj'],
     Regular : {
       price : 165 ,
       totalPrice : 275 , 
       attributes : [ '+20物理攻击' ] 
     }
    },
  { id: 2, 
    type: 'normal', 
    name: '匕首', 
    img: '/image/HeroItem/bs.webp', 
    jobs: ['gj'],
    Regular : {
       price : 180 ,
       totalPrice : 300 , 
       attributes : [ '+10%攻击速度' ] 
     }
  },
  { id: 3,
     type: 'normal', 
     name: '搏击拳套', 
     img: '/image/HeroItem/bjqt.webp', 
     jobs: ['gj'],
     Regular : {
       price : 180 ,
       totalPrice : 300 , 
       attributes : [ '+8%暴击率' ] 
     }
  },
  { id: 4,
     type: 'normal', 
     name: '吸血之镰', 
     img: '/image/HeroItem/sxzr.webp', 
     jobs: ['gj'],
     Regular : {
       price : 180 ,
       totalPrice : 300 , 
       attributes : [ '+8%物理吸血' ] 
     }
  },
  { id: 5,
     type: 'normal', 
     name: '雷鸣刀', 
     img: '/image/HeroItem/lmd.png', 
     jobs: ['gj'],
     Regular : {
       price : 492 ,
       totalPrice : 820 , 
       attributes : [ '+35物理攻击','+12%暴击率'] 
     }
  },
  { id: 6,
     type: 'normal', 
     name: '风暴巨剑', 
     img: '/image/HeroItem/fbjj.webp', 
     jobs: ['gj'],
     Regular : {
       price : 510 ,
       totalPrice : 850 , 
       attributes : [ '+75物理攻击'] 
     }
  },
  { id: 7,
     type: 'normal', 
     name: '日冕', 
     img: '/image/HeroItem/rm.webp', 
     jobs: ['gj'],
     Regular : {
       price : 456 ,
       totalPrice : 760 , 
       attributes : [ '+35物理攻击', '+450最大生命' ] 
     }
  },
  { id: 8,
     type: 'normal', 
     name: '狂暴双刃', 
     img: '/image/HeroItem/kbzr.webp', 
     jobs: ['gj'],
     Regular : {
       price : 456 ,
       totalPrice : 760 , 
       attributes : [ '+15%攻击速度', '+7.5%移速' ] 
     }
  },
  { id: 9,
     type: 'normal', 
     name: '陨星', 
     img: '/image/HeroItem/yx.webp', 
     jobs: ['gj'],
     Regular : {
       price : 456 ,
       totalPrice : 760 , 
       attributes : [ '+35物理攻击', '+7.5%冷却缩减' ] 
     }
  },
  { id: 10,
     type: 'normal', 
     name: '碎星锤', 
     img: '/image/HeroItem/sxq.webp', 
     jobs: ['gj'],
     Regular : {
       price : 1248 ,
       totalPrice : 2080 , 
       attributes : [ '+90物理攻击', '+700最大生命', '+7.5%移动速度' ],
       unique:['唯一被动-破甲: +30%物理穿透']
     }
  },
])
</script>

<style scoped lang="scss">
  .clearfix::after {
    content: '';
    display: table;
    clear: both;
  }
  .item-types{
  background:none;
  }
  .herolist-types{
   border-radius: 5px;
   color:#686869;
  }
  .types-ms{
    float: left;
    width:900px;
    padding:16px 0;
    height:20px;
    line-height:21px;
  }
  .herosearch{
    position: absolute;
    top: 5px;
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
  .radios-item{
    padding-left: 15px;
    min-width: 90px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
  }
:deep(.radios-item .el-radio) {
    margin-right: 24px;
    height: auto;
  }
  .herolist-content{
    margin-top: 40px;
    li{
       float: left;
        width: 87px;
        margin-bottom: 34px;
        margin-right: 30px;
    }
  }
  .herolist{
    margin-right: -50px;
    overflow: hidden;
  }
  .heroItem{
    height:140px;
    margin-bottom:auto;
    cursor: pointer;
  }
  .gotoLis{
    white-space: nowrap;
    display: block;
    width:100%;
    text-align: center;
    img{
        display:block;
        width: 83px;
        height: 83px;
        // border: 2px solid #258DF2;
        border-radius: 10px 0 10px 0;
    }
  }
.hero-name{
    margin: 8px 0 0;
    font-size: 16px;
    
    color: #4b4b4b;
    text-align: center;
    word-break: break-all;
  }
  .heroItem:hover .hero-name{
    color: #258df2;
  }
  /* tooltip 内部样式 */
  .item-tooltip{
    display: flex;
    gap: 10px;
    min-width: 220px;
    line-height: 1.6;
    .tooltip-left{
      flex: 0 0 64px;
      img{
        display: block;
        width: 64px;
        height: 64px;
        border-radius: 6px;
        object-fit: cover;
      }
    }
    .tooltip-right{
      flex: 1;
      min-width: 0;
    }
    h3{
      margin: 0 0 6px;
      font-size: 14px;
      color: #ffd54a;
    }
    p{
      margin: 2px 0;
      font-size: 12px;
      color: #e8e8e8;
    }
    .unique{
      margin-top: 6px;
      padding-top: 6px;
      border-top: 1px dashed #555;
      color: #ff9a3c;
    }
  }
</style>