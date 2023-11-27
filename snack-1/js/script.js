const automobili = [
    {
        marca: 'ford',
        modello: 'vecchio',
        alimentazione: 'benzina'
    },
    {
        marca: 'tesla',
        modello: 'vecchio',
        alimentazione: 'gpl'
    },
    {
        marca: 'maserati',
        modello: 'gatag',
        alimentazione: 'metano'
    },
    {
        marca: 'opel',
        modello: 'vecchio',
        alimentazione: 'diesel'
    },
    {
        marca: 'mercedes',
        modello: 'amg',
        alimentazione: 'elettrico'
    },
    {
        marca: 'ford',
        modello: 'vecchio',
        alimentazione: 'gpl'
    },
    {
        marca: 'ford',
        modello: 'vecchio',
        alimentazione: 'benzina'
    },
    {
        marca: 'ford',
        modello: 'vecchio',
        alimentazione: 'metano'
    },
    {
        marca: 'ford',
        modello: 'vecchio',
        alimentazione: 'elettrico'
    },
    {
        marca: 'ford',
        modello: 'vecchio',
        alimentazione: 'benzina'
    },
    {
        marca: 'ford',
        modello: 'vecchio',
        alimentazione: 'gpl'
    },
    {
        marca: 'ford',
        modello: 'vecchio',
        alimentazione: 'eletrrico'
    },
    {
        marca: 'ford',
        modello: 'vecchio',
        alimentazione: 'benzina'
    },
    {
        marca: 'ford',
        modello: 'vecchio',
        alimentazione: 'metano'
    },
]

const autoBenzina = automobili.filter((auto) =>{

    if (auto.alimentazione === 'benzina'){
        return true
    };
})
const autoDiesel = automobili.filter(auto => auto.alimentazione === 'diesel');
const altreAuto = automobili.filter(auto => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel');


console.log('Automobili a benzina:');
console.log(autoBenzina);

console.log('Automobili a diesel:');
console.log(autoDiesel);

console.log('Altre automobili:');
console.log(altreAuto);
    

