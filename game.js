let bg

// characters
let files = ['person', 'other'] // HACK THIS LINE
let chars = {}
let cur_char = 'person'

// text
let cur_line = script['start']
let cur_choice = 0

function advance() {
	let next = cur_line.nexts[cur_choice]
	
	cur_line = script[next]
	cur_choice = 0
	
	cur_char = cur_line.who
}

function preload() {

	bg = loadImage('assets/bg.png')
	for (let fn of files) {
		chars[fn] = loadImage('assets/' + fn + '.png')
	}
	
}

function setup() {
	createCanvas(640, 480)
	textSize(32)
}

function draw() {
	// bg
	image(bg,0,0)
	
	// char
	let cur_img = chars[cur_char]
	image(cur_img,320 - cur_img.width / 2,480 - cur_img.height)
	
	// box
	fill(0)
	let blk_hgt = 140
	rect(0,480-blk_hgt,640,blk_hgt)

	//text
	fill(255)
	cur_line.draw(cur_choice)
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		cur_choice = mod((cur_choice - 1), cur_line.nexts.length)
	}
	else if (keyCode == DOWN_ARROW) {
		cur_choice = mod((cur_choice + 1), cur_line.nexts.length)
	}
	else if (keyCode == 32) {
		advance()
		//console.log('hi')
	}
	console.log(cur_choice)
}

function mod(x, n) { return ((x % n) + n) % n ; }