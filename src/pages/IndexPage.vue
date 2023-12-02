<template>

  <HeaderComponent />
  <div class="search">
    <h1 style="text-align: center;margin: 0 auto 30px;">
      使用掌上PPT搜索创建更多内容
    </h1>
    <el-input
        placeholder="搜你所想"
        size="large"
    >
      <template #append>
        <el-button type="primary" :icon="Search" />
      </template>
    </el-input>
  </div>
  <div class="banner">
    <el-carousel :interval="5000" type="card" height="300px">
      <el-carousel-item v-for="item in falseBannerDate" :key="item">
        <el-image :src="item" fit="fill"/>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="content">
    <el-container>
      <el-aside width="350px">
        <el-card style="height: 350px">
          <el-text style="font-size: 24px;">
            公告
          </el-text>
          <el-divider />
          <el-scrollbar height="250px" style="padding: 0">
            <el-timeline style="padding: 0 1px;" >
              <el-timeline-item
                  v-for="item in falseLinkDate"
                  :timestamp="item.time"
                  type="primary"
                  hollow="hollow"
              >
                <el-link>
                  {{ item.title }}
                </el-link>
              </el-timeline-item>
            </el-timeline>
          </el-scrollbar>
        </el-card>
      </el-aside>

      <el-main style="padding: 20px">
        <el-text style="font-size: 24px">
          专题
        </el-text>
        <el-link style="font-size:18px;float:right;padding-top: 10px;">
          更多>>
        </el-link>
        <el-divider />

        //TODO
      </el-main>
    </el-container>

  </div>

  <div class="recommend">
    <el-text style="font-size: 24px;padding-left: 20px">
      优质榜单
    </el-text>
    <el-menu
        mode="horizontal"
        :ellipsis="false"
        style="display: inline-block"
        default-active="0"
    >

      <el-menu-item index="0">推荐</el-menu-item>
      <el-menu-item index="1">竞聘述职</el-menu-item>
      <el-menu-item index="2">教学课件</el-menu-item>
      <el-menu-item index="3">总结汇报</el-menu-item>
      <el-menu-item index="4">教育教学</el-menu-item>
    </el-menu>
    <el-divider style="margin-bottom: 2px" />

    <el-row style="padding-top: 20px">
      <el-card class="qualityListCard" style="margin: 0 11px 20px 11px" v-for="item in falseRecommend">
        <div class="image_div">
          <el-image
              :src="item.imageUrl"
              fit="fill"
              class="cardImage"
          />
          <div class="mask">
            <h4>
              <el-icon><View/></el-icon>
            </h4>
          </div>
        </div>


        <template #footer>
          <el-text>{{item.title}}</el-text>
        </template>
      </el-card>
    </el-row>

  </div>
  <FooterComponent />

</template>

<script setup>

import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import {View,Search} from "@element-plus/icons-vue"
//假数据
const falseBannerDate = [
    "https://novices.cc/assets/img/pay.jpg",
    "https://image1.bangongziyuan.com/files/kindeditor/image/20231113/13/20231113102632_85272.png",
    "https://image1.bangongziyuan.com/files/kindeditor/image/20210304/04/20210304134815_90455.jpg"
]
const falseLinkDate = [
  {
    title:"第一条公告第一条公告第一条公告第一条公告",
    time:"2023-11-12",
    url:""
  },
  {
    title:"第一条公告第一条公告第一条公告第一条公告",
    time:"2023-11-12",
    url:""
  },
  {
    title:"第一条公告第一条公告第一条公告第一条公告",
    time:"2023-11-12",
    url:""
  },
  {
    title:"第一条公告第一条公告第一条公告第一条公告",
    time:"2023-11-12",
    url:""
  },
  {
    title:"第一条公告第一条公告第一条公告第一条公告",
    time:"2023-11-12",
    url:""
  },
  {
    title:"第一条公告第一条公告第一条公告第一条公告",
    time:"2023-11-12",
    url:""
  }
]

const falseRecommend = [
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  },
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  },
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  },
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  },
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  },
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  },
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  },
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  },
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  },
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  },
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  },
  {
    title:'【优质PPT模板】商务风',
    imageUrl:'src/assets/images/111.jpg',
    url:''
  }

]

</script>

<style scoped>
.search{
  padding: 50px 200px 0;
}
:deep(.el-input-group__append, .el-input-group__prepend){
  background-color:#409eff!important;
  color:#ffffff!important;
  box-shadow:none;
}
.banner{
  margin: auto;
  padding: 50px 150px 0;
}
.content{
  padding: 50px 150px 0;
}

.recommend{
  padding: 50px 150px 0;
}

.qualityListCard{
  width: 280px;
  height: 430px;
  --el-card-padding:0;
}

.image_div{
  display: block;
  position: relative;
}
.cardImage{
  width: 100%;
  display: block;
  position: relative;
}

.mask{
  position: absolute;
  background: rgba(101, 101, 101, 0.6);
  color: #ffffff;
  opacity: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  pointer-events:none;
}
.mask h4 {
  text-align: center;
  margin-top: 75%;
  font-size: 48px;
}

.image_div:hover .mask {
  opacity: 1;
}

.el-card__body{
  padding: 0;
}

.el-tabs__header {
  margin-bottom: 0;
}

.el-menu-item {
  background-color: #ffffff;
  font-size: 18px;
  height: 32px;

}
.el-menu-item.is-active{
  background-color: transparent !important;
}

.el-menu-item:not(.is-disabled):hover {
  background-color: transparent;
}


.el-menu--horizontal>.el-menu-item.is-active, .el-menu--horizontal>.el-menu-item {
  border-bottom: 0!important;
}

.el-menu{
  border-bottom: 0!important;
  height: 32px;
  padding-left: 200px;
}

.el-divider{
  margin-top: 2px;
}

</style>