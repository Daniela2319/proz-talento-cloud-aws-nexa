/*Acesse o site OneCompiler (Link em anexo), copie e cole o array 'numerosDaSorte', e logo em seguida escreva o código 
necessário para avaliar cada elemento do array e imprimir uma frase seguindo algum dos seguintes três modelos:

- X é par e menor que 50
- X é menor que 50
- X é maior que 50
 */

const numerosDaSorte = [37, 14, 26, 5, 94, 87];

for (let i = 0; i < numerosDaSorte.length; i++) {
  const numero = numerosDaSorte[i];

  if (numero % 2 === 0 && numero < 50) {
    console.log("Numero da sorte é par e menor que 50: ", numerosDaSorte[i]);
  } else if (numero < 50) {
    console.log("Numero da sorte é menor que 50: ", numerosDaSorte[i]);
  } else {
    console.log("Numero da sorte é maior que 50: ", numerosDaSorte[i]);
  }
}
