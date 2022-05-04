const ages = [12, 23, 53, 23, 13];
const ages2 = [34, 23, 24];
const ages3 = [32, 34, 31, 21];
const allAges = ages.concat(ages2).concat(5).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
const takaPoisa = [650, 450, 250];
const maximum = Math.max(...takaPoisa);
console.log(maximum);