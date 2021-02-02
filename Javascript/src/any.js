function doAnyThing(any)
{
    any();
}

function sumValue(...args)
{
    let value = 0;

    args.forEach(element => {
       value += Number(element);
      // console.log(element);
    });

    return value;
}

/*
doAnyThing(() => {
    console.log(`Das ist ein test aus Funktion: ${sumValue(37,78)}`);
});
*/

const dasFunc = () => {
    const names = {
        name1: 'Daniel',
        name2: () => 'Luciana',
        name3:'Plinio',
        name4:'Livia'
    };
    //const names = ['daniel', 'luciana', 'plinio', 'livia'];

    //const {name1, name2} = names;
  // console.log(`${name1} e ${name2()}`); 

  const {...rest} = names
   console.log(rest)
}


dasFunc();