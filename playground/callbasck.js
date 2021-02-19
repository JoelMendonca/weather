/*setTimeout(() => {
    console.log('acabaram os 2 segundos')
}, 2000);

const names = ['Vitor', 'Tino', 'Rafael', 'Joel'];
const shortnames = names.filter((nome) => {
    return nome.length <= 4;
});

console.log(shortnames);

const geocode = (city, callback) => {
    setTimeout(() => {
        const data = {
        latitude: 0,
        longitude: 0
    }
    callback (data);
    }, 2000)
    
}

const data = ('Porto', () => {
    console.log(data);
}); */

// criar uma função chamada add que recebe os parametros corretos
// usar o set Timeout de 2 segundos para simular delay
// chama o callback após os 2 segundos

/*const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
});


const str = ' olá mundo, eu sou o Joel';

console.log(str.trim());
console.log(str.replaceAll ('o', ' '))



/*console.log(str.indexOf(','));

console.log(str.substring(0, str.indexOf(',')));

console.log(str.substring(0));

console.log(str.slice(-5));

console.log(str.substr(-5));*/


const concat = (a, b, callback) => {
    setTimeout(() => {
        callback(a + " " + b);
    }, 1000);
}

concat('Olá', 'Mundo', (result) => {
    console.log(result)
})


const bigger = (array, callback) => {
    setTimeout(() => { 
        let maxIndex = 0;
        for (let i = 1; i < array.length; i++){
            maxIndex = array[i].length > array[maxIndex].length ? i : maxIndex;
        }
    },2000)
}

bigger(['Vitor', 'Tino', 'Rafael', 'Joel'], (nome) => {
    console.log(nome);
})