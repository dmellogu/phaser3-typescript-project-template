import * as Phaser from 'phaser'

export default class MainScene extends Phaser.Scene {

    constructor() {
        super({ key: 'MainScene' })
    }

    async create() {
        this.input.keyboard.on('keydown-R', () => {
            this.scene.restart()
        })
    }
}