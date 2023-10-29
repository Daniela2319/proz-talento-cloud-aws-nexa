/*Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index'
 insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML
  com o arquivo de extensão JavaScript.

Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html,
 adicione um título simples ao site com o id 'titulo', e um elemento que represente um
  produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode 
  incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar 
  o método simples e o método complexo, ensinados neste tópico. */

// Método simples: criando elementos e atribuindo conteúdo diretamente

const linhaPaes = [
  {
    titulo: "Pão Integral",
    descricao: "Farinha integral, açucar mascado, gordura, sal e fermento",
    preco: "Preço: R$ 12,00",
  },
  {
    titulo: "Pão Françês",
    descricao: "Farinha trigo, açucar, gordura, sal e fermento",
    preco: "Preço: R$ 9,90",
  },
];

for (let i = 0; i < linhaPaes.length; i++) {
  // console.log(linhaPaes[i]);

  //criado um elemento div
  const elementoProduto = document.createElement("div");

  //manipulando o elemento
  elementoProduto.innerHTML = `
<h2>${linhaPaes[i].titulo}</h2>
<p>${linhaPaes[i].descricao}</p>
<p>${linhaPaes[i].preco}</p>
<img src="/img/um-pedaco-de-pao-com-a-palavra-pao-nele.jpg" alt="Pão de forma" width="100px">
`;

  elementoProduto.id = `produto${i + 1}`;

  //adicionando o elemento na pagina.
  let body = document.querySelector("body");
  produto.appendChild(elementoProduto);
}
