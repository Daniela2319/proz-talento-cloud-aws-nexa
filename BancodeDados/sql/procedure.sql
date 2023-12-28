-- Criação da Stored Procedure
CREATE PROCEDURE LevantamentoDiario
AS
BEGIN
    -- Seleciona dados
    SELECT 
        CONVERT(date, data_venda) AS DataCompra,
        COUNT(id_venda) AS QuantidadeVendas,
        SUM(quantidade) AS QuantidadeProdutos
    FROM
        vendas
    WHERE
        CONVERT(date, data_venda) = CONVERT(date, GETDATE())
    GROUP BY
        CONVERT(date, data_venda);
END;


EXEC LevantamentoDiario;

