





let myLibrary = [];


book_1 = new Book('The Hobbit', 'J.R.R Tolkien', "295", 'Not Read')
book_2 = new Book('Harry Potter', 'J.K Rowling', '600', 'Read')
book_3 = new Book('The Lion, the Witch and the Wardrobe', 'C. S. Lewis', '135', 'Read')
book_4 = new Book('The Da Vinci Code', 'Dan Brown', '531', 'Not Read')
book_5 = new Book('The Catcher in the Rye', 'J. D. Salinger', '130', 'Not Read')
book_6 = new Book('To Kill a Mockingbird', 'Harper Lee', '1358', 'Read')


myLibrary.push(book_1)
myLibrary.push(book_2)
myLibrary.push(book_3)
myLibrary.push(book_4)
myLibrary.push(book_5)
myLibrary.push(book_6)



const container = document.getElementById('cardContainer')

const addBook = (ev) => {
    ev.preventDefault()
    let f = document.getElementById('form')
    if (f.checkValidity() == false){
        showError()
    }
    else {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').value

    let book = new Book(title, author, pages, read)
    myLibrary.push(book);


    for (let i=0; i<myLibrary.length; i++){

    
    const info = document.createElement('div')
    info.classList.add('info')

       const title = document.createElement('h2')
       title.textContent=myLibrary[i].title;
       title.style.fontStyle = 'italic'
       const author = document.createElement('h2')
       author.textContent = myLibrary[i].author;
       let pages = document.createElement('h2')
       pages.textContent='Number of Pages: ' + myLibrary[i].pages
       let read = document.createElement('h2')
       read.textContent = myLibrary[i].read
       container.appendChild(info)
       info.appendChildren = function (){
            for (let j=0; j< arguments.length; j++){
                this.appendChild(arguments[j]);
            }
       }

       info.appendChildren(title, author, pages, read)
       document.querySelector('form').reset()
    //    info.appendChild(title, author, pages, read)
   }}
}


    
    



document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btn').addEventListener('click', addBook)
})


function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// function openForm() {
//     document.getElementById("formContainer").style.display = "block";
//   }
//   document.getElementById('add').addEventListener('click', openForm)

//   function closeForm() {
//     document.getElementById("formContainer").style.display = "none";
//   }

//   document.getElementById('btn').addEventListener('click', closeForm)

//

const form = document.querySelector('form')
const title = document.getElementById('title')
const titleError = document.getElementById('titleError')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')

title.addEventListener('input', (event)=> {
    if (title.validity.valid) {
        // title.setCustomValidity("A Title is required")
        // titleError.textContent = "A title is Requiredz" 
        titleError.textContent = ""
        titleError.className = 'error'   
    }

    else {
        // title.setCustomValidity("")
        showError();
    }
})

form.addEventListener('submit', (event)=> {
    if (!title.validity.valid) {
        showError();
        event.preventDefault();
    }
    else if (!author.validity.valid) {
        showError();
        event.preventDefault();
    }
})

function showError() {
    if (title.validity.valueMissing) {
        titleError.textContent = "You Need to Enter a Title"
        titleError.className = 'error active'
    }

    if (author.validity.valueMissing) {
        authorError.textContent = 'You Need to Enter an Author'
        authorError.className = 'error active'
    }
    if (pages.validity.valueMissing) {
        pagesError.textContent = 'You Need to Enter a Number Greater than 0'
        pagesError.className = 'error active'
    }


}


author.addEventListener('input', (event)=> {

    if (author.validity.valid) {
        authorError.textContent = ""
        authorError.className = 'error'
    }
    else {
        // title.setCustomValidity("")
        showError();
    }
})

pages.addEventListener('input', (event)=> {
    if (pages.validity.valid) {
        pagesError.textContent = ""
        pagesError.className = 'error'
        
    }
    else {
        showError();
    }
}
)