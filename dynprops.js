let generator = new Proxy ({}, {
	get(receiver, name){
		return (content)=> `<${name}>${content}</${name}>`;
	}
})

console.log(generator.section("\n"+
	generator.h1("Teste")+"\n"+
	generator.h2("Teste")+"\n"+
	generator.p("Teste")+"\n"
))
