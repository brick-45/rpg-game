import './style.css'
import Phaser from 'phaser';

class GameScene extends Phaser.Scene{
    constructor(){ //початок створення змінних
       super("GameScene"); //виклик бітьківського класу

       this.crystals = 0; // старт
       this.allCrystals = 5; // кінець

       this.win = false; // статус гри false -  гра триває; true - виграш
       this.dialog = false; // статус діалогу false -  немає; true - є
    }

    preload(){ //завантаження картинок
        this.preload.image("background", "/images/fon.png")
        this.preload.image("player", "/images/fon.png")
        this.preload.image("npc", "/images/fon.png")
        this.preload.image("bush", "/images/fon.png")
        this.preload.image("crystal", "/images/fon.png")
    }

    create(){ // 

    }

    openDialog(){ // відкриття діалогу

    }

    addBush(){ // створення перешкод

    }

    update(){ //оновлення гри

    }
}