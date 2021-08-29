const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento) {

        const sql = 'INSERT INTO Atendimentos(cliente, especialidade) VALUES ($1, $2)'
        conexao.query(sql, [atendimento.cliente, atendimento.especialidade], (erro, resultados) => {

            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)

            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM Atendimentos'

        console.log(sql)
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados.rows)
                // console.log(resultados.rows)
            }
        })
    }

    buscaPorId(id,res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados.rows[0]
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, res) {
        const sql = 'UPDATE Atendimentos SET cliente = ($1) , especialidade = ($2) WHERE id = ($3);'

        conexao.query(sql,[valores.cliente, valores.especialidade, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }else {
                res.status(200).json(resultados)
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id=($1)'

        conexao.query(sql, [id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
                console.log(sql)
            } else {
                res.status(200).json(resultados)
            }
        })
    }    
}
module.exports = new Atendimento