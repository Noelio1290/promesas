
// p.then(function(mensaje){
//     console.log(mensaje);
// }).catch(function(error){
//     console.log(error);
// });

/*const myAsyncFunc = async() => {
    try {
        console.log( await p)   
    } catch (error) {
        console.log(error)
    }
}

myAsyncFunc() 

const createPromise = () => new Promise(function(resolve,reject){
    let randomBoolean = Math.random() >= 0.5;
    setTimeout(()=>{
         if( randomBoolean === true){
             resolve ("si, si quiero ser tu novia")
         }else{
             reject("no, no eres mi tipo")
         }
    },500);
 })


let peticion = createPromise();

let peticion2 = createPromise();

const respuestaPeticion = async() => {
    try {
        console.log(await peticion)
    } catch (error) {
        console.log(error)
    }
};

peticion2.then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error);
});

respuestaPeticion()*/


const sexApple = () => {
    return parseInt(Math.random()*10)
}
    
const creadorDeNiños = (name,age,belleza) => { 
   return {
    name:name,
    age:age,
    belleza:belleza,
   }
}
const niño1 = creadorDeNiños("Noel",28,sexApple())
console.log(niño1)

const laProtoNiña = (gustosNiña) => new Promise(function(resolve,reject){
    setTimeout(()=>{
         if(niño1.belleza >= gustosNiña){
             resolve ("si, si quiero ser tu novia")
         }else{
             reject("no, no eres mi tipo")
         }
    },3000);
 })

 const niña1 = laProtoNiña(7)

 const seArmaONo= async() => {
    try {
        console.log(await niña1)
    } catch (error) {
        console.log(error)
    }
};

seArmaONo()
