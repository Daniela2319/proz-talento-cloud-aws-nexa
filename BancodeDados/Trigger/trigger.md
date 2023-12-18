-- Criação do banco de dados
CREATE DATABASE  PadariaDB;
USE PadariaDB;

-- Tabela de Produtos
CREATE TABLE  Produtos (
    IDProduto INT  PRIMARY KEY,
    Nome VARCHAR(50),
    Tipo VARCHAR(30),
    Preco DECIMAL(10, 2)
);

-- Tabela de Clientes
CREATE TABLE  Clientes (
    IDCliente INT  PRIMARY KEY,
    Nome VARCHAR(50),
    Email VARCHAR(50)
);

-- Tabela de Pedidos
CREATE TABLE  Pedidos (
    IDPedido INT  PRIMARY KEY,
    IDCliente INT,
    DataPedido DATE,
    ValorTotal DECIMAL(10, 2),
    FOREIGN KEY (IDCliente) REFERENCES Clientes(IDCliente)
);

-- Tabela de Detalhes do Pedido
CREATE TABLE DetalhesPedido (
    IDDetalhe INT  PRIMARY KEY,
    IDPedido INT,
    IDProduto INT,
    Quantidade INT,
    PrecoUnitario DECIMAL(10, 2),
    ValorTotalItem DECIMAL(10, 2),
    FOREIGN KEY (IDPedido) REFERENCES Pedidos(IDPedido),
    FOREIGN KEY (IDProduto) REFERENCES Produtos(IDProduto)
);

-- Trigger para calcular automaticamente o ValorTotal em Pedidos

CREATE TRIGGER Trigger_CalcularValorTotalPedido
After INSERT ON DetalhesPedido
FOR EACH ROW
BEGIN
    UPDATE Pedidos
    SET ValorTotal = (SELECT SUM(ValorTotalItem) FROM DetalhesPedido WHERE IDPedido = NEW.IDPedido)
    WHERE IDPedido = NEW.IDPedido;
END;


-- Exemplo de inserção de dados
INSERT INTO Produtos (Nome, Tipo, Preco) VALUES ('Pão Francês', 'Pão', 2.50);
INSERT INTO Clientes (Nome, Email) VALUES ('Cliente 1', 'cliente1@email.com');
INSERT INTO Pedidos (IDCliente, DataPedido) VALUES (1, CURRENT_DATE);
INSERT INTO DetalhesPedido (IDPedido, IDProduto, Quantidade, PrecoUnitario, ValorTotalItem) VALUES (1, 1, 5, 2.50, 12.50);

-- Exemplo de seleção de dados
SELECT * FROM Produtos;
SELECT * FROM Clientes;
SELECT * FROM Pedidos;
SELECT * FROM DetalhesPedido;
