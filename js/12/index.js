// global scope


let name="ibrahim"
function name1 (){
    console.log("you acccess the name",name);
    
}
console.log(name);
name1()



// local scope

function  greet() {

    let message ="hello"
    console.log(message);
    
}

greet()
console.log(name);



function parent() {
    let father = "i am a father of the bilal"

    function child() {
        console.log(father);
        
        
    }
child()

}
parent()


function counter (){
    let value=0
    return function(){
        value++;
        console.log(value);
        
    }

}
const countercomplete = counter()
countercomplete()
countercomplete()
countercomplete()