<template>
   <div class="content">
        <img
          src="/public/image/VersionZone/bannerImage.webp"
          class="content-img"
          alt=""
        />
        <img
          src="/public/image/VersionZone/detailButton.webp"
          class="content-button"
          alt=""
        />
      </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.content {
  position: relative;

  .content-img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .content-button {
    position: absolute;
    left: 105px;
    top: 214px;
    cursor: pointer;
  }
}

</style>