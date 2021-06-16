const url = 'https://jsonplaceholder.typicode.com/users'

const fetch = require('cross-fetch')

fetch(url)
   .then(res => {
       if (res.status >= 400)
         throw new Error(`Error status: ${res.status}`)

       //console.log(usrdt)
       return res.json()
   })
   .then(usrdt => {
       console.log(usrdt)
   } )
   .catch(err => {
    console.log(err)
  })