// Using promise and setTimeout together

function myPromise() {
  return new Promise((resolve, reject) => {
    const val = false;
    setTimeout(() => {
      if (val) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

// consume
myPromise()
  .then(() => {
    console.log("Resolved");
  })
  .catch(() => {
    console.log("Not Resolved");
  });
