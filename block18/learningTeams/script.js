// Create a simple program in that models a Library system. 
//************




// Define a Book class:
// Each Book should have a title, author, and isCheckedOut property.
// Create a method called toggleCheckOut that changes the isCheckedOut status.
class Book{
    constructor(title, author, isCheckedOut){
        this.title = title,
        this.author = author,
        this.isCheckedOut = isCheckedOut
    }
    toggleCheckOut(){
        this.isCheckedOut = !this.isCheckedOut //the toggleCheckOut method is designed to toggle the value of isCheckedOut between true and false
    } 
        
}

// Define a Library Class
// The Library should have a books array to store all Book objects.
// Add a method called addBook that takes a Book object and adds it to the books array.
// Create a method called listAvailableBooks that logs all the books that are currently not checked out.
class Library{
    constructor (){
        this.books = [] //This empty list, this.books = [], means that when we create a new library, it has no books in it yet. We add books to this list later using the addBook method.
    }

    //add a new book to the library, pass book as a parameter
    addBook(book){
        this.books.push(book) //push books into empty array
    }
    listAvailableBooks (){
        //loops through each book and !book.isCheckedOut checks if isCheckedOut is false, if false the book is available 
        this.books.forEach(book => {
            if (!book.isCheckedOut)
                console.log(`${book.title} by ${book.author} `)
        }
        )
    }
    
}


// Use your classes:

// Create an instance of Library.
const ourLibrary = new Library();
// Create 3 book objects
const b1 = new Book("Harry Potter", "J.K. Rowling")
const b2 = new Book("Emma", "Jane Austin")
const b3 = new Book ("Pride and Prejudice", "Jane Austin")
    // Toggle the checkout status of one book.
b1.toggleCheckOut();
// Add the books to instance of library
ourLibrary.addBook(b1);
ourLibrary.addBook(b2);
ourLibrary.addBook(b3);
// Console log all available books in the library.
console.log("Available books in the library:");
ourLibrary.listAvailableBooks();
