const express = require('express')
const app = express()
const path = require('path')
const moment = require('moment')

const convert = require('./lib/convert')
const apiCotacao = require('./lib/api.cotacao')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async(req, res) => {
    const cotacao = await apiCotacao.getCotacao()
    const dataOriginal = await apiCotacao.getCotacaoData()
    data = moment(dataOriginal).format('DD/MM/YYYY')
    res.render('home', {
        cotacao, data
    })
})

app.get('/cotacao', (req, res) => {
    const { cotacao, quantidade } = req.query
    const conversao = convert.convert(cotacao, quantidade)
    if(cotacao && quantidade){
        return res.render('cotacao', {
            error: false,
            cotacao: convert.toMoney(cotacao),
            quantidade: convert.toMoney(quantidade),
            conversao: convert.toMoney(conversao)
        })
    }
    return res.render('cotacao', {
        error: 'Valores inválidos'
    })
}) 

const port = process.env.PORT || 3000

app.listen(port, error => {
    if(error){
        return console.log("The server could not be started.")
    } 
    return console.log("convertMyMoney is online.")
})