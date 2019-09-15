window.onload = function(){
    let canvas = document.getElementById("sky");
    let contax = canvas.getContext("2d");

    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    let mf = 100;
    let flasks = [];

    for(let i = 0; i < mf; i++){
        flasks.push({
            x: this.Math.random() * W,
            y: this.Math.random() * H,
            r: this.Math.random() * 5 + 2,
            d: this.Math.random() + 1
        })
    }

    function drawFlakes(){
        contax.clearRect(0,0,W,H);
        contax.fillStyle = 'white';
        contax.beginPath()
            for(let i = 0; i < mf; i++){
                let f = flasks[i];
                contax.moveTo(f.x, f.y);
                contax.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
            }
            contax.fill();
            makesFlasks();
        
    }

    let angle = 0;

    function makesFlasks(){
        angle += 0.01;

        for(let i =0; i< mf; i++){

            let f = flasks[i];

            f.y+= Math.pow(f.d, 2) + 1;
            f.x+= Math.sin(angle) * 2;

            if(f.y > H){
                flasks[i] = {x:Math.random()*W, y:0, r:f.r, d:f.d}
            }

            if (f.x > W){
                flasks[i] = {x:f.x-W, y:f.y, r:f.r, d:f.d}
            }

            if (f.x < 0){
                flasks[i] = {x:f.x+W, y:f.y, r:f.r, d:f.d}
            }	
    
        }
    }
    setInterval(drawFlakes, 15)
}