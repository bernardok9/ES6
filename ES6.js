
//Aluno: Bernardo Kopp
//const iniciaCaractere = entrada => faker.filter(value => (value.charAt(0) == entrada))
const faker = require('faker');

faker.locale = 'pt_BR';
const clientes = [];

for (let index = 0; index < 1000; index++) {
    const name = faker.name.findName();
    const yearBirth = faker.date.past(109, 2019);
    const prefix = faker.name.prefix();
    const genre = (prefix == 'Sr.' || prefix == 'Dr.' ? 'M' : 'F');
    const lastPurchase = faker.date.between(1910 - 01 - 01, 2019 - 01 - 01);
    const countPurchase = faker.random.number(300);

    client = {
        name, yearBirth, genre, lastPurchase, countPurchase,
    }

    clientes.push(client)
}

//1.Desenvolva, utilizando filter , uma função que, dado um caractere de entrada, retorne todos os registros de clientes cujo o nome inicia com o caractere.
/*const inicialNome = letra => clientes.filter(value => value.name.charAt(0) == letra.toUpperCase());
console.log(inicialNome('x'));*/

//2.Retorne o array de clientes
/*console.log(clientes);*/

//3.Desenvolva uma função que, dado o caractere de entrada, retorna apenas um número com o total de registros encontrados.
/*const numTotalChar = entrada => clientes.filter(value => value.name.includes(entrada)).length;
console.log(numTotalChar('s'));*/

//4.Desenvolva uma função que retorne apenas os nomes dos clientes.
/*const nomeClientes = clientes.map(value=>value.name);
console.log(nomeClientes);*/

//5.Desenvolva uma função que retorne apenas o primeiro nome dos clientes.
/*const primeiroNome = clientes.map(value=>value.name.split(" ")[0]);
console.log(primeiroNome);*/

//6.Desenvolva uma função que retorne apenas o primeiro nome dos clientes cujo os nomes começam com o caractere de entrada da função.
/*const caracPrimNome = letra => clientes.filter(value => value.name.charAt(0) == letra.toUpperCase()).map(value => value.name.split(" ")[0]);
console.log(caracPrimNome("w"));*/

//7.Desenvolva uma função que retorne todos os usuários que são maiores de idade.
/*const maiorIdade = clientes.filter(value => value.yearBirth < 2001);
console.log(maiorIdade);*/

//8.Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista
/*const confirmar = nomeLista => clientes.filter(value => value.name.includes(nomeLista)).length > 0 ? "Contém" : "Não contém";
console.log(confirmar("Warley"));*/

//9.Implemente uma função que retorna o total de vendas realizadas somando as compras de todos os clientes.
/*const totalVendas = clientes.map(value => value.countPurchase).reduce((base, prox) => (base += prox));
console.log(totalVendas);*/

//10.Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.
/*const naoCompra = clientes.filter(value => value.lastPurchase < 2019);
console.log(naoCompra);
*/
//11.Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.
/*
const maisQuinze = clientes.filter(value=>value.countPurchase >= 15);
console.log(maisQuinze);
*/
