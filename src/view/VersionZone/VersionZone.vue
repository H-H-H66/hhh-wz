<template>
  <div class="VersionZone">
    <div class="page-scroll">
      <banner-top />
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
      <div class="content-Top">
        <div class="content-bottom">
          <div class="breadcrumbs">
            <el-icon style="margin-right: 10px"><WindPower /></el-icon>
            <el-breadcrumb :separator-icon="ArrowRight">
              <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>版本更新说明</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <ul class="list">
            <li>
              <div class="banner_bd">
                <img
                  src="/public/image/VersionZone/mingge.webp"
                  alt="轮播图"
                  title="不拘命格"
                />
              </div>
              <div class="exp_con">
                <h3>不拘命格</h3>
                <p class="tx">更新时间：2026.06.25</p>
                <span class="refresh">更新内容：</span>
                <div class="exp_list">
                  <img
                    class="exp-list-img"
                    src="/public/image/VersionZone/li_bg5.png"
                    alt=""
                  />
                  <div>
                    <p class="tx">新赛季-不拘命格</p>
                    <p class="tx">孙悟空命格-心魔六耳</p>
                    <p class="tx">新赛季装备-无象神器</p>
                    <p class="tx">新战令-岁景四时</p>
                    <p class="tx">更多新内容</p>
                  </div>
                </div>
                <div class="checkNewMes">查看版本详情</div>
              </div>
            </li>
            <li>
              <div class="banner_bd">
                <img
                  src="/public/image/VersionZone/mingge.webp"
                  alt="轮播图"
                  title="不拘命格"
                />
              </div>
              <div class="exp_con">
                <h3>不拘命格</h3>
                <p class="tx">更新时间：2026.06.25</p>
                <span class="refresh">更新内容：</span>
                <div class="exp_list">
                  <img
                    class="exp-list-img"
                    src="/public/image/VersionZone/li_bg5.png"
                    alt=""
                  />
                  <div>
                    <p class="tx">新赛季-不拘命格</p>
                    <p class="tx">孙悟空命格-心魔六耳</p>
                    <p class="tx">新赛季装备-无象神器</p>
                    <p class="tx">新战令-岁景四时</p>
                    <p class="tx">更多新内容</p>
                  </div>
                </div>
                <div class="checkNewMes">查看版本详情</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bannerTop from '@/components/bannerTop/bannerTop.vue'
import { WindPower, ArrowRight } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.VersionZone {
  height: 100vh;
  overflow: hidden;
  background: #f2efe6;
}

.page-scroll {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

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

  .breadcrumbs {
    display: flex;
    align-items: center;
    padding: 20px 0;
    color: #666;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .list {
    width: 100%;
    overflow: hidden;
    height: auto;

    li {
      width: 100%;
      height: 384px;
      list-style: none;
      background-color: #f3f3f3;
      margin-bottom: 55px;

      .banner_bd {
        position: relative;
        display: block;
        float: left;
        width: 684px;
        height: 384px;

        img {
          display: block;
          border-radius: 2px;
          cursor: pointer;
        }
      }

      .exp_con {
        float: left;
        width: 478px;
        height: 344px;
        margin-top: 24px;
        margin-left: 38px;
        line-height: 30px;

        h3 {
          color: #6e6d87;
          font-size: 22px;
          line-height: 50px;
          font-weight: bold;
        }

        .tx {
          font-size: 16px;
          color: #6e6d87;
        }

        .refresh {
          display: block;
          color: #6e6d87;
          font-size: 16px;
          margin-top: 16px;
          font-weight: bold;
        }

        .exp_list {
          width: 100%;
          height: 162px;

          .exp-list-img {
            display: block;
            float: left;
            margin-top: 4px;
          }

          div {
            width: 330px;
            height: 112px;
            float: left;
            margin-left: 7px;

            .tx {
              font-size: 16px;
              color: #6e6d87;
            }
          }
        }

        .checkNewMes {
          display: block;
          width: 126px;
          height: 40px;
          border-radius: 2px;
          background: url('../../../public/image/VersionZone/page-bg.webp');
          color: #ffffff;
          font-size: 16px;
          line-height: 40px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
