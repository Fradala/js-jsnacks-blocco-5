
const numeri = [1, 2, 3, 4, 5];
const lettere = ['a', 'b', 'c', 'd', 'e'];

if (numeri.length !== lettere.length){
    alert('non si puo fare')
} else {
    const newArray = [];

    numeri.forEach(( element, index) => {
        newArray.push(lettere[index], element);
    })
    console.log(newArray)
}