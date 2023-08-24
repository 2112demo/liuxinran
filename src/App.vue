<template>
  <div id="app">
    <div class="leftbar">
      <LeftBar msg="Welcome to Your Vue.js App"/>
    </div>
    <!--  -->
    <div class="rigntconter">
      <div class="header">
        <p>
          <span class="iconfont icon-gengduo"></span>
          <span class="iconfont icon-kuozhan"></span>
        </p>
        <p>
          <span class="name">(北京)文化有限公司</span>
          <span class="iconfont icon-shezhi"></span>
        </p>
      </div>

      <router-view/>
    </div>

    <!-- <router-view/> -->
  </div>
</template>

<script>
import LeftBar from './components/LeftBar.vue'

export default {
  name: 'App',
  components: {
    LeftBar
  },
  data () {
    return {
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


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: flex;
}
*{padding: 0;margin: 0;list-style: none;}
a{text-decoration: none; color:#2c3e50}
#app .leftbar{
  width: 20vw;
  height: 100vh;
}


#app .rigntconter{
  flex: 1;
  background-color: #f5f5f5;
  height: 100vh;
}

.rigntconter .header{
  background-color: #2c4198;
  height: 50px;
  line-height: 50px;
  color: #fff;

  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 40px;
}
.rigntconter .header .iconfont.icon-gengduo{
  font-size: 20px;
  margin-right: 20px;
}
.rigntconter .header .iconfont.icon-kuozhan{
  font-size: 18px;
}
.rigntconter .header .iconfont.icon-shezhi{
  font-size: 18px;
  margin-left: 20px;
}
</style>

