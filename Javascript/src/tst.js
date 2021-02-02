const customer = {
    name: 'Plinio',
    lastName: 'Rezende',
    address: {
            street: 'Adriano Focosi',
            nbr: 330
    }
}
const customer2 = ['Plinio', 'Rezende','Adriano Focosi', 330]


const [name, address] = customer2;

console.log(`${name}`);
console.log(`${address}`);