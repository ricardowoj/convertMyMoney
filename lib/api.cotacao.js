const axios = require('axios')
const url = ('https://economia.awesomeapi.com.br/json/list/USD-BRL/1')

const getCotacaoAPI = (data) => axios.get(url)
const extractCotacao = res => res.data[0].ask
const extractCotacaoData = res => res.data[0].create_date

const getCotacao = async() => {
    const res = await getCotacaoAPI('')
    const cotacao = extractCotacao(res)
    return cotacao
}
const getCotacaoData = async() => {
    const res = await getCotacaoAPI('')
    const cotacaoData = extractCotacaoData(res)
    return cotacaoData
}

module.exports = {
    getCotacao,
    getCotacaoData,
    extractCotacao
}