import mysql.connector
import random
from mysql.connector import Error
from faker import Faker
import pandas as pd  # Certifique-se de que pandas é importado com o alias 'pd'
import os

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

            cursor = conexao.cursor()
            
            # Consulta SQL para selecionar dados
            consulta_sql = "SELECT * FROM sandbox.produto_contrato"
            cursor.execute(consulta_sql)
            resultados = cursor.fetchall()

            # Obter nomes das colunas
            colunas = [i[0] for i in cursor.description]

            # Criar um DataFrame do pandas com os resultados
            df = pd.DataFrame(resultados, columns=colunas)

            # Exportar o DataFrame para um arquivo Excel
            df.to_excel('resultado_banco.xlsx', index=False, engine='openpyxl')

            print("Dados exportados com sucesso para resultado_banco.xlsx")

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