import Phaser from 'phaser'

import MainScene from './scenes/scene'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [MainScene]
}

export default new Phaser.Game(config)