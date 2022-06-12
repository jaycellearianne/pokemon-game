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
  attack(target: Character): any {}
  addExp(_target: Character) {}
}

class Draggle extends Character {
  constructor() {
    super();
  }
  attack(_target: Emby): any {
    let playerHealth = document.getElementById("health") as HTMLInputElement;
    let enemyHealth = document.getElementById("Ehealth") as HTMLInputElement;
    playerHealth.value -= 20;

    if(enemyHealth.value === 0){
        window.location.href = "pokemon.html"
    }
}

class Emby extends Character {
  constructor() {
    super();
  }
  attack(_target: Draggle): any {
    let enemyHealth = document.getElementById("Ehealth") as HTMLInputElement;
    enemyHealth.value -= 20;

    return attack();
  }
  addExp(_target: Character): void {
    function xp() {
      let playerXp = document.getElementById("exp") as HTMLInputElement;
      playerXp.value += 10;
    }
    if (_target.hp === 0) {
      return xp();
    }
  }
}

const fight = new FightScene();
fight.load();
const battle = new Character();
const player = new Emby();
const enemy = new Draggle
