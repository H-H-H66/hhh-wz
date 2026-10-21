<template>
  <div>
  <el-dialog
    v-model="ScaleVisible"
    align-center
    width="850px"
    class="ScaleVisible"
  >
    <div class="paper_downimg">
      <div class="paper_downbanner">
        <i class="cur cl" @click="prev">
          <img src="/image/WallPaper/cl.png">
        </i>
         <img :src="currentItem.images">
         <i class="cur cr" @click="next">
          <img src="/image/WallPaper/cr.png"></img>
         </i>
         <i class="curname">{{currentItem.name}}</i>
      </div>
      <div class="paper_downdesc">
        <ul>
          <li class="sProdImgDown sProdImgL2">
            <span class="goImge">
              <span>1024x768</span>
            </span>
          </li>
          <li class="sProdImgDown sProdImgL2">
            <span class="goImge">
              <span>1024x768</span>
            </span>
          </li>
          <li class="sProdImgDown sProdImgL2">
            <span class="goImge">
              <span>1024x768</span>
            </span>
          </li>
          <li class="sProdImgDown sProdImgL2">
            <span class="goImge">
              <span>1024x768</span>
            </span>
          </li>
          <li class="sProdImgDown sProdImgL2">
            <span class="goImge">
              <span>1024x768</span>
            </span>
          </li>
          <li class="sProdImgDown sProdImgL2">
            <span class="goImge">
              <span>1024x768</span>
            </span>
          </li>
           <li class="sProdImgDown sProdImgL2">
            <span class="goImge">
              <span>1024x768</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </el-dialog>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue'
const props = defineProps({
  ScaleVisible: {
    type: Boolean,
    default: false,
  },
  heroWallpaper:{
    type:Array,
    default:function(){
      return []
    }
  },
  isSelect:{
    type:[Number,String],
    default:1
  }
})
const emit = defineEmits(['update:ScaleVisible','update:isSelect'])

const ScaleVisible = computed({
  get: () => props.ScaleVisible,
  set: (v) => emit('update:ScaleVisible', v),
})
const currentItem = computed(()=>{
  return props.heroWallpaper.find(item=>item.id===props.isSelect) ||  props.heroWallpaper[0] 
})
const currentIndex = computed(()=>{
  return props.heroWallpaper.findIndex(item => item.id === props.isSelect)
})
const prev = () => {
  const n = props.heroWallpaper.length
  if (!n) return
  const i = currentIndex.value < 0 ? 0 : currentIndex.value
  const nextIndex = (i - 1 + n) % n
  emit('update:isSelect', props.heroWallpaper[nextIndex].id)
}

const next = () => {
  const n = props.heroWallpaper.length
  if (!n) return
  const i = currentIndex.value < 0 ? 0 : currentIndex.value
  const nextIndex = (i + 1) % n
  emit('update:isSelect', props.heroWallpaper[nextIndex].id)
}
</script>

<style lang="scss" scoped>
.paper_downimg{
    background: #fff;
    float: left;
    width:835px;
    height: 660px;
    overflow: hidden;
    padding: 8px;
 .paper_downbanner{
    position: relative;
    >img{
      width:835px;
      height:600px;
      border-radius: 0px;
    }
    }
  .cr{
    right:9px;
    img{
      width:27px;
      height:27px;
      margin-left:5px;
      margin-top:20px;
    }
    }
  .cl{
      left:9px;
      img{
        width:27px;
        height:27px;
        margin-left:5px;
        margin-top:20px;
      }
    }
  .cur{
      position: absolute;
      z-index: 999;
      top:245px;
      width:38px;
      height:66px;
      line-height:84px;
      background: rgba(0, 0, 0, .5);
      cursor: pointer;
    }
  .curname{
      position: absolute;
      top:520px;
      left:9px;
      width:340px;
      height:50px;
      line-height:50px;
      background:rgba(0,0,0,.7);
      font-size:18px;
      color:#fff;
      text-align:center;
      font-weight:bold;
    }
    .paper_downdesc{
      margin-top:10px;
      width:100%;
      height:24px;
      line-height:24px;
      text-align:center;
    }
    .paper_downdesc ul li:after{
       content: '|';
       margin-left: 8px;
       color: #CBCBCB;
    }
    .paper_downdesc ul li:nth-last-child(1):after{
        content: '';
        margin-left: 8px;
        color: #CBCBCB;
    }
    .paper_downdesc ul li:nth-child(1){
      margin-left:45px;
    }
    .paper_downdesc ul li{
      float:left;
      width:110px;
      text-align:center;
      cursor:pointer;
    }
    .paper_downdesc ul li span:hover {
    text-decoration: underline;
}
}
</style>
<style>
.ScaleVisible{
   padding:0 !important;
.el-dialog__headerbtn{
  top:-20px;
  right:-50px;
  width:30px;
  height:30px;
  background:rgb(239, 236, 236);
  border-radius:40%;
 
}
.el-dialog__header{
  padding:0;
}
}

</style>