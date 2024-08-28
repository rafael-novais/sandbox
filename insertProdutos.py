import mysql.connector
import random
from mysql.connector import Error
from faker import Faker

fake = Faker()

def conectar_ao_banco():
    try:
        # Conectando ao banco de dados
        conexao = mysql.connector.connect(
            host='localhost',        # Ou o IP do seu servidor MySQL
            database='TITE', # Nome do seu banco de dados
            user='root',       # Seu usuário do MySQL
            password='1234'      # Sua senha do MySQL
        )
        
        if conexao.is_connected():
            print("Conectado ao MySQL")

            # Criando um cursor para executar consultas
            cursor = conexao.cursor()
            
            # Consulta SQL
            consulta_sql = "SELECT * FROM sandbox.contratos"  # Substitua pelo nome da sua tabela
            cursor.execute(consulta_sql)


            # Recuperando os dados
            resultados = cursor.fetchall()
            
            for i in range(5):
                # Exibindo os dados
                for linha in resultados:
                    print(linha)

                    # Insert sql
                    insert_sql = """
                    INSERT INTO sandbox.produto_contrato (nome_produto, descricao, preco, id_contrato)
                    VALUES (%s, %s, %s, %s)
                    """

                    cursor.execute(insert_sql, (fake.word(), fake.word(), random.uniform(1.0, 10.0), linha[0]))

        conexao.commit()
        print("Novos dados inseridos com sucesso")
            
    except Error as e:
        print(f"Erro ao conectar ao MySQL: {e}")
    
    finally:
        if conexao.is_connected():
            cursor.close()
            conexao.close()
            print("Conexão ao MySQL encerrada")

if __name__ == "__main__":
    conectar_ao_banco()