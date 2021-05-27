let dados = {
    nome: "Leandro",
    idade: 30,
    olhos: "castanhos"
}

dados.nacionalidade = "brasileiro"
delete dados.olhos

console.log(dados)

//segunda parte

let cadastro =[{
    nome:"Jorge",
    idade:"22",
    telefone:"219698123",
    amigos:["Zé","João","Junior","Maria"]
},
{
    nome:"Paula",
    idade:"28",
    telefone:"2299893582",
    amigos:["Camila","Gil","Fiuk","Marcela"]
},
{
    nome:"Cezar",
    idade:"18",
    telefone:"3499561234",
    amigos:["Jota","Marcelo","Leo","Margarida"]
},
{
    nome:"Esmeralda",
    idade:"17",
    telefone:"2299355512",
    amigos:["Luiza","Cornelia","Rhayssa", "Renan"]
},
{
    nome:"Dominique",
    idade:"50",
    telefone:"2198329124",
    amigos:["Amanda","Cristiane","Pamela", "Michel"]
}
]

console.log(cadastro[0].amigos[1])
console.log(cadastro[1].amigos[2])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[3])