function setup() {
    const CELL_SIZE = 80;
    createCanvas(800, 800);
    let x = 0;
    let y = 0;
    let xVariation = 0;
    let yVariation = 0;
    let widthVariation = 0;
    let heightVariation = 0;
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
    let currentWidth = random(sizes);
    let currentHeight = random(sizes);
    let colours = [color('#303881'),color('#d4391d'), color('#e9c009'), color('#f1edec')];
    strokeWeight(5);
    while (y < height) {

        while (x < width) {
            fill(random(colours))
            // rect(x + random(-xVariation, xVariation), y + random(-yVariation, yVariation), CELL_SIZE + random(-widthVariation, widthVariation), CELL_SIZE + random(-heightVariation, heightVariation));
            rect(x,y, currentWidth, currentHeight);
            x += currentWidth;
            let availableWidth = width - x;
            currentWidth = random(sizes);
            while(currentWidth > availableWidth){
                currentWidth -= CELL_SIZE;
            }
        }
        y += currentHeight;
        let availableHeight = height - y;
        currentHeight = random(sizes);
        while(currentHeight > availableHeight){
            currentHeight-= CELL_SIZE;
    }
        x = 0;
    }
}
