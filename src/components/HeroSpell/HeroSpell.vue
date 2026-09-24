<template>
    <div class="clearfix herolist-types item-types" > 
        <ul class="imgtextlist spell-list">
           <li :class="{'current':creentSelet===item.id}" v-for="item in heroSkills" :key="item.id" @click="onSelect(item.id)">
            <img :src="item.img">
            <p>{{item.name}}</p>
           </li>
        </ul>
        <div class="spell-defail">
            <div class="spell-title">
                <img :src="currentSkill.imgs">
                <h4>{{currentSkill.level}}</h4>
                <p class="cons">{{currentSkill.name}}</p>
            </div>
            <div class="spell-desc">
                    {{currentSkill.desc}}
            </div>
        </div>
       
    </div>
</template>

<script setup>
import { ref } from 'vue'
const creentSelet = ref(1)
const currentSkill = computed ( () => heroSkills. value . find ( s => s. id ===creentSelet. value )
)
const onSelect = (id)=>{
  creentSelet.value = id
}
const heroSkills = ref([
 {
    id:1,
    name:'惩击',
    img:"/image/HeroSpell/cj.png",
    imgs:'/image/HeroSpell/HeroSpells/cj-big.webp',
    level:'LV.1解锁',
    desc:'30秒CD：对身边的野怪和小兵造成真1500点的实伤害并眩晕1秒'
 },
 {
    id:2,
    name:'终结',
    img:"/image/HeroSpell/zj.webp",
    imgs:'/image/HeroSpell/HeroSpells/zj.webp',
    level:'LV.3解锁',
    desc:'60秒CD：立即对身边敌军英雄造成其已损失生命值16%的真实伤害，如果成功击败敌人则减少90%的冷却时间'
 },
 {
    id:3,
    name:'狂暴',
    img:"/image/HeroSpell/kb.png",
    imgs:'/image/HeroSpell/HeroSpells/kb-big.webp',
    level:'LV.5解锁',
    desc:'75秒CD：使用期间增加10%伤害、增加25%韧性、20%的物理吸血和30%法术吸血，持续7秒'
 },
 {
    id:4,
    name:'疾跑',
    img:'/image/HeroSpell/jp.webp',
    imgs:'/image/HeroSpell/HeroSpells/jp-big.webp',
    level:'LV.7解锁',
    desc:'75秒CD：增加30%移动速度持续10秒，开启时移除自身的减速效果，且疾跑期间减少50%受到的减速效果，脱战时额外增加20%的移速'
 },
 {
    id:5,
    name:'治疗术',
    img:'/image/HeroSpell/cl.webp',
    imgs:'/image/HeroSpell/HeroSpells/cl-big.webp',
    level:'LV.9解锁',
    desc:'120秒CD：回复自己与附近队友15%生命值，提高附近友军移动速度15%持续2秒'
 },
 {
    id:6,
    name:'干扰',
    img:'/image/HeroSpell/gr.webp',
    imgs:'/image/HeroSpell/HeroSpells/gr-big.webp',
    level:'LV.11解锁',
    desc:'90秒CD：对敌方机关使用，沉默机关持续2~5秒（4/10分钟增加1.5秒）；对己方机关使用，使己方机关免疫所有伤害4秒，攻速翻倍；90秒内叠加效果只有1秒的有效时间'
 },
 {
    id:7,
    name:'眩晕',
    img:'/image/HeroSpell/sd.webp',
    imgs:'/image/HeroSpell/HeroSpells/xy-big.webp',
    level:'LV.13解锁',
    desc:'90秒CD：晕眩身边所有敌人0.75秒，并附带持续1秒的减速效果'
 },
 {
    id:8,
    name:'净化',
    img:'/image/HeroSpell/jh.png',
    imgs:'/image/HeroSpell/HeroSpells/jh-big.webp',
    level:'LV.15解锁',
    desc:'120秒CD：解除自身所有负面和控制效果并免疫控制持续1.5秒'
 },
 {
    id:9,
    name:'弱化',
    img:'/image/HeroSpell/rh.png',
    imgs:'/image/HeroSpell/HeroSpells/rh-big.webp',
    level:'LV.17解锁',
    desc:'75秒CD：减少身边敌人伤害输出20%，并增加自身20%的免伤率，持续4秒。同时，当己方在五秒内连续使用弱化时，同一承受目标的减伤buff将会削弱50%'

 },
 {
    id:10,
    name:'闪现',
    img:'/image/HeroSpell/sx.png',
    imgs:'/image/HeroSpell/HeroSpells/sx-big.webp',
    level:'LV.19解锁',
    desc:'120秒CD：向指定方向位移一段距离'
 },
 {
    id:11,
    name:'传送',
    img:'/image/HeroSpell/cs.webp',
    imgs:'/image/HeroSpell/HeroSpells/cs-big.webp',
    level:'LV.30解锁',
    desc:'75秒CD：吟唱2秒后，将英雄传送到友方机关（包括被摧毁的防御塔）或小兵身边，传送期间会使用选中单位免疫伤害。任意方式取消【传送】，或使用传送阵30秒内释放【传送】，都会减少25秒技能冷却'
 },
 {
    id:12,
    name:'雾行千山',
    img:'/image/HeroSpell/wl.png',
    imgs:'/image/HeroSpell/HeroSpells/wl-big.webp',
    level:'赛季限定',
    desc:'100秒CD:朝指定方向冲刺穿越墙体，途中闪避最多15%最大生命伤害，留下雾气（持续时间3秒）造成30%减速'
 }
])
</script>

<style scoped lang="scss">
.clearfix::after {
    content: '';
    display: table;
    clear: both;
  }
.item-types {
    background: none;
}
.herolist-types {
    border-radius: 5px;
    color: #686869;
}
.spell-list{
    float: left;
    width:43%;
    padding-left:16px;
    margin-right:0;
    border-right:1px solid #F0F0F0;
}
.imgtextlist{
    padding:30px 0 0;
    margin-left:-14px;
    position: relative;
    img{
        display: block;
        margin: 0 auto 7px;
        width: 85px;
        height: 85px;
        border-radius: 50%;
    }
}
.imgtextlist .current img{
    border: 3px solid #00A383;
}
.imgtextlist li{
    float: left;
    width: 116px;
    height: 120px;
    margin-bottom: 22px;
    text-align: center;
    line-height: 15px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.imgtextlist li:hover{
   p{
    color: #258df2;
   }
}
.spell-defail{
    float: left;
    width: 50%;
    padding-top: 30px;
    padding-left: 40px;
}
.spell-title{
    overflow: hidden;
    zoom: 1;
    min-height: 400px;
}
h4{
    float: left;
    width: 60%;
    font-size: 16px;
    color: #00A383;
    line-height: 30px;
}
.cons{
    float: left;
    width: 60%;
    color: #9A9A9A;
    line-height: 30px;
    font-size: 14px;
}
.spell-desc{
    padding: 20px 0;
    line-height: 18px;
    color: #333;
    font-size: 14px;
}
</style>