// escolhendo uma ação com Switch

let opcao = "pagar";

    switch (opcao) {
        case "pagar":
            console.log("Processando pagamento...");
            break;
    
        case "cancelar":
            console.log("Cancelando Pagamento...");
            break;

        default:
            console.log("Opção Inválida!");

    }