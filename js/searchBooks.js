import { booksElement } from "./elements.js"
import { loadBooks } from "./loadBooks.js"


export function searchBooks(input= document.createElement("input"),data = [{title}],element = HTMLElement) {
  input.onkeyup = ()=>{
    console.log("searching")
    let filtredBooks = data.filter(({title})=>title.toLowerCase().includes(input.value.toLowerCase()))
    console.log({filtredBooks})
    loadBooks(booksElement,filtredBooks)
  }
}
