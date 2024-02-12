<h1 align="center"> API 💻 </h1>

<p align="center"> <a href="https://prozeducacao.com.br/unidade/unidade-curitiba/" target="_blank">PROZ</a> </p>

<p align="center">
<a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp|&nbsp;&nbsp;&nbsp;
<a href="#tecnologia">Resolução</a>&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;
<a href="#autor"></a></p>

# Sobre

Você está desenvolvendo um site de e-commerce e precisa exibir uma lista de produtos ao seu usuário. Para isso, você precisa fazer uma requisição do tipo GET a uma API solicitando a lista de produtos pela seguinte URL: https://lojafalsaapi.com/produtos.

Pensando em como aprimorar a experiência do seu usuário, você confere a documentação da API e encontra o seguinte trecho:

Para ordenar os produtos, basta incluir a chave 'ordenar' com o valor 'asc' de ascendente, ou 'dec' de decrescente na query string da sua requisição. É também possível limitar o número de resultados exibidos usando a chave 'limite' com um número representando a quantidade de produtos a ser exibidos como valor.

Escreva a rota da requisição necessária para solicitar a lista de produtos em ordem alfabética inversa (do Z ao A). Como desafio extra, defina também um máximo de 20 produtos a serem exibidos.

<br>

# Resolução

Para solicitar a lista de produtos em ordem alfabética inversa (do Z ao A) e limitar o número máximo de produtos exibidos para 20, você pode usar a seguinte rota de requisição:

GET https://lojafalsaapi.com/produtos?ordenar=dec&limite=20
Nesta rota:

A chave ordenar tem o valor dec, indicando que os produtos devem ser ordenados de forma decrescente (do Z ao A).
A chave limite tem o valor 20, limitando a quantidade de produtos exibidos para 20.
