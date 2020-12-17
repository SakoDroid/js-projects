/*
* value 1 is rock, 2 is paper and 3 is scissor.
* status 0 is draw, 1 is users win , 2 is bots win.
*/

const rp = '<button value="1" onclick="check(this.value)">ROCK</button>\n<button value="2" onclick="check(this.value)">PAPER</button>\n<button value="3" onclick="check(this.value)">SCISSOR</button>'


class rps {

    names = {1 : "Rock" , 2 : "Paper" , 3 : "Scissor"}

    constructor (value){
        this.user = parseInt(value);
        do{
            this.comp = Math.floor(Math.random() * 10);
        }while (this.comp > 3 || this.comp === 0)
        this.process();
    }

    process(){
        if (this.user === this.comp) {
            this.status = 0;
        }else{
            switch(this.user){
                case 1:
                    if (this.comp === 3) this.status = 1;
                    else this.status = 2;
                    break;
                case 2:
                    if (this.comp === 1) this.status = 1;
                    else this.status = 2;
                    break;
                case 3:
                    if (this.comp === 2) this.status = 1;
                    else this.status = 2;
                    break;
            }
        }
        this.genHtml();
    }

    genHtml(){
        switch (this.status){
            case 0 :
                this.html = "Draw!";
                break;
            case 1 :
                this.html = "You won! <br>" + this.names[this.user] + " beats " + this.names[this.comp];
                const usrs = document.getElementById("usrs");
                usrs.innerHTML = parseInt(usrs.innerHTML) + 1;
                break;
            case 2 : 
                this.html = "The bot won! <br>" + this.names[this.comp] + " beats " + this.names[this.user];
                const bots = document.getElementById("bots");
                bots.innerHTML = parseInt(bots.innerHTML) + 1;
                break;
        }
    }


}

function check(value){
    let rs = new rps(value);
    document.getElementById("sh").innerHTML = rs.html + '</br></br><button onclick="reset()">again!</button>';
    
}

function reset(){
    document.getElementById("sh").innerHTML = rp;
}