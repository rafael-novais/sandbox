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
            
            for i in range(10):
                # Exibindo os dados
                # Insert sql
                insert_sql = """
                INSERT INTO sandbox.contratos (nome_contrato)
                VALUES (%s)
                """

                cursor.execute(insert_sql, (fake.word(),))
                
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