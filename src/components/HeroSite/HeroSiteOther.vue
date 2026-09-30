<template>
  <div class="HeroSiteOther">
    <h3>其他</h3>
  </div>
  <div class="pvp-cont1">
    <ul class="model">
      <li class="cont-left">
        <div class="cont-leftcon">
          <img src="/image/HeroSite/sw.webp">
          <div class="bottom-mask">
            <p class="mask-tit">新玩法-守卫峡谷</p>
            <p class="mask-time">2021.01.06</p>
            <p class="mask-txt">守卫峡谷，全新PVE玩法来了！</p>
            <p class="mask-more">
              <span>
                查看详情
                <i class="more-icon"></i>
              </span>
            </p>
          </div>
        </div>
      </li>
      <li class="cont-right">
        <div class="cont-rightgo">
          <img src="/image/HeroSite/swj.webp"></img>
          <div class="bottom-mask">
            <div class="bottom-left">
              <p class="mask-tit">战队赛全国大赛版本</p>
              <p class="mask-time">2020.01.09</p>
            </div>
            <div class="bottom-right">
              <p class="mask-more">
                <span>
                  查看详情
                  <i class="more-icon"></i>
                </span>
              </p>
            </div>
            <i class="other-icon icon-xitong"></i>
          </div>
        </div>
      </li>
      <li class="cont-right">
        <div class="cont-rightGo">
          <img src="/image/HeroSite/bs.webp"></img>
          <div class="bottom-mask">
            <div class="bottom-left">
              <div class="mask-tit">青白蛇美术优化</div>
              <div class="mask-time">即将上线</div>
            </div>
            <div class="bottom-right">
              <p class="mask-more">
                <span>
                  查看详情
                  <i class="more-icon"></i>
                </span>
              </p>
            </div>
          </div>
          <i class="other-icons icon-meishu"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.HeroSiteOther {
  margin-top:50px;
}
.HeroSiteOther h3 {
    color: #b98c52;
    text-align: center;
    font-size: 30px;
    margin: 100px 0 80px 0;
}
.HeroSiteOther h3:before {
    content: '';
    position: absolute;
    background: url(/image/HeroSite/icon-bg.webp) no-repeat;
    width: 36px;
    height: 49px;
    top: -45px;
    background-position-x: -31px;
    left: 50%;
    margin-left: -18px;
    background-position-y: -56px;
}
.HeroSiteOther h3:after {
    content: '';
    position: absolute;
    background: url(/image/HeroSite/icon-bg.webp) no-repeat;
    width: 175px;
    height: 10px;
    top: 50px;
    background-position-y: -109px;
    left: 50%;
    margin-left: -87.5px;
}
.pvp-cont1 {
    width: 1200px;
    margin: auto;
    overflow: hidden;
    .model{
      position: relative;
      display: grid;
      grid-template-columns: 700px 480px;   /* 左700 + 右480 = 1180，gap20 = 1200 */
      grid-template-rows: 290px 290px;       /* 两行各290，加gap20 = 600，和左卡等高 */
      gap: 20px;
    .cont-left{
        position: relative;
        grid-row: span 2;                    /* 左卡跨两行 */
        height: 600px;
        box-sizing: border-box;
        border: solid 1px #252525;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.9);
        opacity: 0.9;
      }
    .cont-left:hover .cont-leftcon img {
    transform: scale(1.1);
     }
      .cont-leftcon{
        width: 700px;
        position: relative;
        display: block;
        cursor: pointer;
      }
      .cont-left .cont-leftcon img {
        width: 100%;
        height: 600px;
        -webkit-transition: all .4s ease;
        transition: all .4s ease;
      }
  .bottom-mask {
    position: absolute;
    bottom: -10px;
    color: #fff;
    text-align: center;
    width: 100%;
    right: 0;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .8));
    height: 500px;
}
.bottom-mask .mask-tit {
    font-size: 30px;
    line-height: 60px;
    letter-spacing: 3px;
    margin-top: 225px;
}
.bottom-mask .mask-time {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1px;
    color: #ccc;
}
.bottom-mask .mask-txt {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1px;
    color: #999;
    width: 542px;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
    margin: auto;
    height: 48px;
}
.bottom-mask .mask-more{
  font-size:18px;
  line-height: 60px;
  letter-spacing: 1px;
  color:rgb(195,155,94);
  width:260px;
  height:60px;
  background-color:rgba(0,0,0,0.5);
  position:relative;
  border:1px solid rgba(195,155,94);
  border-image:none;
  margin:30px auto;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  /* 悬停：背景填充金色，文字变黑，轻微放大 */
  &:hover{
    background-color:rgb(195,155,94);
    color:#1a1a1a;
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(195,155,94,0.4);
  }
  span {
    position: absolute;
    left: 0px;
    width: 100%;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    /* 悬停时整体轻微左移，让箭头从右侧"滑入"的感觉 */
  }
  &:hover span{
    transform: translateX(-4px);
  }
  .more-icon {
    transform: rotate(45deg);
    display: inline-block;
    width: 13px;
    height: 13px;
    border-top: 2px solid rgb(195, 155, 94);
    border-right: 2px solid rgb(195, 155, 94);
    margin-left: 10px;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }
  &:hover .more-icon{
    transform: rotate(45deg) translateX(6px);
    border-color: #1a1a1a;
  }
}
.cont-right{
  position: relative;
  z-index:1;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.9);
  opacity:0.9;
  overflow: hidden;
  border:1px solid rgb(37,37,37);
  border-image:none;
  cursor: pointer;
}
.cont-rightgo{
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.cont-rightgo img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s;
}
.cont-right:hover .cont-rightgo img {
    transform: scale(1.1);
}
.cont-right .bottom-mask{
    position: absolute;
    bottom: -10px;
    color: rgb(255, 255, 255);
    text-align: center;
    width: 100%;
    right: 0px;
    height: 150px;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.8));
}
.bottom-mask .bottom-left{
    float: left;
    margin-left: 30px;
    text-align: left;
    .mask-tit{
        font-size: 20px;
        line-height: 30px;
        text-overflow: ellipsis;
        width: 390px;
        margin-top: 50px;
        white-space: nowrap;
        overflow: hidden;
    }

}
.bottom-mask .bottom-right{
       float: right;
       margin-right: 28px;
    .mask-more{
      width: 200px;
      font-size: 18px;
      line-height: 50px;
      letter-spacing: 1px;
      color: rgb(195, 155, 94);
      height: 50px;
      background-color: rgba(0, 0, 0, 0.5);
      position: relative;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(195, 155, 94);
      border-image: none;
      margin: 30px auto;
      overflow: hidden;
      top:-70px;
      cursor: pointer;
      transition: all 0.3s ease;
      /* 悬停：金色填充 + 文字变黑 + 上移 + 阴影 */
      &:hover{
        background-color: rgb(195, 155, 94);
        color: #1a1a1a;
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(195,155,94,0.4);
      }
      span{
        position: absolute;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
      }
      &:hover span{
        transform: translateX(-4px);
      }
      .more-icon{
        transform: rotate(45deg);
        display: inline-block;
        width: 13px;
        height: 13px;
        border-top: 2px solid rgb(195, 155, 94);
        border-right: 2px solid rgb(195, 155, 94);
        margin-left: 10px;
        transition: transform 0.3s ease, border-color 0.3s ease;
      }
      &:hover .more-icon{
        transform: rotate(45deg) translateX(6px);
        border-color: #1a1a1a;
      }
    }
}
.other-icon{
        position: absolute;
        width: 129px;
        height: 56px;
        top: -145px;
        left: 0px;
}
.icon-xitong{
      background:url('/image/HeroSite/xt.webp')
    }
.pvp-cont1 ul .cont-right:last-child {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0.9;
    overflow: hidden;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(37, 37, 37);
    border-image: none;
}
  }
}
.cont-rightGo{
    position: relative;
    z-index: 1;
    display: block;
    height: 288px;
    overflow: hidden;
    img{
      width: 480px;
      transition: 0.4s;
    }
    &:hover img{
      transform: scale(1.1);
    }
    .bottom-mask{
    position: absolute;
    bottom: -10px;
    color: rgb(255, 255, 255);
    text-align: center;
    width: 100%;
    right: 0px;
    height: 500px;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.8));
    }
    .bottom-left{
      float:left;
      margin-left:30px;
      text-align: left;
    }
    .icon-meishu {
    background: url('/image/HeroSite/icon_meishu.png');
    }
    .other-icons{
    position: absolute;
    width: 129px;
    height: 56px;
    top: 16px;
    left: 0px;
}
  }

</style>