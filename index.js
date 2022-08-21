// & lexical scope defines how variable names are resolved in nested functions. 

// & Nested(child) functions have access to the scope of their parent functions.
 
// &  This is often confused with closures but lexical scope is only as important 
// & part of closure.

// ! global scope

// & A closure is a function having access to the parent scope,
// ^ "even after the parent function has closed" 

// ? A closure is created when we define a function, not when a function is executed. 

/*
let x = 10;

const parentFunction = ()=>{
    //! local scope
    let myValue = 20;
    console.log(x)
    console.log(myValue);

        const childFunction = ()=>{
            console.log(x+=1);
            console.log(myValue+=2);
        }
        return childFunction;
}

const result = parentFunction();
console.log(result);

result(); // ? even though the function is closed the child function still has 
//? access to the variable of the parent function.
result(); // ? myValue variable is private in the global scope(so can't log it in he console here).

*/




/*



// & IIFE (Immmediately Invoked function expression)

// & privateCounter returns only one time.
const privateCounter = (() =>{
    let count = 0;
    console.log(` initial value ${count}`);

    return () => { 
    count += 1; 
    console.log(count);
}
})();

privateCounter();
privateCounter();
privateCounter();
privateCounter();
privateCounter();
privateCounter();

*/



const credits = ((num) => {
    let credits = num;
    console.log(`initial credits value: ${credits}`);
    return () => {
        credits -= 1;
        if(credits > 0){
            console.log(`playing game, ${credits} remaining`);
        } else{
            console.log('not enough credits left');
        }
    }
})(3);

// ? anonymous function has the closure over the IIFE.
credits();
credits();
credits();