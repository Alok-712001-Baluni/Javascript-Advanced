// & lexical scope defines how variable names are resolved in nested functions. 

// & Nested(child) functions have access to the scope of their parent functions.
 
// &  This is often confused with closures but lexical scope is only as important 
// & part of closure.

// ! global scope

// & A closure is a function having access to the parent scope,
// ^ "even after the parent function has closed" 

// ? A closure is created when we define a function, not when a function is executed. 
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

result(); // ? even though the funciton is closed the child function still has 
//? access to the variable of the parent function.
result(); // ? myValue variable is private in the global scope(so can't log it in he console here).

