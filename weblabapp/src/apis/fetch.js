const fetch = require('cross-fetch')

const url = 'https://official-joke-api.appspot.com/random_joke'

fetch(url)
   .then( res => {
       if (res.status >= 400)
         throw new Error(`Error status: ${res.status}`)
       
         console.log(res)
       return res.json()
    })
    .then( ({id, type, setup, punchline}) => {
      //const {id, type, setup, punchline} = img
      console.log(`id: ${id}, type: ${type}, joke: ${setup}, punchline: ${punchline}`)
    })
    .catch(err => {
      console.log(err)
    })
   