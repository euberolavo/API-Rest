const Atendimento = require('../models/atendimentos')

module.exports = app => {

    //Cria Rota GET de Atendimentos Geral
    app.get('/atendimentos', (req, res) => {
        Atendimento.listaAtendimentos(res)
    })

    //Cria Rota GET de Especialidades Geral
    app.get('/especialidades', (req, res) => {
        Atendimento.listaEspecialidades(res)
    })

    //Cria Rota GET de Pacientes Geral
    app.get('/pacientes', (req, res) => {
        Atendimento.listaPacientes(res)
    })

    //Cria Rota GET de Atendimentos recebendo parametros de requisição
    app.get('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)

        Atendimento.buscaAtendimentoPorId(id, res)
    })

    //Cria Rota GET de Especialidades recebendo parametros de requisição
    app.get('/especialidades/:id', (req, res) => {

        const id = parseInt(req.params.id)

        Atendimento.buscaEspecialidadePorId(id, res)
    })

    //Cria Rota GET de Pacientes recebendo parametros de requisição
    app.get('/pacientes/:id', (req, res) => {

        const id = parseInt(req.params.id)

        Atendimento.buscaPacientePorId(id, res)
    })

    //Cria Rota POST de Atendimentos
    app.post('/atendimentos', (req, res) => {

        const atendimento = req.body

        console.log(req.body)

        Atendimento.cadastroAtendimento(atendimento)
        res.send('Atendimento gerado com sucesso')
    })

    //Cria Rota POST de Pacientes
    app.post('/pacientes', (req, res) => {

        const paciente = req.body

        console.log(req.body)

        Atendimento.cadastroPaciente(paciente)
        res.send('Paciente Cadastrado')
    })

    //Cria Rota POST de Especialidades
    app.post('/especialidades', (req, res) => {

        const especialidades = req.body

        console.log(req.body)

        Atendimento.cadastroEspecialidade(especialidades)
        res.send('Especialidade Cadastrada')
    })

    // Faz alteração em Pacientes identificado pelo id
    app.patch('/pacientes/:id', (req,res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.alteraPaciente(id, valores, res)

    })

    // Faz alteração em Especialidades identificado pelo id
    app.patch('/especialidades/:id', (req,res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.alteraEspecialidade(id, valores, res)

    })

    // Faz alteração em Atendimentos identificado pelo id
    app.patch('/atendimentos/:id', (req,res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.alteraAtendimento(id, valores, res)

    })

    // Exclui Atendimento especificado pelo id
    app.delete('/atendimentos/:id', (req,res) => {
        const id = parseInt(req.params.id)

        Atendimento.deletaAtendimento(id, res)
    })

    // Exclui Especialidade especificada pelo id
    app.delete('/especialidades/:id', (req,res) => {
        const id = parseInt(req.params.id)

        Atendimento.deletaEspecialidade(id, res)
    })

    // Exclui Paciente especificado pelo id
    app.delete('/pacientes/:id', (req,res) => {
        const id = parseInt(req.params.id)

        Atendimento.deletaPaciente(id, res)
    })
}