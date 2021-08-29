class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarEspecialidades()
        this.criarPacientes()
        this.criarAtendimentos()
    }

    criarEspecialidades() {
        const sql = 'CREATE TABLE IF NOT EXISTS Especialidades (id serial NOT NULL , especialidade varchar(20) NOT NULL,PRIMARY KEY (id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela especialidade criada com sucesso');
            }
        })
    }

    criarPacientes() {
        const sql = 'CREATE TABLE IF NOT EXISTS Pacientes (id serial NOT NULL , nome_paciente varchar(20) NOT NULL, data_nasc_paciente date, cpf_paciente integer,PRIMARY KEY (id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Pacientes criada com sucesso');
            }
        })
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id serial NOT NULL , id_paciente integer, data_consulta date, id_especialidade integer, PRIMARY KEY (id), FOREIGN KEY(id_paciente) REFERENCES pacientes(id), FOREIGN KEY(id_especialidade) REFERENCES especialidades(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimento criada com sucesso');
            }
        })
    }
    
}


module.exports = new Tabelas