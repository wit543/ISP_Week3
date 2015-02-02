var GameLayer = cc.LayerColor.extend({
    init: function() {
    	console.log( 'Initialized' );
    	this.addKeyboardHandlers(true);
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
      	var ship = new Ship();
        ship.setPosition( new cc.Point( 200, 200 ) );
        this.addChild( ship );
        ship.scheduleUpdate();
        return true;
    },
    onKeyDown: function( e ) {
	console.log( 'Down: ' + e );
    },
    onKeyUp: function( e ) {
	console.log( 'Up: ' + e );
    },
   addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( e ) {
                self.onKeyDown( e );
            },
            onKeyReleased: function( e ) {
                self.onKeyUp( e );
            }
        }, this);
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