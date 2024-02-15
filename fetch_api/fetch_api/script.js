// -------- Gerador de usuarios -------- //
// 1. Captura de elementos
const btnUsuario = document.getElementById("btn-usuario");
const usuariosContainer = document.getElementById("usuarios-container");
const helperTextUsuario = document.getElementById("helper-text-usuario");

// 2. Funções
function gerarUsuario() {
  helperTextUsuario.innerText = "Carregando...";
  //maneira simplificada para chama o usuário da api
  fetch("https://random-data-api.com/api/v2/users")
    .then((res) => res.json()) // convertido para javascript essa resposta
    .then((data) => {
      const usuario = document.createElement("div");
      usuario.innerHTML = `
      <img src="${data.avatar}"/> 
      <span><strong>Nome:</strong> ${data.username}</span>
      <span><strong>Celular:</strong>${data.phone_number}</span>`;

      usuario.classList.add("usuario");
      usuariosContainer.appendChild(usuario); //anexado dados
      helperTextUsuario.innerText = "";
      console.log(data);
    })
    .catch((error) => {
      helperTextUsuario.innerText = "";
      alert("Não possivel gerar um usuário");
      console.log(error);
    });
}

// 3. Eventos
btnUsuario.addEventListener("click", gerarUsuario);

//maneira complicada para entende com chama uma api.
// const resposta = fetch("https://random-data-api.com/api/v2/users");
// console.log(resposta);

// const tratamentoResposta = resposta.then((res) => {
//   console.log(res);
//   return res.json();
// });
// tratamentoResposta.then((data) => {
//   console.log(data);
// });
