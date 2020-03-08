const axios = require('axios')
const url = ('https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,ARS-BRL,BTC-BRL,GBP-BRL,JPY-BRL,AUD-BRL,CHF-BRL')

//Acessar data da cotação do dia
const getDataCotacaoAPI = (data) => axios.get(url)
const extractCotacaoData = res => res.data['USD'].create_date
const getCotacaoData = async() => {
    const resData = await getDataCotacaoAPI('')
    const cotacaoData = extractCotacaoData(resData)
    return cotacaoData
}
//Dolar comercial
const getCotacaoAPI_USD = (data) => axios.get(url)
const extractCotacao_USD = res => res.data['USD'].ask
const getCotacao_USD = async() => {
    const resUSD = await getCotacaoAPI_USD('')
    const cotacaoUSD = extractCotacao_USD(resUSD)
    return cotacaoUSD
}
//Euro
const getCotacaoAPI_EUR = (data) => axios.get(url)
const extractCotacao_EUR = res => res.data['EUR'].ask
const getCotacao_EUR = async() => {
    const resEUR = await getCotacaoAPI_EUR('')
    const cotacaoEUR = extractCotacao_EUR(resEUR)
    return cotacaoEUR
}
//Peso Argentino
const getCotacaoAPI_ARS = (data) => axios.get(url)
const extractCotacao_ARS = res => res.data['ARS'].ask
const getCotacao_ARS = async() => {
    const resARS = await getCotacaoAPI_ARS('')
    const cotacaoARS = extractCotacao_ARS(resARS)
    return cotacaoARS
}
//Bitcoin
const getCotacaoAPI_BTC = (data) => axios.get(url)
const extractCotacao_BTC = res => res.data['BTC'].ask
const getCotacao_BTC = async() => {
    const resBTC = await getCotacaoAPI_BTC('')
    const cotacaoBTC = extractCotacao_BTC(resBTC)
    return cotacaoBTC
}
//Libra Esterlina
const getCotacaoAPI_GBP = (data) => axios.get(url)
const extractCotacao_GBP = res => res.data['GBP'].ask
const getCotacao_GBP = async() => {
    const resGBP = await getCotacaoAPI_GBP('')
    const cotacaoGBP = extractCotacao_GBP(resGBP)
    return cotacaoGBP
}
//Iene Japonês
const getCotacaoAPI_JPY = (data) => axios.get(url)
const extractCotacao_JPY = res => res.data['JPY'].ask
const getCotacao_JPY = async() => {
    const resJPY = await getCotacaoAPI_JPY('')
    const cotacaoJPY = extractCotacao_JPY(resJPY)
    return cotacaoJPY
}
//Dolar Australiano
const getCotacaoAPI_AUD = (data) => axios.get(url)
const extractCotacao_AUD = res => res.data['AUD'].ask
const getCotacao_AUD = async() => {
    const resAUD = await getCotacaoAPI_AUD('')
    const cotacaoAUD = extractCotacao_AUD(resAUD)
    return cotacaoAUD
}
//Franco Suiço
const getCotacaoAPI_CHF = (data) => axios.get(url)
const extractCotacao_CHF = res => res.data['CHF'].ask
const getCotacao_CHF = async() => {
    const resCHF = await getCotacaoAPI_CHF('')
    const cotacaoCHF = extractCotacao_CHF(resCHF)
    return cotacaoCHF
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