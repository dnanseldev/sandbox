/* Create a promise */

const p = new Promise((resolve, reject) => { //conventioned parameter names
    //This function surrounds the assync operation

    const anyValue = 37
    //resolve(anyValue) //resolve acts like return
    reject(40)
})

/* Consume a promise */

//then method is responsible for receiving the result of success the promise
//then method also return a new promise
p.then( value => value + 5 ) //this value is the result of resolve method
 .then ( any => console.log(any) )
 .catch(err => {
     console.log({err})
 })
    