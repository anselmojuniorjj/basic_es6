
pessoas=[
	{nome:'Joao', email:'joao@gmail.com'},
	{nome:'Mario', email:'mario@gmail.com'},
	{nome:'Melissa', email:'melissa@gmail.com'},
	{nome:'Leticia', email:'leticia@gmail.com'}
];

console.log(`As pessoas sao: ${pessoas.map(pessoa=>`
	${pessoa.nome} - ${pessoa.email}`).join(', ')}`)
