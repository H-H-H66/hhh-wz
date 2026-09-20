<template>
    <div class="breadcrumbs">
            <el-icon style="margin-right: 10px"><WindPower /></el-icon>
            <el-breadcrumb :separator-icon="ArrowRight">
              <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{currentTitle}}</el-breadcrumb-item>
            </el-breadcrumb>
      </div>
</template>

<script setup>
import { WindPower, ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentTitle = computed(() => route.meta.title || '当前页面')
</script>

<style scoped lang="scss">
.breadcrumbs {
    display: flex;
    align-items: center;
    padding: 20px 0;
    color: #666;
    margin-bottom: 20px;
  }
</style>