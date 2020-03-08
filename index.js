const express = require('express')
const app = express()
const path = require('path')
const moment = require('moment')

const convert = require('./lib/convert')
const apiCotacao = require('./lib/api.cotacao')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cotacao', async (req, res) => {
    const { cotacao, quantidade } = req.query

    const [{ ask, name, create_date }] = await apiCotacao.getCotacao(cotacao)

    data = moment(create_date).format('DD/MM/YYYY')

    const conversao = convert.convert(ask, quantidade)

    if (cotacao && quantidade) {
        return res.render('cotacao', {
            error: false,
            cotacao: convert.toMoney(ask),
            quantidade: convert.toMoney(quantidade),
            conversao: convert.toMoney(conversao),
            data,
            name
        })
    }
    return res.render('cotacao', {
        error: 'Valores inválidos'
    })
})

const port = process.env.PORT || 3000

app.listen(port, error => {
    if (error) {
        return console.log("The server could not be started.")
    }
    return console.log("convertMyMoney is online.")
})