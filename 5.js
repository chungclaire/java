function printhello() {
    console.log('hello');
}
printhello();

function log(message){
    console.log(message);
}
log('hello@');
log(1234);

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

//5. local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello' ;
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage='hello';
    }
    console.log(childMessage)
}
printMessage();
