joaquim={
	nome: 'joaquim',
	idade: 33,
	numeros:[2,7,9,12,34,56,78,99],
	resultado:[],
	aniversario:function(){
		this.idade +=1;
	},
	calculo:function(){
		this.numeros.forEach(n=>{
			this.resultado.push(n+1);
		});
	},	

}

x=[1,2,3,4,5,6,7,8,9];
console.log(x.map(n=>n));
console.log(x.map(n=>n*n));
console.log('-----------------------------------------------');
console.log(joaquim.idade);
joaquim.aniversario();
joaquim.calculo();
console.log(joaquim.idade);
console.log(joaquim);
