function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() { };

UI.prototype.addBookToList = function (book) {
    let bookAdd = document.querySelector(".book__list");
    let tr = document.createElement("tr");

    tr.innerHTML = `

<th>${book.title}</th>
<th>${book.author}</th>
<th>${book.isbn}</th>
<th></th><a href="#">X</a></td>

`
    bookAdd.appendChild(tr);
    // tr.addEventListener("click", function () {
    //     this.remove();
    // })
};

UI.prototype.clear = function () {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (title.value.length > 0 && author.value.length > 0 && isbn.value.length > 0) {
        const title = document.getElementById("title").value,
            author = document.getElementById("author").value,
            isbn = document.getElementById("isbn").value;
        const addBook = new Book(title, author, isbn);

        const ui = new UI();
        ui.addBookToList(addBook);
        ui.clear();
    } else {
        alert("!!!!!!!!!!!!!!")
    }
})
