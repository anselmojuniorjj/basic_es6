let target = {
	dia: 'bom dia',
	tarde: 'boa tarde',
	noite: 'boa noite'
}

let p = new Proxy(target, {
	get(receiver, name) {
		if(name in receiver){
			return receiver[name];
		}
		return 'Não sei o que dizer quando é ' +name;
	}
})

console.log(p.tarde)
console.log(p.madrugada)
