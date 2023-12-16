// Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation, allowing handling of success and error scenarios using "then" and "catch" methods.

const bucket = ["rice", "salt", "vegetables", "chilli powder", "onion"];

//Suppose I want too make a fried rice for everyone using the bucket items. If all these items are available then I make the fried rice then the promise gets fulfilled else gets rejected.

// So you can consider Promise is a class or a constructor whose object we have to create. Now promises take two callback functions called resolve and reject. Resolve is used when the promise gets fulfilled and if not we use reject.
const friedRice = new Promise((resolve, reject) => {
  if (
    bucket.includes("rice") &&
    bucket.includes("salt") &&
    bucket.includes("vegetables") &&
    bucket.includes("chilli powder") &&
    bucket.includes("onion")
  ) {
    resolve("Fried rice cooked hence promise fulfilled");
  } else {
    reject("Promise not fullfilled");
  }
});
// This was how to make a promise

// Now we need to know how to consume the promise. Keep this in mind we consume more promise than creating them
friedRice
  .then(
    // When promise gets fulfilled
    (successPromise) => {
      console.log(successPromise);
    }
  )
  .catch((failedPromise) => {
    console.log(failedPromise);
  });

// We create a new promise called friedRice with a callback function that takes two parameters, resolve and reject. Inside this callback, we check if all the required items are present in the bucket using the includes method.

// If all items are present, we call the resolve function and pass the message "Fried rice cooked, hence promise fulfilled." If any required item is missing, we call the reject function and pass the message "Promise not fulfilled."

// To consume the promise, we use the then method on the friedRice promise. When the promise is fulfilled (i.e., all items are available), the success callback function is executed, and we log the success message to the console.

// If the promise is rejected (i.e., any required item is missing), the catch method is called, and the failure callback function is executed, logging the failure message to the console.
