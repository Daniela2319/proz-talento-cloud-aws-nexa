//----------------Gerador de Cadastro--------------//
//1- Captura de elementos
const nome = document.getElementById("nome");
const valor = document.getElementById("valor");
const descricao = document.getElementById("descricao");
const enviar = document.getElementById("enviar");
const feedback = document.getElementById("feedback");

// 2- funções
function gerarCadastro(evento) {
  evento.preventDefault();

  const jsonBody = JSON.stringify({
    nome: nome.value,
    valor: valor.value,
    descricao: descricao.value,
  });

  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonBody,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data && data.json) {
        feedback.textContent = "Cadastro realizado com sucesso!";
        nome.value = "";
        valor.value = "";
        descricao.value = "";
      } else {
        feedback.textContent = "Erro ao cadastrar o produto. Tente novamente.";
      }
    })
    .catch(function (error) {
      console.error("Erro:", error);
      feedback.textContent =
        "Erro ao conectar ao servidor. Tente novamente mais tarde.";
    });
}
// 3. Eventos
enviar.addEventListener("click", (evento) => gerarCadastro(evento));
