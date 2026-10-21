<template>
  <div class="p_hd">
    <div class="p_hd_title">
      <img src="/image/WallPaper/icon_HD.png">
      <span>高清壁纸</span>
      <div class="p_hd_titler">
          <div 
             class="p_sortby p_hd_sortbytime" 
             v-for="type in TypeImage" 
             :key="type.id" 
             @click="SelectType(type.id)"
             >
            <a class="p_hd_title_bytimetxt"  
            :class="{sortActive:select===type.id}"
             :style="{backgroundImage:`url(${select === type.id ? type.acimage : type.default})`}">{{type.text}}</a>
          </div>
          <div class="p_hd_searchbox">
            <el-input
              v-model="inputImg"
              class="p_hd_searchinput"
              clearable
              placeholder="请输入壁纸名称搜索"
              @keyup.enter="onSearch"
            >
              <template #suffix>
                <button
                  type="button"
                  class="p_hd_searchbtn"
                  title="点击搜索"
                  @click="onSearch"
                >
                  <el-icon :size="15"><Search /></el-icon>
                </button>
              </template>
            </el-input>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'

const select = ref(1)
const TypeImage = ref([
  {id:1,text:'时间排序',acimage:'/image/WallPaper/icon_chock_act.png',default:'/image/WallPaper/icon_chock.png'},
  {id:2,text:'热度排序',acimage:'/image/WallPaper/icon_hot.png',default:'/image/WallPaper/icon_hot_gray.png'}
])
const SelectType = (id)=>{
  select.value = id
}
const inputImg = ref('')
const onSearch = () => {
  // 后续接搜索逻辑
  inputImg.value = inputImg.value.trim()
}
</script>

<style lang="scss" scoped>
.p_hd {
  width: 936px;
  min-height: 200px;
  clear: both;
  margin-top: 30px;
  overflow: hidden;
  .p_hd_title {
    display: flex;
    align-items: center;
    width: 936px;
    height: 32px;
    line-height: 32px;
    margin-bottom: 18px;
    color: #363636;
    > img {
      width: 27px;
      height: 25px;
      margin-right: 10px;
      border-radius: 5px;
      flex-shrink: 0;
    }
    > span {
      font-size: 24px;
      line-height: 32px;
    }
    .p_hd_titler {
      margin-left: auto;
      height: 32px;
      line-height: 32px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .p_hd_sortbytime {
        width: 94px;
        height: 32px;
        line-height: 32px;
        cursor: pointer;
        .sortActive {
          color: #0691EB;
          background-image: url('/image/WallPaper/icon_chock_act.png');
        }
        .p_hd_title_bytimetxt {
          display: inline-block;
          padding-left: 20px;
          background: url('/image/WallPaper/icon_chock.png') no-repeat left center;
        }
      }
      .p_hd_sortbyhot{
        width:94px;
        height:32px;
        line-height:32px;
        cursor: pointer;
      }
    }
    .p_hd_titler a:hover{
        text-decoration: underline;
  }
  .p_hd_searchbox {
    position: relative;
    margin-left: 8px;

    .p_hd_searchinput {
      width: 210px;

      :deep(.el-input__wrapper) {
        height: 30px;
        padding: 0 6px 0 14px;
        border-radius: 15px;
        background: #fff;
        box-shadow: 0 0 0 1px #d8dee6 inset;
        transition: box-shadow 0.2s ease, background 0.2s ease;
      }

      :deep(.el-input__wrapper:hover) {
        box-shadow: 0 0 0 1px #0691eb inset;
      }

      :deep(.el-input__wrapper.is-focus) {
        box-shadow: 0 0 0 1px #0691eb inset, 0 0 0 3px rgba(6, 145, 235, 0.16);
      }

      :deep(.el-input__inner) {
        height: 30px;
        font-size: 13px;
        color: #4b4b4b;
      }

      :deep(.el-input__inner::placeholder) {
        color: #a8aeb6;
      }

      :deep(.el-input__suffix) {
        display: flex;
        align-items: center;
      }
    }

    .p_hd_searchbtn {
      appearance: none;
      border: 0;
      background: transparent;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      margin-left: 2px;
      border-radius: 50%;
      color: #8b8b8b;
      cursor: pointer;
      transition: color 0.2s ease, background 0.2s ease;

      &:hover {
        color: #0691eb;
        background: rgba(6, 145, 235, 0.08);
      }

      &:active {
        background: rgba(6, 145, 235, 0.14);
      }
    }
  }
}
}
</style>
