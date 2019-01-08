
function calc(a, b=6, c=12){
	return a+b+c; 
}

function calc2(a, ...n){
	n.forEach(i=> {a*=i});
	return a;
}

x=[2,4];
y=[30,...x];

console.log(calc(1,...x));
console.log(calc(...y));

console.log('-------------------------------------');

console.log(calc2(1,3,5,7));
console.log(calc2(1));
console.log('--------------------------------------');

console.log(calc(3));
console.log(calc(3, 2));
console.log(calc(3, 2, 1));
