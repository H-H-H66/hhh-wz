<<template>
  <div class="right-zone">
    <img src="/public/image/banner1/debalt.png" class="img-default">
    <div class="news-tab news-tab">
      <div class="button1760">热门</div>
      <div class="button1762">公告</div>
      <div class="button1764">新闻</div>
      <div class="button1766">活动</div>
      <div class="button1768">赛事</div>
      <div class="more-button">更多</div>
      <img src="/public/image/banner1/xiang.png" class="img-xiang">
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.right-zone{
    position: absolute;
    left: 499px;
    top: 5px;
    .img-default{
      width: 610px;
    }
    .news-tab{ 
      position: absolute;
      left: -28px;
      font-size: 16px;
      text-align: center;
      user-select: none;
      .button1760{
        position: absolute;
        color: #d3d3d3;
        width: 80px;
        left: 10px;
        top: 10px;
      }
      .button1762{
        position: absolute;
        color: #d3d3d3;
        width: 80px;
        left: 100px;
        top: 10px;
      }
      .button1764{
        position: absolute;
        color: #d3d3d3;
        width: 80px;
        left: 190px;
        top: 10px;
      }
      .button1766{
        position: absolute;
        color: #d3d3d3;
        width: 80px;
        left: 280px;
        top: 10px;
      }
      .button1768{
        position: absolute;
        color: #d3d3d3;
        width: 80px;
        left: 370px;
        top: 10px;
      }
      .more-button{
          position: absolute;
          width: 48px;
          height: 20px;
          line-height: 18px;
          left: 492px;
          top: 12px;
          color: #d3d3d3;
          text-align: center;
          cursor: pointer;
          border: 1px solid #d3d3d3;
      }
      .img-xiang{
          position: absolute;
          width: 555px;
          left: -28px;
          height:1px;
          overflow-clip-margin: content-box;
          overflow: clip;
           top: -5px;
      }
    }
    img{
      position: absolute;
      width: 650px;
      height: 216px;
      left: -55px;
      top: -5px;
    }
}
</style>