const hdlfunc = (n1, n2) => {
    if (typeof n1 === 'number' && typeof n2 === 'number') 
      return n1 + n2;    
    else 
      return -1;    
}

const clkfnc = fun => {

    const sum = fun(15, 7)
    console.log(`That is a sum of ${sum}`)
}

clkfnc( hdlfunc )