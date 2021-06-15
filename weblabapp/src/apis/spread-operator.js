const fruits = ['banana', 'apple', 'orange', 'avocado']

const af = [...fruits, 'limon', 'pineapple']
const jsn = {...af}

const printFruits = f => console.log(`fruit: ${f}`)
const printFruits2 = f => console.log(f)

printFruits2(jsn)

//af.map( printFruits )


