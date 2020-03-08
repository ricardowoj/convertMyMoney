const axios = require('axios')
const moment = require('moment')

const url = ('https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,ARS-BRL,BTC-BRL,GBP-BRL,JPY-BRL,AUD-BRL,CHF-BRL')
//const urlUSD = ('https://economia.awesomeapi.com.br/json/list/USD-BRL/1')
//const urlEUR = ('https://economia.awesomeapi.com.br/json/list/EUR-BRL/1')

axios.get(url).then( res => console.log( res.data['EUR'].ask ) )


