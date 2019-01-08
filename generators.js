function* fibonacci(n) {
	let i = 1;
	let li =1;
	while(i<n){
		i = i+li;
		yield li;
		[li,i]=[i,li];
	}
}

for(let x of fibonacci(100)){
	console.log(x);
}
