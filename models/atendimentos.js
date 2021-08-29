const conexao = require('../infraestrutura/conexao')


class Atendimento {

    // Gera Atendimento
    cadastroAtendimento(atendimento) {

        const sql = 'insert into atendimentos (id_paciente, data_consulta, id_especialidade) values ($1,$2,$3)'
        conexao.query(sql, [atendimento.paciente, atendimento.dataConsulta, atendimento.especialidade], (erro, resultados) => {

            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)

            }
        })
    }

    // Cadastra Paciente
    cadastroPaciente(paciente) {

        const sql = 'INSERT INTO pacientes (nome_paciente,data_nasc_paciente, cpf_paciente) VALUES ($1,$2,$3)'
        conexao.query(sql, [paciente.nome, paciente.data_nasc, paciente.cpf], (erro, resultados) => {

            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)

            }
        })
    }

    // Cadastra Especialidade
    cadastroEspecialidade(especialidade) {

        const sql = 'insert into especialidades (especialidade) values ($1)'
        conexao.query(sql, [especialidade.especialidade], (erro, resultados) => {

            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)

            }
        })
    }

    // Lista todos os atendimentos Cadastrados
    listaAtendimentos(res) {
        const sql = 'select atendimentos.id, pacientes.nome_paciente, pacientes.data_nasc_paciente, atendimentos.data_consulta, especialidades.especialidade from atendimentos INNER JOIN pacientes ON atendimentos.id_paciente = pacientes.id INNER JOIN especialidades ON atendimentos.id_especialidade = especialidades.id'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados.rows)
            }
        })
    }

    // Lista todos os Especialidades Cadastradas
    listaEspecialidades(res) {
        const sql = 'SELECT * FROM Especialidades'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados.rows)
            }
        })
    }

    // Lista todos os Pacientes Cadastradas
    listaPacientes(res) {
        const sql = 'SELECT * FROM Pacientes'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados.rows)
            }
        })
    }

    // Lista atendimento especificado pelo id
    buscaAtendimentoPorId(id, res) {
        const sql = `SELECT atendimentos.id, pacientes.nome_paciente, pacientes.data_nasc_paciente, atendimentos.data_consulta, especialidades.especialidade FROM atendimentos INNER JOIN pacientes ON atendimentos.id_paciente = pacientes.id INNER JOIN especialidades ON atendimentos.id_especialidade = especialidades.id WHERE atendimentos.id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados.rows[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento)
            }
        })
    }

    // Lista Especialidade especifica pelo id
    buscaEspecialidadePorId(id, res) {
        const sql = `SELECT * FROM Especialidades WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados.rows[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento)
            }
        })
    }

    // Lista Paciente especificado pelo id
    buscaPacientePorId(id, res) {
        const sql = `SELECT * FROM Pacientes WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados.rows[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento)
            }
        })
    }

    // Altera paciente especificado pelo id
    alteraPaciente(id, valores, res) {
        const sql = 'UPDATE pacientes SET nome_paciente = ($1) , data_nasc_paciente = ($2), cpf_paciente = ($3)  WHERE id = ($4);'

        conexao.query(sql, [valores.nome, valores.data_nasc, valores.cpf, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    // Altera Especialidade especificado pelo id
    alteraEspecialidade(id, valores, res) {
        const sql = 'UPDATE especialidades SET especialidade = ($1)  WHERE id = ($2);'

        conexao.query(sql, [valores.especialidade, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    // Altera Atendimento especificado pelo id
    alteraAtendimento(id, valores, res) {
        const sql = 'UPDATE atendimentos SET id_paciente = ($1), data_consulta = ($2), id_especialidade = ($3)  WHERE id = ($4);'

        conexao.query(sql, [valores.paciente, valores.dataConsulta, valores.especialidade, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    // Exclui Atendimento especificado pelo id
    deletaAtendimento(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id=($1)'

        conexao.query(sql, [id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
                console.log(sql)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    // Exclui Especialidade especificado pelo id
    deletaEspecialidade(id, res) {
        const sql = 'DELETE FROM Especialidades WHERE id=($1)'

        conexao.query(sql, [id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    // Exclui Paciente especificado pelo id
    deletaPaciente(id, res) {
        const sql = 'DELETE FROM Pacientes WHERE id=($1)'

        conexao.query(sql, [id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
                console.log(sql)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
}
module.exports = new Atendimento