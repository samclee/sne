class Ln {
	constructor(lines,nexts,who) {
		this.lines = lines
		this.nexts = nexts
		this.who = who
	}

	draw(choice) {
		fill(255)
		let by = 340
		let m = 20
		text(this.lines[0], m, by+m, 640-2*m, 480-m*2)
	}
}

class Ch extends Ln {
	constructor(lines, nexts, who) {
		super(lines, nexts, who)
	}

	draw(choice) {
		for (let i = 0; i < this.lines.length; i++) {
			let ln = this.lines[i];
			if (i == choice) {
				ln = '>' + ln
			}
			let by = 340
			let m = 20
			text(ln, m, by+m + i*40, 640-2*m, 480)
		}
	}
}