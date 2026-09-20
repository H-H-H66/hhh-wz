<template>
  <div class="user-edit-page">
    <aside class="page-aside">
      <Aside />
    </aside>
    <div class="page-body">
      <Header />
      <main class="page-main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import Aside from './Aside.vue'
import Header from './Header.vue'
// import Main from './profile.vue/index.js'
</script>

<style scoped>
.user-edit-page {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 16px;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  padding: 16px;
  background: #f0f2f5;
  color: #1f2430;
}

.page-aside {
  min-height: 0;
}

.page-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}

.page-main {
  flex: 1;
  min-height: 0;
}
</style>
