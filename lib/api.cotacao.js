const axios = require('axios')
const url = 'https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,ARS-BRL,BTC-BRL,GBP-BRL,JPY-BRL,AUD-BRL,CHF-BRL'

const getCotacaoAPI = () => {
    return axios.get(url)
}

//Acessar data da cotação do dia 
const getCotacaoData = async() => {
    const res = await getCotacaoAPI()
    return res.data['USD'].create_date
}
//Dolar comercial
const getCotacao_USD = async() => {
    const res = await getCotacaoAPI()
    return res.data['USD'].ask
}
//Euro
const getCotacao_EUR = async() => {
    const res = await getCotacaoAPI()
    return res.data['EUR'].ask
}
//Peso Argentino
const getCotacao_ARS = async() => {
    const res = await getCotacaoAPI()
    return res.data['ARS'].ask
}
//Bitcoin
const getCotacao_BTC = async() => {
    const res = await getCotacaoAPI()
    return res.data['BTC'].ask
}
//Libra Esterlina
const getCotacao_GBP = async() => {
    const res = await getCotacaoAPI()
    return res.data['GBP'].ask
}
//Iene Japonês
const getCotacao_JPY = async() => {
    const res = await getCotacaoAPI()
    return res.data['JPY'].ask
}
//Dolar Australiano
const getCotacao_AUD = async() => {
    const res = await getCotacaoAPI()
    return res.data['AUD'].ask
}
//Franco Suiço
const getCotacao_CHF = async() => {
    const res = await getCotacaoAPI()
    return res.data['CHF'].ask
}
module.exports = {
    getCotacaoData,
    getCotacao_USD,
    getCotacao_EUR,
    getCotacao_ARS,
    getCotacao_BTC,
    getCotacao_GBP,
    getCotacao_JPY,
    getCotacao_AUD,
    getCotacao_CHF,
}