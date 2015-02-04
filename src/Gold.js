var Gold = cc.Sprite.extend({
	ctor:function(){
		this._super();
		this.initWithFile("res/images/Gold.png");
	},
	randomPosition: function(){
		this.setPosition(new cc.Point(75+Math.floor(Math.random()*200),75+Math.floor(Math.random()*200)));
	},
	closeTo: function( obj ) {
	var myPos = this.getPosition();
	var oPos = obj.getPosition();
  	return ( ( Math.abs( myPos.x - oPos.x ) <= 100 ) &&
		 ( Math.abs( myPos.y - oPos.y ) <= 100 ) );
    }
    
});
