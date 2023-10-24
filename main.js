const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const moveSpeed = 2.4;

canvas.width = 1024;
canvas.height = 576;

context.fillRect(0, 0, canvas.width, canvas.height);

const ufo = new Sprite({
	position: {x:160, y:240},
	width: 40,
	height: 40
});

const samolot = new Sprite({
	position: { x: 514, y: 240 },
	width: 40,
	height: 40,
	color: 'limegreen'
});

const keys = {
	a: {
		pressed: false
	},
	d: {
		pressed: false
	},
	w: {
		pressed: false
	},
	s: {
		pressed: false
	}
};

function main() {
	context.fillStyle = 'darkgrey';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	window.requestAnimationFrame(main);
	ufo.draw();
	samolot.draw();

	ufo.velocity.x = 0;
	ufo.velocity.y = 0;

	if (keys.a.pressed && ufo.lastKey === 'a') {
		ufo.velocity.x = moveSpeed * -1;
	}
	else if (keys.d.pressed && ufo.lastKey === 'd') {
		ufo.velocity.x = moveSpeed;
	}
	else if (keys.s.pressed && ufo.lastKey === 's') {
		ufo.velocity.y = moveSpeed;
	}
	else if (keys.w.pressed && ufo.lastKey === 'w') {
		ufo.velocity.y = moveSpeed*-1;
	}

	if (colisionDetection(ufo, samolot)) {
		ufo.velocity = {x:0,y:0};
		samolot.velocity = {x:0,y:0};
		document.querySelector('#out').innerHTML = "Kolizja";
		setTimeout(() => {
			location.reload();
		}, 400);
	}
}
main();
randVelo(samolot);


window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'd':
			keys.d.pressed = true;
			ufo.lastKey = 'd';
			break;

		case 'a':
			keys.a.pressed = true;
			ufo.lastKey = 'a';
			break;

		case 'w':
			keys.w.pressed = true;
			ufo.lastKey = 'w';
			break;
			
		case 's':
			keys.s.pressed = true;
			ufo.lastKey = 's';
			break;

		default:
			break;
	}
});


window.addEventListener('keyup', (event) => {
	switch (event.key) {
		case 'd':
			keys.d.pressed = false;
			break;

		case 'a':
			keys.a.pressed = false;
			break;

		case 'w':
			keys.w.pressed = false;
			break;

		case 's':
			keys.s.pressed = false;
			break;

		default:
			break;
	}

});