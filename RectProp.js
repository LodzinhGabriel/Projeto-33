class RectProp{
    constructor(x, y, width, height, properties) {
        // definindo tamanho, posição inicial e propriedades
        var options = properties;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        // adicionando ele ao jogo
        World.add(world, this.body);
    }
    display(){
        //instancia o ângulo
        var angle = this.body.angle;
        // processo de renderização do retângulo
        push();
        rectMode(CENTER);
        //desenhando o retângulo na tela
        translate(this.body.position.x, this.body.position.y);
        // rotação
        angleMode(RADIANS);
        rotate(angle);

        rect(0, 0, this.width, this.height);
        
        pop();
    }
}