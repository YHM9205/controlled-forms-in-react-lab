import { useState } from 'react'

function Bookshelf() {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])
    const [newBook, setNewBook] = useState({ title: '', author: '' })

    function handleInputChange(event) {
        console.log('Event:', event)
        const { name, value } = event.target
        console.log('Input changed:', name, value)
        setNewBook({ ...newBook, [name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({ title: '', author: '' })
    }

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={newBook.title}
                        onChange={handleInputChange}
                        
                    />

                    <label htmlFor="author">Author</label>
                    <input
                        id="author"
                        name="author"
                        type="text"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />

                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => {
                    console.log('Book card:', book)
                    return (
                        <div className="bookCard" key={`${book.title}-${book.author}-${index}`}>
                            <h4>{book.title}</h4>
                            <p>{book.author}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Bookshelf