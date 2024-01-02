CREATE OR REPLACE FUNCTION contar_clientes_cadastrados(data_cadastro date)
RETURNS INTEGER AS $$
DECLARE
    total_clientes INTEGER;
BEGIN
    SELECT COUNT(*) INTO total_clientes
    FROM clientes
    WHERE data_cadastro = data_cadastro;

    RETURN total_clientes;
END;
$$ LANGUAGE plpgsql;

SELECT contar_clientes_cadastrados('2024-01-02') AS total_clientes_dia;
