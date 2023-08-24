<template>
  <div class="bar">
    <div class="header"><span class="iconfont icon-yunfuwuqi"></span>服务平台</div>
      <div class="common">
        <div class="title">常规操作</div>
        <div class="box">
          <span class="iconfont icon-daohang-pingtaiyunying"></span>
          <router-link to="/" class="name">首页</router-link>
        </div>
      </div>
      <div class="business">
        <div class="title">业务管理</div>
        <ul class="list">
          <li v-for="item in list" :key="item.id">
            <div @click="changeIndex(item.id)" class="item">
              <div class="lef">
                <span :class="item.icon" class="icon"></span>
                <p class="name">{{ item.title }}</p>
              </div>
              <span class="iconfont icon-arrow-down-bold"></span>
            </div>
            <dl :class="{'height0': showIndex === item.id?false:true}">
              <dd v-for="list in item.list" :key="list.id">
                <span class="iconfont icon-arrow-right-bold"></span>
                <router-link :to="list.router" class="name">{{ list.name }}</router-link>
              </dd>
            </dl>
          </li> 
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LeftBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showIndex: null,
      list: [
        {id:1,title:"项目任务",icon:"iconfont icon-renwuzongshu",list:[
          {id:1,name:"批量新建订单",router:"/projectNew1"},
          {id:2,name:"项目列表",router:"/projectNew2"},
          {id:3,name:"任务派单",router:"/projectNew3"},
          {id:4,name:"订单列表",router:"/projectNew4"}
        ]},
        {id:2,title:"资金发票",icon:"iconfont icon-fapiao",list:[
          {id:5,name:"专属账户",router:"/projectNew5"},
          {id:6,name:"账户余额",router:"/projectNew6"},
          {id:7,name:"发票申请记录",router:"/projectNew7"},
          {id:8,name:"发票收件地址",router:"/projectNew8"}
        ]},
        {id:3,title:"企业管理",icon:"iconfont icon-qiyeguanli",list:[
          {id:9,name:"企业信息资料",router:"/projectNew9"}
        ]}
      ]
    }
  },
  methods: {
    changeIndex (id) {
      if(this.showIndex == id) return this.showIndex = null;
      this.showIndex = id
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bar .header{
  background-color: #d0121b;
  height: 50px;
  line-height: 50px;
  color: #fff;

  text-align: center;
  font-size: 18px;
}
.bar .header .iconfont.icon-yunfuwuqi{
  font-size: 20px;
  margin-right: 5px;
}
.bar .common{
  margin-bottom: 15px;
}
.bar .common .box{
  margin: 0 10px;
  background-color: #e1e0e0;
  line-height: 50px;
  border-radius: 28px;
  padding-left: 25px;
  color: #2c4198;
  font-weight: 700;
  display: flex;
}
.bar .common .box .iconfont.icon-daohang-pingtaiyunying{
  font-size: 26px;
  margin-right: 5px;
}
.bar .common .box .name{
  font-size: 16px;
  line-height: 50px;
  display: block;
  color: #2c4198;
}
.bar .business .list{
  padding: 0 40px 0 30px;
}
.bar .business .list li{
  line-height: 50px;
}
.bar .business .list li .item{
  display: flex;
  justify-content: space-between;
}
.bar .business .list li .item .lef{
  display: flex;
}
.bar .business .list li .item .name{
  margin: 0 0px 0 20px;
  font-weight: 550;
  font-size: 16px;
}
.bar .business .list li .item .icon{
  font-size: 24px;
  color: #868e96;
}
.bar .business .list li dl{
  padding-left: 15px;
}
.bar .business .list li dl dd{
  line-height: 34px;
}
.bar .business .list li dl .iconfont{
  font-size: 12px;
}
.bar .business .list li dl .name{
  font-size: 14px;
}


.bar .title{
  margin-left: 20px;
  line-height: 45px;
  font-size: 14px;
  color: #868e96;
  font-weight: 550;
}
.height0{
  height: 0;
  overflow: hidden;
}
</style>
