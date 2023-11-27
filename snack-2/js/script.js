const people = [

    {
        nome: 'luca',
        cognome: 'de santis',
        eta: '22'
    },
    {
        nome: 'maria',
        cognome: 'de santis',
        eta: '12'
    },

    {
        nome: 'filippo',
        cognome: 'de santis',
        eta: '55'
    },

    {
        nome: 'luca',
        cognome: 'de santis',
        eta: '2'
    },

    {
        nome: 'paolo',
        cognome: 'de santis',
        eta: '42'
    },
]

const newArray = people.map ((singlePerson) => {
    singlePerson.nomeCompleto = singlePerson.nome + '' + singlePerson.cognome;
    singlePerson.maggiorenna = singlePerson >= 18;
});

console.log(newArray)

