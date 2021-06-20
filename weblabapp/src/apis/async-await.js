//async functions always return a promise
/*
async function greet()
{
    return 'Hi there'
}

greet().then(value => {

    console.log(value)
})
*/

/*To a promise get a status of rejected it must thrown an error*/
/*
const add = async (number1, number2) => {

    if (typeof number1 !== 'number' || typeof number2 !== 'number')
       //throw new Error(`Error status: Parameters must be numbers`)
       throw `Error status: Parameters must be numbers`
    
    return number1 + number2
}

add(5, 57).then(value => {
    console.log(value)
})
 .catch(err => {
     console.log(err)
 })
 */

 //await can be used only with async functions
 //Pause the exection of a promise until it gets resolved

const url = 'https://jsonplaceholder.typicode.com/users'

const fetch = require('cross-fetch')

fetch(url)
    .then(response => {
        //console.log(response)
        return response.json()
    })
    .then(users => {
        console.log(users)

        users.map(usr => (
            console.log(`name: ${usr.name}`)
        ))
    })