var soap = require('soap');
var url = 'http://183.247.156.209:10006/wsdl?wsdl'; // 待叙简提供测试URL
var args = {name: 'value'};

var argsLogin = {
  username : 'test',  // TODO : 待叙简提供测试用户名
  password : '123456',  // TODO : 待叙简提供测试密码
  centerNo : ''   // 中心号码，待叙简提供
};


exports.test = function() {
  // TODO : 如果断线如何处理[没有找到对应的监听接口]
  soap.createClient(url, function(err, client) {
    console.log('err' + err);
    console.log(JSON.stringify(client));
    // client.Login(argsLogin, function(err, result) { // TODO 调用登录接口
    //   console.log(result);
    //   // TODO : 如果登录成功启动心跳逻辑
    // });
  });
}



// TODO : 登录注册流程

// TODO : 心跳流程


// TODO : 登出流程
function logout(client, commonReq) {

}

// TODO : 获取设备列表
// TODO : 获取RTMP流信息
