class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
    }
    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id serial NOT NULL , cliente varchar(50) NOT NULL, especialidade varchar(20), PRIMARY KEY (id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabelas criadas com sucesso');
            }
        })
    }
}

module.exports = new Tabelas