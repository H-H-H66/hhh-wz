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
        <ul class="clearfix types-ms parent-type" v-if="ModeType==='Regular'">
         <el-radio-group v-model="TypeList" class="radios-item">
          <el-radio   
            v-for="item in TypeListOptions"
            :key="item.value"
            :value="item.value">{{item.label}}
          </el-radio>
        </el-radio-group>
       </ul>
         <ul class="clearfix types-ms parent-type"  v-else-if="ModeType==='Various'">
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
    <div class="herolist-content" v-if="ModeType==='Regular'">
        <ul class="clearfix herolist">
        <el-tooltip
            class="box-item"
            effect="dark"
            placement="top"
            v-for="item in filteredList" :key="item.id"
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
                <p v-if="item[ModeType].unique" class="unique" v-for="(uniaue,i) in item[ModeType].unique" :key="i">
                  {{ uniaue }}
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
    <div class="herolist-content" v-else-if="ModeType==='Various'">
        <ul class="clearfix herolist">
        <el-tooltip
            class="box-item"
            effect="dark"
            placement="top"
            v-for="item in filteredList" :key="item.id"
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
                <p v-if="item[ModeType].unique" class="unique" v-for="(uniaue,i) in item[ModeType].unique" :key="i">
                  {{ uniaue }}
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
  {
     id: 11,
     type: 'normal', 
     name: '咒术典籍', 
     img: '/image/HeroItem/zsdj.webp', 
     jobs: ['fs'],
     Regular : {
       price : 165 ,
       totalPrice : 274 , 
       attributes : [ '+35法术攻击' ],
     }
  },
  {
     id: 12,
     type: 'normal', 
     name: '蓝宝石', 
     img: '/image/HeroItem/lbs.webp', 
     jobs: ['fs'],
     Regular : {
       price : 165 ,
       totalPrice : 275 , 
       attributes : [ '+400最大法力' ],
     }
  },
  {
     id: 13,
     type: 'normal', 
     name: '红玛瑙', 
     img: '/image/HeroItem/hmn.webp', 
     jobs: ['fy'],
     Regular : {
       price : 180 ,
       totalPrice : 300 , 
       attributes : [ '+300最大生命' ],
     }
  },
  {
     id: 14,
     type: 'normal', 
     name: '布甲', 
     img: '/image/HeroItem/bj.webp', 
     jobs: ['fy'],
     Regular : {
       price : 165 ,
       totalPrice : 275 , 
       attributes : [ '+100物理防御' ],
     }
  },
  {
     id: 15,
     type: 'normal', 
     name: '神速之靴', 
     img: '/image/HeroItem/sszx.webp', 
     jobs: ['yd'],
     Regular : {
       price : 150 ,
       totalPrice : 250 , 
       attributes : [ '所有鞋类装备的移速加成效果不叠加' ],
       unique:['唯一被动: +30移动速度']
     }
  },
  {
     id: 16,
     type: 'normal', 
     name: '影刃之足', 
     img: '/image/HeroItem/yrzz.webp', 
     jobs: ['yd'],
     Regular : {
       price : 420 ,
       totalPrice : 700 , 
       attributes : [ '+50法术防御','+120物理防御' ],
       unique:['唯一被动：+50移动速度（所有鞋类装备的移速加成效果不叠加）',"唯一被动：抵挡6%~12%物理伤害"]
     }

  },
  {
     id: 17,
     type: 'normal', 
     name: '狩猎宽刃', 
     img: '/image/HeroItem/slkr.webp', 
     jobs: ['dy'],
     Regular : {
       price : 150 ,
       totalPrice : 250 , 
       attributes : [ '4分钟前：不参与兵线分配，单独获得50%金币/经验；10分钟前：对兵线伤害降低25%' ],
       unique:['被动-狩猎: 普攻/技能命中后，野怪每0.5秒70~140点法术伤害，（远程英雄伤害减半），持续2秒。受野怪伤害降低25%，获得来自野怪的经验提升20%。']
     }
  },
  {
     id: 18,
     type: 'normal', 
     name: '游击弯刀', 
     img: '/image/HeroItem/yjwd.webp', 
     jobs: ['dy'],
     Regular : {
       price : 420 ,
       totalPrice : 700 , 
       attributes : [ '+40法术攻击' ],
       unique:['被动-狩猎: 普攻/技能命中后，野怪每0.5秒受到70~140(+0.45%目标最大生命值)的法术伤害（远程攻击减半，对英雄伤害生效10%），持续2秒。受野怪伤害降低25%，获得来自野怪的经验提升30%、金币提升20%','被动-奖赏: 自己或700范围内友方击杀野怪增加自身6点法术攻击，最多叠加15层']
     }
  },
  {
     id: 19,
     type: 'normal', 
     name: '学识宝石', 
     img: '/image/HeroItem/xsbs.webp', 
     jobs: ['yz'],
     Regular : {
       price : 180 ,
       totalPrice : 300 , 
       attributes : [ '+5%移速' ],
       unique:['被动-游击：每3秒增加自身5经验，增加队伍中经济最低的英雄5金币']
     }

  },
  {
     id: 20,
     type: 'normal', 
     name: '极影', 
     img: '/image/HeroItem/jy.webp', 
     jobs: ['yz'],
     Regular : {
       price : 1140 ,
       totalPrice :1900 , 
       attributes : [ '+5%移速','+500生命值' ],
       unique:['被动-迅捷光环：增加自身12%攻速、9%冷却和每5秒回蓝10，对800范围友方造成50%效果','被动-奖赏：增加200-400最大生命值，增加15~30主攻属性（1主攻击属性=1物理攻击或2法术攻击）','被动-游击：每3秒增加自身5经验，每隔15秒传送一枚掉落的金币到英雄附近，增加队伍中经济最低的英雄5金币(众星峡谷中的效果保持不变)']
     }
  }
])
const filteredList = computed(()=>{
  return heroModeType.value.filter(item=>{
    const matchType = TypeList.value === 'all' || item.jobs.includes(TypeList.value)
    const matchName = !keyword.value || item.name.includes(keyword.value)
    return matchType && matchName
  })
})
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
      width:200px;
      white-space:inherit;
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
      white-space: pre-wrap;
    }
  }
</style>