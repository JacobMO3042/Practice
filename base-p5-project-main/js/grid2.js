let textures = [];
let colours;
let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3 ];
let currentHeight = random(sizes);
let currentWidth = random(sizes);
function preload(){
    let TextureNum = 5;
    for(let i = 1; i <= TextureNum;i++){
        // let texture = loadImage("Images/Canvas0" + i + ".png"); //concatenation
        let t = loadImage(`Images/Canvas0${i}.png`); // backticks are 'template literals' and dollar sign curly brace is known as string interpolation
        textures.push(t); //adds textures to texture array
    }
}
//piet mondrian
function setup() {
    colours = [color('#303881'),color('#d4391d'), color('#e9c009'), color('#f1edec')];
    createCanvas(800, 800);
    // background(255);
    const CELL_SIZE = 80;
    let x = 0;
    let y = 0;
    noStroke();
    while(y < height){
        while(x < width){
            tint(random(colours))
            let t = random(textures);
            image(t, x + random(-2,2), y + random(-2,2), CELL_SIZE, CELL_SIZE)
            x+=CELL_SIZE;
        }
        y+=CELL_SIZE;
        x=0;
    }

}
