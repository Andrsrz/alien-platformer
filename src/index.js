import Phaser from 'phaser'

let gameScene = new Phaser.Scene('Game')

gameScene.preload = function(){
	this.load.image('background', '../src/assets/bg_castle.png')
}

gameScene.create = function(){
	this.add.sprite(640/2, 360/2, 'background')
}

let config = {
	type: Phaser.AUTO,
	width: 640,
	height: 360,
	scene: gameScene
}

let game = new Phaser.Game(config)
