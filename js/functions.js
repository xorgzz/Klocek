function randVelo() {
	let num = Math.floor(Math.random() * 4)
	if (num === 0) {
		samolot.velocity.x = moveSpeed;
		samolot.velocity.y = 0;

	}
	else if (num === 1) {
		samolot.velocity.x = moveSpeed * -1;
		samolot.velocity.y = 0;

	}
	else if (num === 2) {
		samolot.velocity.y = moveSpeed;
		samolot.velocity.x = 0;

	}
	else if (num === 3) {
		samolot.velocity.y = moveSpeed * -1;
		samolot.velocity.x = 0;

	}
	setTimeout(randVelo, 100);
}

function colisionDetection(p1, p2) {
	var p1Left = p1.position.x;
	var p1Right = p1.position.x + p1.width-8;
	var p1Top = p1.position.y;
	var p1Bottom = p1.position.y + p1.height-8;

	var p2Left = p2.position.x;
	var p2Right = p2.position.x + p2.width-8;
	var p2Top = p2.position.y;
	var p2Bottom = p2.position.y + p2.height-8;

	if (p1Right > p2Left && p1Left < p2Right && p1Bottom > p2Top && p1Top < p2Bottom) {
		return true;
	} else {
		return false;
	}
}