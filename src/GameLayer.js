var GameLayer = cc.LayerColor.extend({
    init: function() {
    	console.log( 'Initialized' );
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
      	var ship = new Ship();
        ship.setPosition( new cc.Point( 200, 200 ) );
        this.addChild( ship );
        ship.scheduleUpdate();
        return true;
    }
});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
    	console.log( 'GameLayer created' );
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});