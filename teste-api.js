const axios = require('axios')
const moment = require('moment')



const url = ('https://economia.awesomeapi.com.br/json/list/USD-BRL/1')

// axios.get(url).then( res => console.log( res.data[0].ask) )
data = axios.get(url).then( res => console.log( res.data[0].create_date) )

console.log(moment(data).format('DD/MM/YYYY'))

console.log()