
class Pessoa {
	constructor(nome, email){
		this.nome = nome;
		this._email = email;
	}

	get email(){return this._email};

	set email(v){
		console.log(`Mudando o email ${this._email} para ${v}.`);
		this._email = v;
	}

	digaOi(){
		console.log(`Oi eu sou o ${this.nome}.`)
	}
}

class Dev extends Pessoa {
	digaOi(){
		console.log('Oi Dev');
		super.digaOi();
	}
}

let p = new Pessoa('Mario', 'mariosilva@gmail.com');

p.email='marioandreti@gmail.com';
p.digaOi();
console.log(p.email);
console.log('----------------------------------------------');

let d = new Dev('Developer', 'dev@gmail.com');
d.email='developer@gmail.com';
d.digaOi();
console.log(d.email);
