//semelhante ao while, mas garante que o código seja executado pelo menos uma vez antes de verificar a condição.

let numero = 5;
do {
    console.log(`Executando...`);
    numero--;
} while (numero > 5);



//Controlando o Loop com break:

for (let i = 0; i < 10; i++) {
    if (i === 6) break;
    console.log(i);
}

//Controlando o Loop com continue:

for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}


//iterando com array:



let frutas = ["Maçã", "Banana", "Laranja"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}