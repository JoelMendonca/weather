const greeter = (nome ='user') => {
    console.log('Olá ' + nome);
}

greeter('Joel');

greeter();

// funcao recebe erro, objecto js latitude, longitude e localizacao

//  objecto destruturizacao

// garantir que o objecto não é undifined

const geo = (erreur, { latitude, longitude, localizacao } = {} =>
    )