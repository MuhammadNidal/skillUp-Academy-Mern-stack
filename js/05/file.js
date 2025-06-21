// for (let i =1; i<=5; i++){
// console.log("Pakistan",i);

// }

// let i=1;
// while (i<=10) {
//     console.log("hello world", i);
//     i++;
// }

// let condition= 1101;
// do{
//     console.log("hello world");
//     condition++;
// }
// while(condition<=100)


    const user ={
        name :"abdullah",
        age:21,
        education :"bs computer science",
        gender:"male"
    }
// console.log(user);

    for(let key in user){
        console.log(`${key} `);
        
    }

const colors=["banana","mango",23,23232,2323,23232,323,23,2,"orange"]

for (let color of colors){
console.log(color);

}

// const numbers = [1, 2, 3, 4];

// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8]


const numbers = [1, 2, 3, 4];

const total = numbers.reduce((sum, num) => sum + num, 10);

console.log(total); // 10
