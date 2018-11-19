// function msg(){
// 	alert("hello world")
// }
// msg();


//网页出现空白，脚本阻塞了页面渲染
// (function(){
// 	function msg(){
// 	alert("hello world")
// }
// msg();
// })()


//未出现空白
define(function(){
    function msg(){
    	console.log(111)
    };
    msg();
})