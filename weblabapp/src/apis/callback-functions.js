const hdlfunc = (n1, n2) => {
    if (typeof n1 === 'number' && typeof n2 === 'number') 
      return n1 + n2;    
    else 
      return -1;    
}

const clkfnc = fun => {

    const value = fun(15, '31')

    if ( value < 0 )
      console.log('Parametro só aceita numeros')
    else
      console.log(`That is a sum of ${value}`)
}

clkfnc( hdlfunc )