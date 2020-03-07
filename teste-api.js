const axios = require('axios')

const url = ('https://economia.awesomeapi.com.br/json/list/USD-BRL/1')

axios.get(url).then( res => console.log( res.data[0].ask) )
axios.get(url).then( res => console.log( res.data[0].create_date) )