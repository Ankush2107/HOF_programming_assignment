const itemWithPriceInUSD = {
    "item1": 20,
    "item2": 10,
    "item3": 40,
    "item4": 50
};

// Funtion to convert Price in INR
function convertToINR(USDprice){
    return USDprice * 80;
}


const itemWithPriceInINR = Object.fromEntries(
    Object.entries(itemWithPriceInUSD).map((item, USDprice) => {
        return [item, convertToINR(USDprice)]
    })
);

console.log("Item with price in USD", itemWithPriceInUSD);
console.log("Item with price in INR", itemWithPriceInINR);