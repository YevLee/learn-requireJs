define(function(){
	function Window(){};
	Window.prototype={
		alertMsg:function(el,cfg){
			this.el=$(el);
			this.el.css({color:cfg.color});
			this.el.click(function(){
				console.log('hahaahah')
			})
		}
	};
	 return {
        Window: Window
    }
})