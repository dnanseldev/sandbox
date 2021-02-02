
const cars = [
    {model: 'Honda Civic', brand: 'Honda', year: 2020},
    {model: 'Honda Fit', brand: 'Honda', year: 2019},
    {model: 'Chevrolet Onix', brand: 'GM', year: 2019},
    {model: ' New HB20', brand: 'Hyundai ', year: 2020}
]

//Map
/*Método map cria um novo array de propriedades de um array de objetos.
No exemplo abaixo: O array cars tem 4 objetos com 3 propriedades.
Assim eu extraio as propriedades que preciso e uso como listas personalisadas*/
export const listaModelosCarros = cars.map(modelo => modelo.model) 
export const listaMontadoras = cars.map(marca => marca.brand)
export const listaAnosCarros = cars.map(ano => ano.year)


//Filter
/*Filter retorna um array novo de objetos verdadeiros na validação
*/
export const listaCarrosFiltrados = cars.filter(carro => carro.model === 'Chevrolet Onix')

