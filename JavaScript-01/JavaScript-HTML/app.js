function conexao(num1, num2) {
  if (num1 > num2) {
    for (let i = 0; i < 3; i++) {
      console.log("Conexão com um arquivo JavaSript!");
    }
  } else {
    console.log("A conexão não está Ok!");
  }
}

conexao(5, 2);

const multiplicar = (num1, num2) => num1 * num2;

const numero = multiplicar(2, 10);
console.log(numero);
