

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', "295", 'not read')
const book2 = new Book('Harry Potter', 'J.K Rowling', '600', 'read')
const book3 = new Book('Why I\'m No Longer Talking to White People About Race', 'Reni Eddo-Lodge', '261', 'read')
const form = document.getElementById('myForm')




let myLibrary = [];

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
    // let title = form.elements[0].value
    // console.log(title)
    // myLibrary.push(title)
    // let author = form.elements[1].value
    // let pages = form.elements[2].value
    // let read = form.elements[3].value
    // let title = prompt('')
    // let author = prompt('')
    // let pages = prompt('')
    // let read = prompt('')

    // myLibrary.push(new Book(title, author, pages, read))
    myLibrary.push(book1)
    myLibrary.push(book2)
    myLibrary.push(book3)
    let book = (new Book('ell', 'author', 'pages', 'read'))
    myLibrary.push(book)
}





function openForm() {
    document.getElementById("formContainer").style.display = "block";
    
  }

document.getElementById('add').addEventListener('click', openForm)
  
  function closeForm() {
    document.getElementById("formContainer").style.display = "none";
  }

  const submit = document.getElementById('submit')
submit.addEventListener('click', addBookToLibrary)