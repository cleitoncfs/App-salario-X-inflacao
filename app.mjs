import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let salarioMinimo = [
    { ano: 2010, salario: 510.0 },
    { ano: 2011, salario: 545.0 },
    { ano: 2012, salario: 622.0 },
    { ano: 2013, salario: 678.0 },
    { ano: 2014, salario: 724.0 },
    { ano: 2015, salario: 788.0 },
    { ano: 2016, salario: 880.0 },
    { ano: 2017, salario: 937.0 },
    { ano: 2018, salario: 954.0 },
    { ano: 2019, salario: 998.0 },
    { ano: 2020, salario: 1045.0 },
];

let inflacao = [
    { ano: 2010, ipca: 5.91 },
    { ano: 2011, ipca: 6.5 },
    { ano: 2012, ipca: 5.84 },
    { ano: 2013, ipca: 5.91 },
    { ano: 2014, ipca: 6.41 },
    { ano: 2015, ipca: 10.67 },
    { ano: 2016, ipca: 6.29 },
    { ano: 2017, ipca: 2.95 },
    { ano: 2018, ipca: 3.75 },
    { ano: 2019, ipca: 4.31 },
    { ano: 2020, ipca: 4.52 },
];

console.log("Escolha uma das alternativas:\n");
console.log("1 - Listar os salários minímos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

rl.question("Digite o numero da sua escolha: ", (escolha) => {
    escolha = Number(escolha);

    switch (escolha) {
        case 1:
            salarioMinimo.forEach(({ ano, salario }) => {
                console.log(
                    `Ano: ${ano}, Salário mínimo: R$ ${salario
                        .toFixed(2)
                        .replace(".", ",")}`
                );
            });
            break;
        case 2:
            inflacao.forEach(({ ano, ipca }) => {
                console.log(
                    `Ano: ${ano}, Inflação IPCA: ${ipca
                        .toFixed(2)
                        .replace(".", ",")}%`
                );
            });
            break;
        case 3:
            salarioMinimo.forEach(({ ano, salario }, i) => {
                const crescimento =
                    i > 0
                        ? ((salario - salarioMinimo[i - 1].salario) /
                              salarioMinimo[i - 1].salario) *
                          100
                        : 0;
                const ipca = inflacao[i]?.ipca || 0;
                console.log(
                    `Ano: ${ano}, Crescimento: ${crescimento
                        .toFixed(2)
                        .replace(".", ",")}% , IPCA: ${ipca
                        .toFixed(2)
                        .replace(".", ",")}%`
                );
            });
            break;
        default:
            console.log("Opção Inválida!");
    }

    rl.close();
});
