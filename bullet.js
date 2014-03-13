Bullet = function(x, y){
	this.x = x;
	this.y = y;
	this.color = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff']; //pick cool bullet color
	this.speed = 0.1; // no idea what's appropriate here
	this.direction = 0;
	this.size = 3;
}

Bullet.prototype.move = function() {
	this.x += this.speed * Math.cos(this.direction);
	this.y += this.speed * Math.sin(this.direction);
}