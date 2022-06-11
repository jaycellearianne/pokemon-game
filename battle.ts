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
      context.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
    };

    let player = new Image();
    player.src = "embySprite1.png";
    player.onload = () =>{
        context.drawImage(player, 200,325 , 100, 100);
    }
    let enemy = new Image();
    enemy.src = "draggleSprite1.png";
    enemy.onload = () =>{
        context.drawImage(enemy, 600,100 , 100, 100);
    }
  };
}
class Character {
 public hp!: number;
 public xp!: number;
 constructor(){
 }

 run(){
    let button
    window.location.href = 'pokemon.html'
 }
 attack(target: Character){
    target.hp = target.hp - 1;

    if(target.hp === 0){
        window.location.href = 'pokemon.html'
    }
 }
 addExp(target:Char){
 }
}

class Draggle extends Character{
}

class Emby extends Character{

}


const fight = new FightScene();
fight.load();
const battle = new Character()

