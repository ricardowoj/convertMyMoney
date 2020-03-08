const axios = require('axios')

const getCotacaoAPI = (data) => axios.get(`https://economia.awesomeapi.com.br/json/list/${data}/1`)

const getCotacao = async (money) => {
    const { data } = await getCotacaoAPI(money)
    return data
}

module.exports = {
    getCotacao,
}