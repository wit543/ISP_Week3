var GameLayer = cc.LayerColor.extend({
    init: function() {
    	console.log( 'Initialized' );
    	this.addKeyboardHandlers(true);
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
      	this.ship = new Ship();
        this.ship.setPosition( new cc.Point( 200, 200 ) );
        this.addChild( this.ship );
        this.gold = new Gold();
        this.addChild(this.gold);
        this.gold.randomPosition();
        this.ship.scheduleUpdate();
		this.scheduleUpdate();
        return true;
    },
    onKeyDown: function( e ) {
        if(e==cc.KEY.space){
             this.ship.switchDirection();
        }
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
    },
	update: function() {
	if ( this.gold.closeTo( this.ship ) ) {
	    this.gold.randomPosition();
	}
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
