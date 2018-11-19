define(['jquery'],function($){
	function Window(){
		this.cfg={
			fontSize:40
		}
	};
	Window.prototype={
		alertMsg:function(el,cfg){
			this.el=$(el);
			$.extend(this.cfg,cfg);
			//this.cfg=cfg;
			//console.log(this.cfg)
			this.el.css({color:this.cfg.color,'font-size':this.cfg.fontSize});
			console.log(cfg);
			console.log(this.cfg)
			this.el.on('click',function(){
				cfg.handler && cfg.handler()
			});

			//this.el.attr("style",'font-size:'+this.cfg.fontSize+'px')
		}

	}

	 return {
        Window: Window
    }
})