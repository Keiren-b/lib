

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', "295", 'not read')
const book2 = new Book('Harry Potter', 'J.K Rowling', '600', 'read')
const book3 = new Book('Why I\'m No Longer Talking to White People About Race', 'Reni Eddo-Lodge', '261', 'read')

let myLibrary = [

];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function (){
        return title + " by " + author +", "+pages+ ' pages, '+ read
    }
}

function addBookToLibrary(){
    let title = prompt('What is the title of your book?')
    let author = prompt('Who is the author of your book?')
    let pages = prompt('How many pages does your book have?')
    let read = prompt('Have you read this book yet')
    let count = myLibrary.length+1
    myLibrary.push(new Book(title, author, pages, read))
}

myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)



const container = document.querySelector('div')

function displayBook(){ 

for (let i=0; i<myLibrary.length; i++){
    const card = document.createElement('div')
    const rmv = document.createElement('button')
    rmv.textContent = 'Remove Book'
    card.appendChild(rmv)

    card.classList.add('card')
    card.textContent = myLibrary[i].title + ' ' + myLibrary[i].author + ' ' + myLibrary[i].pages + ' '  +myLibrary[i].read
    container.appendChild(card)
}}


const newBook = document.createElement('button')
container.appendChild(newBook)
newBook.textContent = 'New Book'
newBook.addEventListener('click', addBookToLibrary)