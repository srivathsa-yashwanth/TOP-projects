let books = [];

function Book(title, author, genre, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages
    
}

function addBook(book){

    books.push(book);
    book.id = books.length;

    let screen = document.querySelector("#screen");
    let newElement = document.createElement('div')
    newElement.classList.add("card")
    newElement.setAttribute("data-id",book.id.toString())
    let new_t = document.createElement('div')
    new_t.textContent = book.title
    new_t.classList.add('book-title')
    let new_a = document.createElement('div')
    new_a.textContent = book.author
    new_a.classList.add('book-author')
    
    let new_p = document.createElement('div')
    new_p.textContent = book.pages
    new_p.classList.add('book-pages')


    let removeButton = document.createElement('button')
    removeButton.textContent = 'X';
    removeButton.onclick = removeBook;
    removeButton.classList.add('remove')

    let readButton = document.createElement('button');
    readButton.textContent = 'Unread'
    readButton.onclick = readStatus;
    readButton.classList.add('readButton');

    newElement.appendChild(new_t)
    newElement.appendChild(new_a)
    newElement.appendChild(new_p)

    newElement.appendChild(removeButton)
    newElement.appendChild(readButton)


    screen.appendChild(newElement)
    
}

function readStatus(event){
    element = event.target;
    current = element.textContent;
    if (current == 'Read')
    {
        element.textContent = 'Unread'
        element.style.cssText = "background-color: red; color:white"
    }
    else
    {
        element.textContent = 'Read';
        element.style.cssText = "background-color: lightgreen; color:black";
    }
}

function receiveBook(event)
{

    event.preventDefault()

    let b_title = document.querySelector('#b-title')
    let b_author = document.querySelector('#b-author')
    let b_pages = document.querySelector('#b-pages')

    

    let newBook = Object.create(Book)
    newBook.title = b_title.value;
    newBook.author = b_author.value;
    newBook.pages = b_pages.value;

    b_title.value= '';
    b_author.value = '';
    b_pages.value = '';

    addBook(newBook)
    return false

}

function removeBook(event){
    let index = event.target.parentElement.getAttribute['data-id'];
    books = books.splice(index,1);
    event.target.parentElement.remove()

}

function showForm() {
    const addForm = document.querySelector('#add-form');
    addForm.style.display = "block";
}

function closeForm(){
    const localvar = document.querySelector('#add-form');
    localvar.style.display = 'none'
}

let addButton = document.querySelector("#add-book");
addButton.addEventListener('click',showForm)

let closeButton = document.querySelector('#book-close');
closeButton.addEventListener('click', closeForm);

let submitButton = document.querySelector('#book-submit');
submitButton.addEventListener('click', receiveBook);



let ring = Object.create(Book)
ring.title = 'The Lord of the Rings'
ring.author= 'J.R.R Tolkien'
ring.pages = '800 pages'

let grey = Object.create(Book)
grey.title = "Harry Potter"
grey.author = "J.K. Rowling"
grey.pages = '69 pages'

let five = Object.create(Book)
five.title = "The Famous Five"
five.author = 'Enid Blyton'
five.pages = '300 pages'

addBook(ring)
addBook(grey)
addBook(five)

