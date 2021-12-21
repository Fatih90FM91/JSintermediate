// for (let i = 200; i<2700 ; i++) {
    
//     if(i%3===0){

//         console.log( " divided by 3 ==>>"+i);

//     }else if(i%5===0){
//         console.log(" divided by 5 ==>>"+i);
//     }
// }
console.log("=================================================================");

let newArray =[1,2,3,4,5];
let reverseArray=[];
let count =0;

for (let i= newArray.length-1; i>=0; i--) {
  
      reverseArray[count]=newArray[i];
      count++
}
console.log(reverseArray);

console.log("=================================================================");
let items=[];

for (let i = 1; i <=135; i++) {
   
    if(i%3===0 && i%5===0){
     items.push("FizzBuzz");
    } else if(i%5===0){
        items.push("Buzz");
    }else if(i%3===0 ){
        items.push("Fizz");
    }
    
    else{
        items.push(i);
    }


}
console.log(items);

console.log("=================================================================");


let fibo=[0,1];

for (let i = 2; i< 15; i++) {
    
    fibo[i]=fibo[i-2] + fibo[i-1];
    console.log(fibo[i]);
}
console.log(fibo);
console.log("=================================================================");

let items2 = [1,-2,-4,6,7];
let newItems2=[];

newItems2= items2.filter(e => e !== -2);
newItems2= items2.filter(e => e !== -4);
console.log(newItems2);

// const newArr = items2.filter(e => e !== -2)
// console.log(newArr);

for (let i = 0; i< items2.length; i++) {
    
    if(items2[i]<0){
    
        newItems2= items2.filter(e => e !== items[i]);
      
    }else{
       newItems2[i]=items2[i];
    }
}

console.log(newItems2);
console.log("=================================================================");

let stringCharacter = ['Man', 'I','Love','The','Matrix','Program'];

let star ="";
for (let i = 0; i < stringCharacter.length; i++) {
   
    if(stringCharacter[i]==="Program"){

        console.log(stringCharacter[i].length);

        for (let j = 0; j <  stringCharacter[i].length; j++) {
            star+="*";
            console.log("*");
        }

        stringCharacter[i]=star;
    }
}

console.log(stringCharacter);

