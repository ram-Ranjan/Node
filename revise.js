// console.log("a")
// setTimeout(() => console.log('b'),2000)
// console.log('c')
// setTimeout(() => console.log('d'),2000)
// console.log('e')


//CallBacks

// const fetchData = callback => {
//     setTimeout(() => {
//         callback("Calling the callback");//Called here

//     }, 1500);
// };

// setTimeout(() => {
//     console.log('Timer is done')
//     fetchData(text => {  // The callback function passed to fetchData function and will be executed after fetchData finishes. 
//         console.log(text)
//     })
// },2000);

// function updateData(){
//     console.log("Data is updated")
// }

// console.log("hello");
// console.log("Heyyy")



// //promises

// const fetchData = () => {
//     return new Promise((resolve , reject) => {
//         setTimeout( () => {
//             resolve("Promise Resolved")
//         },3000);
//     })
// }
// const promise = fetchData();

// // setTimeout(() =>  {
// //     console.log("Timer is  Donee!!!!");
//      fetchData()
// .then(text => {
//          console.log(text);
//       //   return fetchData(); //If fetchData is used to call .then then only the promise is accessed but if 
//       //   if We try to call it without fetchData it returns undeined
//     })
//    .then(text => {
//         console.log(text);//this is just a callback calling thats why returns undefined
//     });
// // },1000)


async function printChars(char) {

    console.log('a')
    console.log('b')

    await new Promise((res,rej) => {
        setTimeout(() => {
            res(console.log('c'))

        },1000)
        
      
    })

    console.log("d")
    console.log("e")
}

printChars();

