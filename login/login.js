//引入layui.layer
let layer = layui.layer;

//切换功能
//去注册
$('#goto-register').on('click',function(){
    $('#login').hide();//隐藏
    $('#register').show()//显示
})
//去登陆
$('#goto-login').on('click',function(){
    $('#login').show()
    $('#register').hide()
})


// -------------------------------------------注册
// html：form表单！按钮/表单元素 name属性和参数名一致！
// JS ：收集数据！$.ajax()
$('#register form').on('submit',function(e){
  e.preventDefault();//阻止冒泡 
  // 1.收集数据  JQ  layui.form模块
  //收集数据
  let data = $(this).serialize();//this指向的是form

  //提交数据
  $.ajax({
      type:'post',
      url:"http://ajax.frontend.itheima.net/api/reguser",
      data:data,
      success:function(res){
          layer.msg(res.message)//layer.msg弹窗提醒
          //判断是否注册成功
          if (res.status == 0){
              //去登陆
              $('#goto-login').click();
              //注册表单重置
              //jq对象[0].reset()
              $('#register form')[0].reset();
          }
      }
  })
})