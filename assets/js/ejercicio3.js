
for (let i=0; i<16; i++){

    

    multiplo3 = i % 3;
    multiplo5 = i % 5;
    
    if(multiplo3 === 0 && multiplo5 === 0){
        console.log(i + " FizzBuzz")
    
    }else if(multiplo5===0){
     console.log(i + " Buzz")
    }else if(multiplo3 === 0){
        console.log(i + " Fizz") 
    }else{
        console.log(i)
    }
   
}