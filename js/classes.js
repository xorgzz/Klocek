class Sprite {
	constructor({ position, width, height, velocity={x:0,y:0}, color='red'}) {
		this.position = position;
		this.width = width;
		this.height = height;
		this.velocity = velocity;
		this.lastKey;
		this.color = color;
	}

	draw() {
		context.fillStyle = this.color;
		context.fillRect(this.position.x, this.position.y, this.width, this.height);
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}
}