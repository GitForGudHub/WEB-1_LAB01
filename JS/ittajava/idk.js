import { userList } from "./db.js";
console.log(userList[0].name);
//primitívek
const num = 5; //szám
const userName = "Schwanzus Longus";
const isActive = false;
const nothing = null; //object
let test; //undefined

Number.prototype.isDivided = function(divider) {
    return this % divider === 0; //this = ez, amin épp dolgozik
};

console.log(num.isDivided(5));

//collections
const mixed = [1,2,4,['hello',true], {id:44}, false];
console.log(mixed [4].id);
console.log(mixed.length);
console.log(userList[0].age);
userList[0].name = 'Kurva anyád';
console.log(userList);

const key = 'id';
console.log(userList[1][key]); //key válzotóba tárolt kulcs kell

console.log('Anyád JS!!!4!');
//__proto__
