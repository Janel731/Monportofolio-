
const canvas=document.getElementById('canvas');
const ctx= canvas.getContext('2d');
const center={x:125, y:125};
const radius= 100;
const points=[];
const numPoints=18;

// couleur de la bulle
const bubbleColor='rgb(0, 191, 255)';

// creer les point de la bulle
for(let i = 0; i<numPoints; i++){
    const angle =(Math.PI*2/numPoints)*i;
    points.push({angle:angle,
         baseRadius:radius,
        offset:Math.random()*10,
    speed:0.02+ Math.random()* 0.02});
}

// tracer une forme arrondi
function drawRoundedBlobPath(){
    const coords = [];
    for(let i =0; i<points.length; i++){
        const p= points[i];
        p.offset+=p.speed;
        const r =p.baseRadius+ Math.sin(p.offset)*8;
        const x=center.x + Math.cos(p.angle)*r;
        const y=center.y + Math.sin(p.angle)*r;
        coords.push({x, y});
    }

    ctx.beginPath();
    for(let i=0; i<coords.length; i++){
        const curr = coords[i];
        const next= coords[(i+1)% coords.length];
        const xc= (curr.x + next.x)/2;
        const yc =(curr.y + next.y)/2;
        if(i===0)ctx.moveTo(xc, yc);
        else ctx.quadraticCurveTo(curr.x, curr.y, xc, yc);

    }
    ctx.closePath();
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // dessin avec clip de la bulle
    drawRoundedBlobPath();
    ctx.save;
    ctx.clip;

    // re-dessin de la bulle avec couleur et contour lisse
    drawRoundedBlobPath();
    ctx.shadowColor = 'rgba(25, 185, 238, 0.7)';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.fillStyle=bubbleColor;
    ctx.fill();

    requestAnimationFrame(animate);
}



animate();

