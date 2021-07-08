class Book {
  constructor(title, author, page) {
    this.title = title;
    this.author = author;
    this.page = page;
  }

  read() {
    return `Estou lendo ${this.title}`;
  }
}

let book = new Book("Algoritmos para viver", "Brian", 500);
let otherBook = new Book("Um Exu em Nova York", "Cidinha da Silva", 100);

console.log(book.read());
console.log(book, otherBook);

//HERANÇA DE CLASSES
class ITBook extends Book {
  constructor(title, author, page, technology) {
    super(title, author, page);
    this.technology = technology;
  }
}

let itBook = new ITBook("Algoritmos para viver", "Brian", 500, "Algoritmos");
console.log(itBook.technology);

class Person {
  //Iniciar o nome de classes com caixa alta
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}

let person = new Person("Rachid");
person.name = "Lucas";
console.log(person.name);
