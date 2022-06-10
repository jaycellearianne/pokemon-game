class FightScene {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private player: Character;
  public enemy: Character[];
  public gameOver: boolean;
  constructor() {
    this.player = new Character;
    this.enemy = String;
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
  };
}
