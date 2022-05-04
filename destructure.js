const person = { name: "Jack", age: 17, gfName: "Ema Watson", phone: '01732232323', address: "Dhaka" }
// const gfName = person.gfName;
// const phone = person.phone;
const {gfName, phone} = person;
// console.log(gfName, phone);
// console.log(gfName, phone);
// console.log(gfName, phone);

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const { leader } = complexObject.info;
console.log(leader);

const friends = ['Sakib Khan', 'Amir Khan', 'Salman Khan', 'Arman Khan'];
const [firstFriend, nextFriend, ...restFriend] = friends;
//console.log(restFriend);