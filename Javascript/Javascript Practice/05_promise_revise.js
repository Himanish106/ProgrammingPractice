const items = ["Water", "Salt", "Pepper", "Rice", "Vegetables", "Chocolates", "Strawberry"]

// Promise is produced
const friedRicePromise = new Promise((resolve, reject) => {
    if (items.includes("Rice") && items.includes("Vegetables")) {
        resolve("Fried Rice cooked")
    }
    else {
        reject("Could not do it")
    }
}) 

// Consuming Promise