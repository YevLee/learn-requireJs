define('apple',function(){
	var apple={};
	apple.name='apple';
	apple.num=20;
	apple.price='3.5';
	apple.total=function(){
		var total;
	    total=this.num*this.price;
	    var totalSpan=$('<span>我买了￥'+total+this.name+'</span>');
	    $('.main').append(totalSpan)
	};
	apple.total();
	return apple;
})