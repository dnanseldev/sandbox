function Animal(peso, altura, cor)
{
   this.peso = peso;
   this.altura = altura;
   this.cor = cor
}

Animal.prototype.comer = function() {
    console.log('Carnivoro');
}

function Pet(...args)
{
    Animal.apply(this, args);
    this.tipo = '';
    this.raca = '';
}

Pet.prototype = Object.create(Animal.prototype);

var a1 = new Animal(50, 1.3, 'Marron');

var p1 = new Pet(1, 0.20 ,'Amarelo');
p1.tipo = 'Felino';
p1.raca = 'Angora';



console.log(a1);
console.log(p1);