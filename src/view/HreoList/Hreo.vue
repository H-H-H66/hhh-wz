<<template>
  <div class="Hreo">
    <div class="page-scroll">
     <banner-top />
     <bannerList></bannerList>
      <div class="content-Top">
        <div class="content-bottom">
          <breadcrumb></breadcrumb>
          </div>
         </div>
  </div>
  </div>
</template>

<script setup>
import bannerTop from '@/components/bannerTop/bannerTop.vue'
import bannerList from "@/components/bannerList/bannerList.vue"
import breadcrumb from "@/components/breadcrumb/breadcrumb.vue"
</script>

<style scoped lang="scss">
.Hreo{
   height: 100vh;
   overflow: hidden;
   background: #f2efe6;
}
.page-scroll {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.content-Top {
  margin-top: -5px;
  background-color: #f2efe6;
}

.content-bottom {
  width: 1200px;
  min-height: calc(100vh - 300px);
  margin: 0 auto;
  padding-bottom: 55px;
  box-sizing: border-box;
}
</style>