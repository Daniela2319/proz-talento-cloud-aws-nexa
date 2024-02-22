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

// -------- Gerador de postagens -------- //
// 1. Captura de elementos
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
const btnPost = document.getElementById("btn-post");
const postsContainer = document.getElementById("posts-container");
const helperTextPost = document.getElementById("helper-text-post");
// 2. Funções
function gerarPost(evento) {
  helperTextPost.innerText = "";
  evento.preventDefault();

  const jsonBody = JSON.stringify({
    titulo: postTitle.value,
    mensagem: postBody.value,
  });

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonBody,
  })
    .then((res) => res.json()) //retorna a resposta do servidor
    .then((data) => {
      console.log(data);
      //criando
      const post = document.createElement("div");
      //adiciona classe para estilizar
      post.classList.add("postagem");
      //manipulando
      post.innerHTML = `
      <h3>${data.id} - ${data.titulo}</h3> 
      <p>${data.mensagem}</p>
    `;
      //adicionando no dom
      postsContainer.prepend(post);

      //Limpar o formulário
      postTitle.value = "";
      postBody.value = "";
      alert("Mensagem enviada com sucesso!");
    })
    .catch((error) => {
      console.log(error);
      helperTextPost.innerText = "Não foi possivel gerar a postagem :(";
    });
}

// 3. Eventos
btnPost.addEventListener("click", (evento) => gerarPost(evento));
