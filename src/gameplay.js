
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"assets/images/fondo1.png");
		me.load.spritesheet("crow","assets/images/crow.png",97,120);
		me.load.spritesheet("man1","assets/images/man.png",69,174);
		/*me.load.spritesheet("man","assets/images/girl2.png",205,301);*/
		/*me.load.spritesheet("man","assets/images/girl3.png",90,375);v 130,262  163.4
		me.load.spritesheet("man","assets/images/girl3.png",217.6,267,5); 
		
		me.load.spritesheet("man","assets/images/girl4.png",209.7,273,6);*/
		me.load.spritesheet("man","assets/images/boy3.png",223,207,5);/*la proporción del ancho de la imagen era muy poca*/
    },
	
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');
		
		me.crow= me.game.add.sprite(150,100,"crow");
		me.crow.animations.add("right",[0,1,2,3],8,true);
		me.crow.animations.add("left",[4,5,6,7],8,true);
		me.crow.animations.play("right");
			
		me.man1= me.game.add.sprite(200,350,"man1");
		me.man1.animations.add("right",[0,1,2,3],8,true);
		me.man1.animations.add("left",[4,5,6,7],8,true);
		me.man1.animations.play("right");
		
		me.man=me.game.add.sprite(200,350,"man");
		me.man.animations.add("right",[0,1,2,3,4],10,true);
		/*me.man.animations.add("left",[15,14,13,12,11,10,9,8],10,true)*/
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man.animations.play("right");
    },
    update: function() {
		var me=this;
		me.crow.x+=2;
		me.man.x+=1;
		me.man1.x+=3;
		if(me.crow.x>=me.game.world.width){
			me.crow.x=-100;
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}
		if(me.man1.x>=me.game.world.width){
			me.man1.x=-100;
			}
        
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");