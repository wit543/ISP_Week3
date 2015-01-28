var Ship = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/ship.png' );
    },
    update: function(dt){
	var pos = this.getPosition();
	if ( pos.y < screenHeight ) {
		this.setPosition(new cc.Point(pos.x,pos.y+5));
	}
	else{
		this.setPosition(new cc.Point(pos.x,0));
	}
	
	}
});
