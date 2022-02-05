class BallProp{
    constructor(x, y, radius, properties) {
        // definindo tamanho, posição inicial e propriedades
        var options = properties;
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
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

        ellipse(0, 0, this.radius * PI / 1.6, this.radius * PI / 1.6);
        
        pop();
    }
}