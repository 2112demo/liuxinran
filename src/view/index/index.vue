<template>
  <div class="page">
    <div class="head">
      <span class="iconfont icon-daohang-pingtaiyunying"></span>
      <span class="name">/ 首页</span>
    </div>

    <div class="content">
      <div class="left">
        <div class="title">最近项目</div>

      </div>
      <div class="center">
        <div class="title">资金动态</div>
      </div>
      <div class="right">
        <div class="order"></div>
        <div class="order"></div>
        <div class="link">
          <div class="title">快速链接</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.page{
  padding: 15px; 
}
.page .head{
  margin-bottom: 30px;
}
.page .head .iconfont{
  font-size: 25px;
  color: #2c4198;
}
.page .head .name{
  font-size: 14px;
}

.page .content {
  display: flex;
  justify-content: space-between;
}
.page .content .left,.page .content .center,.page .content .right{
  width: calc((100vw - 20vw - 70px)/ 3);
  height: 75vh;

}
.page .content .title{
  border-bottom: 2px solid #f5f5f5;
  padding: 15px 0 15px 30px;
  font-weight: 600;
  font-size: 18px;
}

.page .content .left,.page .content .center{
  background-color: #fff;
}



.page .content .right .order{
  height: 15vh;
  margin-bottom: calc(5vh/2);
  background-color: #fff;
}
.page .content .right .link{
  height: 40vh;
  background-color: #fff;
}



</style>