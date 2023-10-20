/*Acesse o site OneCompiler (Link em anexo), copie e cole o array 'numerosDaSorte', e logo em seguida escreva o código necessário para avaliar cada elemento do array e imprimir uma frase seguindo algum dos seguintes três modelos:

- X é par e menor que 50
- X é menor que 50
- X é maior que 50
 */

const numerosDaSorte = [37, 14, 26, 5, 94, 87];

for (let i = 0; i < numerosDaSorte.length; i++) {
  if (numerosDaSorte[i] % 2 === 0 && numerosDaSorte[i] < 50) {
    console.log("Numero da sorte é par e menor que 50: ", numerosDaSorte[i]);
  }
}

for (let i = 0; i < numerosDaSorte.length; i++) {
  if (numerosDaSorte[i] < 50) {
    console.log("Numero da sorte é menor que 50: ", numerosDaSorte[i]);
  }
}

for (let i = 0; i < numerosDaSorte.length; i++) {
  if (numerosDaSorte[i] > 50) {
    console.log("Numero da sorte é maior que 50: ", numerosDaSorte[i]);
  }
}
