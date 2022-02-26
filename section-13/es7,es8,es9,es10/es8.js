// Es8 padStart() padEnd()

'Turtles'.padStart()

// able to put comma at the end
// makes syntax look nicer
const fun = (a,b,c,d,) => {
    console.log(a);
}

Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    console.log(value[1] + value[0].replace('username', ''));
})

// Async Await










