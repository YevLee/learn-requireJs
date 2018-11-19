define('student',['apple'],function(apple){
	var student={};
	student.name='zhangsan';
	student.eat=function(){
		console.log(apple.name);
	}
	student.say=function(){
		var sayStr='';
		sayStr+='i am'+this.name+'i like'+apple.name;
		//console.log($('.main'))
		$('p').html(sayStr)
	}
	return student;
})