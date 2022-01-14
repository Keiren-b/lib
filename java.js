

// const book1 = new Book('The Hobbit', 'J.R.R Tolkien', "295", 'not read')
// const book2 = new Book('Harry Potter', 'J.K Rowling', '600', 'read')



let myLibrary = [];

const addBook = (ev) => {
    ev.preventDefault()
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').value
    myLibrary.push(title, author, pages, read);
}

document.querySelector('form').reset()

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn').addEventListener('click', addBook)
})


// function Book(title, author, pages, read){
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     this.info = function (){
//         return title + " by " + author +", "+pages+ ' pages, '+ read
//     }
// }

// function addBookToLibrary(){
//     let title = prompt('What is the title of your book?')
//     let author = prompt('Who is the author of your book?')
//     let pages = prompt('How many pages does your book have?')
//     let read = prompt('Have you read this book yet')

//     const book = new Book(title, author, pages, read)
//     myLibrary.push(book)    
// }
// let form = document.querySelector('form')
// let submit = 
