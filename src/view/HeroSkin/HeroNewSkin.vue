<template>
  <div class="hero-adjust hero-list">
      <div class="wrap-list">
        <div class="wrap-tit">
           <h3>最新皮肤</h3>
        </div>
        <div class="wrap-content">
          <div class="adjust-list">
            <ul>
              <li>
                <div class="SkinItem"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.hero-adjust {
    position: relative;
    top: 0;
    width: 100%;
    margin: auto;
    padding-top: 140px;
}
.hero-list .wrap-list{
    width: 1221px;
    margin: auto;
    overflow: hidden;
    position: relative;
    padding-left: 21px;
    padding-bottom: 250px;
}
.wrap-tit {
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 4px;
    color: #c39b5e;
    text-align: center;
}
.wrap-tit h3::after, .wrap-tit h1::after {
    content: '';
    position: absolute;
    width: 1200px;
    height: 9px;
    background: url('/image/HeroSite/heroIcon-bg.webp') no-repeat;
    background-position-y: -220px;
    top: 68px;
    left: 21px;
}
.wrap-content{
  margin-top:70px;
}
.adjust-list{
    width: 100%;
    overflow: hidden;
    ul{
      li{
        float: left;
        width: 384px;
        overflow: hidden;
        margin-right: 23px;
        height: 357px;
        border: solid 1px #252525;
        background: #000;
        box-sizing: border-box;
        margin-bottom: 24px;
        text-align: center;
      }
      .SkinItem{
        display: block;
        position: relative;
      }
    }
}
</style>