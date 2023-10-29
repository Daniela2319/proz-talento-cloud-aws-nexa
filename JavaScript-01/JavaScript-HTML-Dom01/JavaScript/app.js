/*Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index'
 insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML
  com o arquivo de extensão JavaScript.

Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html,
 adicione um título simples ao site com o id 'titulo', e um elemento que represente um
  produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode 
  incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar 
  o método simples e o método complexo, ensinados neste tópico. */

// Método simples: criando elementos e atribuindo conteúdo diretamente

//criando um elemento para o titulo
const titulo = document.createElement("h1");

//manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Produtos em Destaque";

//capturando o 'elemento pai' dos elementos 'titulo' e 'produto'
const body = document.querySelector("body");

//adicionando o elemento 'titulo' no Dom
body.appendChild(titulo);

//criado uma div
const elementoProduto = document.createElement("div");
elementoProduto.innerHTML = `
<h2>Pão de forma</h2>
<p>Farinha trigo, açucar, gordura e fermento.</p>
<p>Preço R$ 10,00</p>
<img src="/img/um-pedaco-de-pao-com-a-palavra-pao-nele.jpg" alt="Pão de forma" width="100px">
`;

console.log(elementoProduto);

//adicionando o elemento 'produto' no Dom
produto.appendChild(elementoProduto);
