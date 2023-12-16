function friedRicePromise() {
  const bucket = ["rice", "salt", "vegetables", "chilli powder", "onion"];
  return new Promise((resolve, reject) => {
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
}

friedRicePromise()
  .then((successPromise) => {
    console.log(successPromise);
  })
  .catch((failurePromise) => {
    console.log(failurePromise);
  });
