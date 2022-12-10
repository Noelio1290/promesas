
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

myAsyncFunc() */

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

respuestaPeticion()

const protoniño = {
    name:"",
    age:0,
    belleza:0,
}
const reproductor = ()=>{ 
   const person = Object.create(protoniño)
   return person
}
const niño1 = reproductor()
niño1.name = "Noel"
niño1.age = 28
niño1.belleza = 98

