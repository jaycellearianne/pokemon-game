class FightScene {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public player: Character;
  public enemy: Character;
  public gameOver: boolean;
  constructor() {
    this.player = new Emby();
    this.enemy = new Draggle();
    this.gameOver = false;

    this.canvas = document.getElementById("fightscene") as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d");
  }
  load = () => {
    const context = this.context;

    let background = new Image();
    background.src = "battleBackground.png";
    background.onload = () => {
      context.drawImage(
        background,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
    };

    let player = new Image();
    player.src = "embySprite1.png";
    player.onload = () => {
      context.drawImage(player, 200, 325, 100, 100);
    };
    let enemy = new Image();
    enemy.src = "draggleSprite1.png";
    enemy.onload = () => {
      context.drawImage(enemy, 600, 100, 100, 100);
    };
  };
}
class Character {
  public hp!: HTMLInputElement | any;
  public xp!: number;
  constructor() {
    this.hp = this.hp;
  }

  run() {
    window.location.href = "pokemon.html";
  }
  attack(target: Character): any {
    attack(target: Character){
    function attack() {
        let playerHealth = document.getElementById("health") as HTMLInputElement;
        playerHealth.value -= 10;
  
        if(target.hp.value === 0){
          window.location.href = "pokemon.html";
        }
      }
      return attack();
  }
  addExp(_target: Character) {}
}

class Draggle extends Character {
  constructor() {
    super();
  }
  attack(_target: Emby): void {}
}

class Emby extends Character {
  constructor() {
    super();
  }
  attack(_target: Draggle): void {}
}

const fight = new FightScene();
fight.load();
const battle = new Character();
