class Player {
    constructor(props){
        this.width = props.width;
        this.height = props.height;
        this.speed = props.speed;
        this.color = props.color;
        this.position = {
            x: props.position.x,
            y: props.position.y
        }
        this.velocity = {
            x:0,
            y:0
        }
        this.heightJump = 100;
        this.gravity = 0.5;
    }

    movement(direction){
        switch (direction) {
            case "ArrowUp":
                console.log('loncat');
                this.velocity.y = -Math.sqrt(2*this.gravity * this.heightJump);
                break;
                
            case "ArrowLeft":
                console.log('kiri');
                this.velocity.x = -1 * this.speed;
                break;
        
            case "ArrowRight":
                console.log('kanan');
                this.velocity.x = 1 * this.speed;
                break;
        
            // case "ArrowDown":
            //     console.log('turun')
            //     break;
        
            default:
                break;
        }
    }

    update(){
        const ground = canvas.height - this.height;
        const roof = canvas.height + this.height;

        this.velocity.y += this.gravity;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (player.position.y > ground){
            this.position.y = ground;
        }
        // if (player.position.y = roof){
        //     this.position.y = roof;
        // }
    }


    create(){
        board.fillStyle = this.color;
        board.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}