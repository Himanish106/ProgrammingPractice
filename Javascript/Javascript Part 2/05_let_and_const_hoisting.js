// Uncaught ReferenceError: Cannot access 'firstName' before initialization
console.log(firstName);
let firstName = "Himanish";
console.log(firstName);

// ----------------------------------------------------Code Execution Phase --------------------------------------------------------------

// Phase 1: Creation Phase:
// window:{}, this=window, firstName:uninitialized ---> So this are the things stored in the global memory

// Phase 2: Execution Phase                                                                       Output/console
            //   Line 1 not executed                                                   Uncaught ReferenceError: Cannot access 'firstName' before initialization       
    
// In var we were getting undefined but here in case of both let and const we will get an error. In this case the value is not undefined but initialized. 

// Hoisting with let works differently compared to var.
// When a variable declared with let is hoisted, it is moved to the top of its block scope but remains in the temporal dead zone(TDZ) until the actual declaration is encountered in the code.
// This means that variables declared with let are not accessible before their declaration in the code, and accessing them before their declaration will result in a ReferenceError.

// In the case of var, variables are not placed in the temporal dead zone. The concept of the temporal dead zone applies only to variables declared with let and const. 