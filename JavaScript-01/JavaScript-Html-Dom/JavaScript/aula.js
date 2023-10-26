/*Acesse o site OneCompiler (link em anexo) e crie uma função que recebe dois números
 como parâmetros e imprime quatro frases no terminal (a partir de template strings) demonstrando
  as quatro operações básicas aplicadas a ambos números. Exemplo:

4 + 5 = 9
4 - 5 = -1
4 x 5 = 20
4 / 5 = 0.8  */

function operacoes(a, b) {
  const soma = `${a} + ${b} = ${a + b}`;
  const subtracao = `${a} - ${b} = ${a - b}`;
  const multiplicacao = `${a} x ${b} = ${a * b}`;
  const divisao = `${a} / ${b} = ${a / b}`;

  console.log(soma);
  console.log(subtracao);
  console.log(multiplicacao);
  console.log(divisao);
}

operacoes(4, 5);
