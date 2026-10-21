<template>
  <div class="zkcontent">
     <div class="artlistcontent clearfix">
       <breadcrumb></breadcrumb>
       <div class="p_listmain_l">
        <div class="p_newhero">
           <p class="p_newheor_title">
            <img src="/image/WallPaper/icon_hero.png">
            <span>新英雄新皮肤</span>
           </p>
           <div class="Work_List_Container_267733_1">
            <div class="p_newhero_item" v-for="item in HeroWallpaper":key="item.id" @click="GotoScale(item.id)">
              <img :src="item.image">
              <a href="###" class="p_item_imghover">
                <span></span>
              </a>
              <h4>
                <a href="###">{{item.name}}</a>
              </h4>
              <ul>
                <li class="sProdImgDown sProdImgL2" v-for="itemScale in item.scale" :key="itemScale.id">
                  <div class="sProdImg">
                    <span>{{itemScale.scale}}</span>
                  </div>
                </li>
              </ul>
            </div>
           </div>
        </div>
          <!-- 高清壁纸 -->
        <wallHrPaper></wallHrPaper>
       </div>
     </div>
    <wallScale 
     v-model:ScaleVisible="ScaleVisible" 
     v-model:isSelect="isSelect"
     :heroWallpaper="HeroWallpaper"
     >
    </wallScale>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import breadcrumb from '@/components/breadcrumb/breadcrumb.vue'
import wallScale from './wallScale.vue'
import wallHrPaper from './wallHrPaper.vue'
const ScaleVisible = ref(false)
const isSelect = ref(1)
const HeroWallpaper = ref([
  {
    id:1,
    name:'王维-空山遗客',
    image:'/image/WallPaper/ww.jpg',
    images:'/image/WallPaper/ww768.jpg',
    scale:[
      {id:1,scale:'1024x768'},
      {id:2,scale:'1440x900'},
      {id:3,scale:'1920x1200'}
    ]
  },
  {
    id:2,
    name:'公孙离-碎光执事',
    image:'/image/WallPaper/gsl.jpg',
    images:'/image/WallPaper/gsl768.jpg',
    scale:[
      {id:1,scale:'1024x768'},
      {id:2,scale:'1440x900'},
      {id:3,scale:'1920x1200'}
    ]
  },
  {
    id:3,
    name:'鲁班大师-傩神司',
    image:'/image/WallPaper/lb.jpg',
    images:'/image/WallPaper/lb768.jpg',
    scale:[
      {id:1,scale:'1024x768'},
      {id:2,scale:'1440x900'},
      {id:3,scale:'1920x1200'}
    ]
  },
  {
    id:4,
    name:'海月-真言先知',
    image:'/image/WallPaper/hy.jpg',
    images:'/image/WallPaper/hy768.jpg',
    scale:[
      {id:1,scale:'1024x768'},
      {id:2,scale:'1440x900'},
      {id:3,scale:'1920x1200'}
    ]
  },
  {
    id:5,
    name:'狄仁杰-小李飞刀',
    image:'/image/WallPaper/drj.jpg',
    images:'/image/WallPaper/drj768.jpg',
    scale:[
      {id:1,scale:'1024x768'},
      {id:2,scale:'1440x900'},
      {id:3,scale:'1920x1200'}
    ]
  },

])
const GotoScale = (id) => {
  ScaleVisible.value = true
  isSelect.value = id
}
</script>

<style lang="scss" scoped>
.clearfix:after {
    content: '\20';
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both;
}
.zkcontent{
  width:100%;
  min-width:1600px;
  min-height:620px;
  height:auto;
  margin:0 auto;
  background-color: #f2efe6;
  .artlistcontent{
    position: relative;
    margin: 0 auto;
    padding-top: 40px;
    width:1600px;
  }
  .p_listmain_l{
    width:936px;
    height:auto;
    float: left;
    overflow: hidden;
  }
  .p_listmain_l a:hover{
    text-decoration: underline;
  }
  .p_newhero{
    width:936px;
    height: auto;
    overflow: hidden;
    border-bottom:1px solid #DBDBDB;
    padding-bottom: 10px;
  }
  .p_newheor_title{
    width:936px;
    height:28px;
    line-height:28px;
    margin-bottom:18px;
    >img{
      width:17px;
      height:24px;
      float: left;
      margin:3px 10px 0 0;
      border-radius: 5px;
    }
    >span{
      display: inline-block;
      float: left;
      font-size: 24px;
    }
  }
  .p_newhero_item{
    float: left;
    width:215px;
    height:175px;
    margin:0 19px 15px 0;
    position: relative;
    cursor: pointer;
    img{
      display: block;
      border:0;
      border-radius: 2px;
    }
    h4{
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight:bold;
      
    }
    .sProdImgDown{
      display: inline-block;
      height:20px;
      width:65px;
      float: left;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
      margin-right:5px;
    }
  }
  .p_item_imghover{
    position: absolute;
    width: 215px;
    height: 120px;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgba(0, 0, 0, .3);
    opacity: 0;
    border-radius: 5px;
    display: block;
    span{
      display: block;
      width: 78px;
      height: 46px;
      position: absolute;
      top: 38px;
      left: 75px;
      background:url('/image/WallPaper/icon_imgzoom.png')
    }
  }
  .p_newhero_item:hover .p_item_imghover{
    opacity: 1;
  }
  .sProdImg:hover{
    text-decoration: underline;
  }
  
}
</style>