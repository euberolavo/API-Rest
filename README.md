API-Rest

💻 Projeto

Esse projeto é uma API que simula a criação de uma marcação de consulta, cadastrando especialidade medica e paciente

🛠️ Technologias

Esse projeto foi criado usando as tecnologias:

 - JavaScript
 - NodeJS
 - Express
 - PostgresSQL
 

▶️ Executando

Para rodar o programa, será necessario o NodeJS, PostgresSQL


 - Clone o projeto.

    git clone https://github.com/euberolavo/API-Rest.git

 - Instale o projeto - (npm install)


 - Configure a conexão com o banco
 
    Pasta-do-projeto/infraestrutura/conexao.js


  Será necessário já ter uma Base de dados criada, para configurar a conexão.
  
 
    const config = {
      host: 'localhost',
      user: 'usuario-banco',     
      password: 'senha-banco',
      database: 'nome-da-base-de-dados',
      port: Porta-da-base-de-dados,
      ssl: false
    };

  Inicie o servidor - (npm start)

Cadastrando:
	
	POST /localhost:3000/atendimentos - Registra um novo paciente.
	
		Body:
			nome: "Han Solo" 
			data_nasc: "1993-09-12"
			cpf: 86565412354
	
	POST /localhost:3000/especialidades - Registra uma nova especialidade.
	
		Body:
			especialidade: "clinico"
	
	POST /localhost:3000/atendimentos - Registra um novo atendimento.
		
		Body:
			paciente: "2" - id referente ao paciente cadastrado na tabela Pacientes
			dataConsulta: "2021-09-12"
			especialidade: "1" - id referente a especialidade cadastrada na tabela Especialidades
	
visualizando cadastos

	GET /localhost:3000/atendimentos - Retorna todos os atendimentos.
	
	GET /localhost:3000/pacientes - Retorna todos os pacientes.
	
	GET /localhost:3000/especialidades - Retorna todas as especialidades.
	
Para consulta especifica de paciente, atendimento ou especialidade, basca colocar o id referente na URL

	EX: GET /localhost:3000/pacientes/2 - ele retornará apenas o paciente com id 2.
