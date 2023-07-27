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