"use strict";

class Book {
  constructor(id, title, author, genre, publishDate, price, description) {
    this.id = id,
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.publishDate = publishDate,
    this.price = price,
    this.description = description
  }
}

module.exports = Book;