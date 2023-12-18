-- Criar uma base de dados
CREATE DATABASE Loja;

-- Usar a base de dados criada
USE Loja;

-- Criar uma tabela "Clientes"
CREATE TABLE Clientes (
id_cliente INT PRIMARY KEY,
Nome VARCHAR(50),
Email VARCHAR(50)
);

-- Inserir dados na tabela "Clientes"
INSERT INTO Clientes (id_cliente, Nome, Email) VALUES
(1, 'João Silva', 'joao@email.com'),
(2, 'Maria Oliveira', 'maria@email.com'),
(3, 'Carlos Santos', 'carlos@email.com');

-- Criar uma tabela "Pedidos"
CREATE TABLE Pedidos (
PedidoID INT PRIMARY KEY,
ClienteID INT,
Produto VARCHAR(50),
Quantidade INT,
FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);

-- Inserir dados na tabela "Pedidos"
INSERT INTO Pedidos (PedidoID, ClienteID, Produto, Quantidade) VALUES
(101, 1, 'Produto A', 3),
(102, 2, 'Produto B', 5),
(103, 3, 'Produto C', 2);

-- Realizar uma consulta usando INNER JOIN para obter informações do cliente e pedido
SELECT Clientes.Nome, Pedidos.Produto, Pedidos.Quantidade
FROM Clientes
INNER JOIN Pedidos ON Clientes.ClienteID = Pedidos.ClienteID;
