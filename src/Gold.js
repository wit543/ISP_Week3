var Gold = cc.Sprite.extend({
	ctor:function(){
		this._super();
		this.initWithFile("res/images/Gold.png");
	},
	randomPosition: function(){
		this.setPosition(new cc.Point(50+Math.floor(Math.random()*200),50+Math.floor(Math.random()*200)));


	}
});