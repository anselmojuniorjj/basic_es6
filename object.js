
let x=1;
let y=2;

function val(){
	return x+y;
}

let obj={
	x,
	y,
	soma(){
		return this.x + this.y;
	},
	['z' + val()]: 44
}

console.log(obj.soma());
console.log(obj.z3);
