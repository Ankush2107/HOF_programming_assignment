# HOF_programming_assignment
Higher Order Function Programming Assignment of Pwskills web development course. 


# Reverse String

```javascript

let input = "Pw_Skills";

// It will revesre the given string
function reverseString(str) {
    return str.split("").reverse().join("");
}

setTimeout( () => {

    let reversedString = reverseString(input);
    console.log("Reversed String after 2 second : ", reversedString);
}, 2000);
```

#  Random Number Generator with Delay and Progress Indication

```javascript
let delayInSeconds = 3;
let timeRemaining = delayInSeconds;

// Function to generate a random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100); // Generating a random number between 0 and 99
}

// Function to display the time remaining
function displayTimeRemaining() {
  console.log("Time remaining:", timeRemaining, "seconds");
  timeRemaining--;

  if (timeRemaining >= 0) {
    setTimeout(displayTimeRemaining, 1000); // Call the function after 1 second
  } else {
    const randomNumber = generateRandomNumber();
    console.log("Generated Random Number:", randomNumber);
  }
}

console.log("Starting the delay of", delayInSeconds, "seconds");

// Using setTimeout to introduce a delay of 1 second before displaying the time remaining
setTimeout(displayTimeRemaining, 1000);
```

# Build a feature for Store's Inventory

```javascript
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
```

# Filtering and Capitalizing: Books Published After 2010 with Author Names

```javascript
function filterAndCapitalizeBook(bookList) {
    const filteredBook = bookList.filter((book) => book.publicationYear <= 2010);
    const booksWithCapitalizeAuthorName = filteredBook.map((book) => {
        return book.Author.toUpperCase();
    })
    return booksWithCapitalizeAuthorName;
}

function allBooks() {

    const books = [
        { title: 'Book One', publicationYear: 2012, Author: 'Author1'},
        { title: 'Book Two',  publicationYear: 1992, Author: 'Author2'},
        { title: 'Book Three', publicationYear: 2015,  Author: 'Author3'},
        { title: 'Book Four',  publicationYear: 1989,  Author: 'Author4'},
        { title: 'Book Five',  publicationYear: 2009,  Author: 'Author5'},
        { title: 'Book Six', publicationYear: 1987,  Author: 'Author6'},
        { title: 'Book Seven', publicationYear: 1986,  Author: 'Author7'},
        { title: 'Book Eight', publicationYear: 2011,  Author: 'Author8'},
        { title: 'Book Nine', publicationYear: 1981,  Author: 'Author9'},
    ];
// console.log("Original List Of Books : ");
// books.forEach((book) => {
//     console.log(`Title: ${book.title}, Author: ${book.Author}, Pubilcation Year: ${book.publicationYear}`);
// });

const filteredBooks = filterAndCapitalizeBook(books);
console.log("\nFiltered books (Published before 2010 with capitalise author) : ");
filteredBooks.forEach((book) => {
    console.log(`Title: ${book.title}, Author: ${book.Author}, Pubilcation Year: ${book.publicationYear}`);
})
}

allBooks();
```

#  URL validation

```javascript
const urls = [
    "http://www.facebook.com",
    "https://www.twitter.com",
    "http://instagram.com",
    "https://realme.com",
    "ftp://github.com",
    "http://www.linkedin.com",
    "https://www.hashnode.com",
    "http://www.stackoverflow..com",
    "https://www.leetcode.com.",
];

function isValidURL(url) {

    const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+\.+[a-zA-Z]+$/;

    return regex.test(url);
}



urls.forEach((url) =>{
    const isValid = isValidURL(url);
    console.log(`${url} is ${isValid ? 'valid' : 'invalid'}`);
});
```

#  LinkedIn Profile URL Validator

```javascript
const linkedinProfileURLs = [
    "https://www.linkedin.com/in/john_doe123",
    "https://www.linkedin.com/in/jane-doe456",
    "https://www.linkedin.com/in/sam_smith",
    "https://www.linkedin.com/in/12a3b4c",
    "https://www.linkedin.com/in/user-name_with_underscores",
    "https://www.linkedin.com/in/invalid!@#.url",
];

function isValidLinkedinURL(url) {

    const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+\.+[a-zA-Z]+$/;

    return regex.test(url);
}

linkedinProfileURLs.forEach((url) => {
    const isValid = isValidLinkedinURL(url);
    console.log(`${url} is ${isValid ? 'valid' : 'invalid'}`);
})
```
