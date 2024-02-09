document.getElementById("searchBtn").addEventListener("click", function () {
  const searchTerm = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();

  if (searchTerm === "") {
    alert("Por favor, digite um nome de produto para pesquisar.");
    return;
  }

  fetch("src/produtos.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Falha ao carregar o arquivo JSON");
      }
      return response.json();
    })
    .then((data) => {
      const jsonDataContainer = document.getElementById("jsonDataContainer");
      const filteredProducts = data.filter((product) =>
        product.nome.toLowerCase().includes(searchTerm)
      );

      if (filteredProducts.length === 0) {
        jsonDataContainer.textContent = "Nenhum produto encontrado.";
      } else {
        jsonDataContainer.textContent = JSON.stringify(
          filteredProducts,
          null,
          2
        );
      }
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
});
