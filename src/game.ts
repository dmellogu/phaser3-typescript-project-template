import * as Phaser from 'phaser'
import PreloadScene from './scenes/preloadScene'
import MainScene from './scenes/mainScene'

const DEFAULT_WIDTH = 240 * 4
const DEFAULT_HEIGHT = 160 * 4

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#000',
    pixelArt: true,
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    dom: {
        createContainer: true
    },
    scene: [
        PreloadScene,
        MainScene
    ]
}

new Phaser.Game(config)
