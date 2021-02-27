//询问弹窗
let layer = layui.layer;
//获取个人信息
$.ajax({
    type:'get',
    url: "http://ajax.frontend.itheima.net/my/userinfo",
  // type:"get",
  // 没有传参
  // 设置请求头：
  headers: {
    Authorization: localStorage.getItem("token")
  },
  success:function(res){
      if(res.status == 0){
        // 产品经理设计思路：
      //      1.名字：优先显示昵称，后则显示用户名！  
      let name = res.data.nickname || res.data.username;
      $('.username').text(name);
      //      2.圆形：优先显示头像，后则显示名字的第一个字！
      if(res.data.user_pic != null){
      // 图片base64图片流：
        //     好处：直接在HTML页面中，在页面中渲染，减少对服务器请求！
        //     弊端：处理图片流字符串，把图片大小增加为原来30%；前端HTML加载费劲！
        //     场景：处理小图；雪碧图；
        $(".userinfo img").show().css("display", "inline-block").attr("src", res.data.user_pic);     
      }
      //名字第一个字
      else{
      //截取
      let str = name.substr(0,1)
      // 2.大写：防止第一个字是英文！
      str = str.toUpperCase();
        // 3.设置
        $(".avatar").show().css("display", "inline-block").text(str);
        //      show方法：给DOM添加行内样式 display: inline;
        //      需要：单独设置css样式
      }
      }
  }
})
//退出功能
// 设置：开发过程检查html结构
//      1.index首页----->所谓回到login.html
//      2.清空token;
$('#logout').on('click',function(){
    layer.confirm('您确认退出么?', { icon: 3, title: '提示' }, function(index) {
        layer.close(index);
    
        // 1.回到login.html
        location.href = "../login.html";
    
        // 2.清空token本次存储（？为什么 token管理）
        localStorage.removeItem("token");
    
      });
})