
let squadre = [
    {
        nome: 'pro',
        punti: getRandomNumber(20, 300),
        falli: getRandomNumber(0, 10)
    },
    {
        nome: 'nonpro',
        punti: getRandomNumber(20, 300),
        falli: getRandomNumber(0, 10)
    },
    {
        nome: 'noob',
        punti: getRandomNumber(20, 300),
        falli: getRandomNumber(0, 10)
    },
]

console.log(squadre)












function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}