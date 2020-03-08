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
    const cotacaoUSD = await apiCotacao.getCotacao_USD()
    const cotacaoEUR = await apiCotacao.getCotacao_EUR()
    const cotacaoARS = await apiCotacao.getCotacao_ARS()
    const cotacaoBTC = await apiCotacao.getCotacao_BTC()
    const cotacaoGBP = await apiCotacao.getCotacao_GBP()
    const cotacaoJPY = await apiCotacao.getCotacao_JPY()
    const cotacaoAUD = await apiCotacao.getCotacao_AUD()
    const cotacaoCHF = await apiCotacao.getCotacao_CHF()
    const dataFormatoOriginal = await apiCotacao.getCotacaoData()
    data = moment(dataFormatoOriginal).format('DD/MM/YYYY')
    res.render('home', {
        data,
        cotacaoUSD,cotacaoEUR,cotacaoARS,cotacaoBTC,
        cotacaoGBP,cotacaoJPY,cotacaoAUD,cotacaoCHF
    })
})

// app.get('/cotacao', (req, res) => {
//     const { cotacao, quantidade } = req.query
//     const conversao = convert.convert(cotacao, quantidade)
//     if(cotacao && quantidade){
//         return res.render('cotacao', {
//             error: false,
//             cotacao: convert.toMoney(cotacao),
//             quantidade: convert.toMoney(quantidade),
//             conversao: convert.toMoney(conversao)
//         })
//     }
//     return res.render('cotacao', {
//         error: 'Valores inválidos'
//     })
// }) 

const port = process.env.PORT || 3000

app.listen(port, error => {
    if(error){
        return console.log("The server could not be started.")
    } 
    return console.log("convertMyMoney is online.")
})