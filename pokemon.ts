class gameCanvas {
    private canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D | any ;

    public backgroundwidth: number;
    public backgroundheight: number;

    public keys = {
        ArrowLeft: {
            pressed: false
        },
        ArrowRight: {
            pressed: false
        },
        ArrowUp: {
            pressed: false
        },
        ArrowDown: {
            pressed: false
        },
    }


    constructor() {
        this.canvas = document.querySelector('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d')
        this.keys = this.keys
        this.backgroundwidth = -815;
        this.backgroundheight = -670;
    }


    // methods

    LoadGame = () => {
        window.requestAnimationFrame(this.LoadGame);

        const context = this.context;
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const background = new Image()
        background.src = './Pellet Town.png'

        const front = new Image();
        front.src = './forward.png';
        this.context.drawImage(background, this.backgroundwidth, this.backgroundheight);
        this.context.drawImage(front, 0, 0, front.width / 4, front.height,
            this.canvas.width / 2 - front.width / 2,
            this.canvas.height / 2 - front.width / 2,
            front.width - 150,
            front.height + 50
        );

        // implementing keys
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.keys.ArrowLeft.pressed = true;
                    break
                case 'ArrowRight':
                    this.keys.ArrowRight.pressed = true;
                    break
                case 'ArrowUp':
                    this.keys.ArrowUp.pressed = true;
                    break
                case 'ArrowDown':
                    this.keys.ArrowDown.pressed = true;
                    break
            }
        })

        window.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.keys.ArrowLeft.pressed = false;
                    break
                case 'ArrowRight':
                    this.keys.ArrowRight.pressed = false;
                    break
                case 'ArrowUp':
                    this.keys.ArrowUp.pressed = false;
                    break
                case 'ArrowDown':
                    this.keys.ArrowDown.pressed = false;
                    break
            }            
        })

        if (this.keys.ArrowLeft.pressed) {
            this.backgroundwidth = this.backgroundwidth + 3
        }

        else if (this.keys.ArrowRight.pressed) {
            this.backgroundwidth = this.backgroundwidth - 3
        }

        else if (this.keys.ArrowUp.pressed) {
            this.backgroundheight = this.backgroundheight + 3
        }

        else if (this.keys.ArrowDown.pressed) {
            this.backgroundheight = this.backgroundheight - 3
        }
    }
}

class LoadBattleScene extends gameCanvas {
    constructor() {
        super();
    }

    battle = () => {

        if (this.backgroundheight = -910, this.backgroundwidth = -851) {
            window.location.href = "battle.html"
        }

    }
}


const canvas = new gameCanvas();
canvas.LoadGame();
const battleScene = new LoadBattleScene();


