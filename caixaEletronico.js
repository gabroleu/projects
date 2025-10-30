// Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use switch para processar a escolha.

let opcao = 1;

switch (opcao) {
    case 1:
        console.log("Sacar: Informe o valor que deseja retirar.");
        break;

    case 2:
        console.log("Depositar: Insira o valor a ser depositado.")
        break;

    case 3:
        console.log("saldo: Seu saldo atual é de R$12.000,00.");
        break;

    default:
        console.log("Opção inválida! Escolha 1, 2 ou 3.");
}