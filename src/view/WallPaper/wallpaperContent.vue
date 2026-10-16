<template>
  <div class="zkcontent">
     <div class="artlistcontent clearfix">
       <breadcrumb></breadcrumb>
     </div>
  </div>
</template>

<script setup>
import breadcrumb from '@/components/breadcrumb/breadcrumb.vue'
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
}
</style>