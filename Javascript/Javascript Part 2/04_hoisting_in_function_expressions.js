console.log(myFunction); // Line 1

var myFunction = function(){
    console.log("this is my function");
} // 2

console.log(myFunction); //3

// Lets understand hosting in this
// 1) Compilation Phase---> Consider it to be done
// 2) Code execution Phase

// ----------------------------------------------------Code Execution Phase --------------------------------------------------------------

// Phase 1: Creation Phase:
// window:{},this=window,myfunc:function ---> So this are the things stored in the global memory

// Phase 2: Execution Phase                                                                       Output/console
            //   Line 1 executed                                                                     undefined
            //   Line 2 executed 
            //   Line 3 executed                                                                     full function definition