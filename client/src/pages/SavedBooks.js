import React, { Component } from "react";
import ViewBtn from "../components/ViewBtn";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import savedAPI from "../utils/savedAPI";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./style.css";

class SavedBooks extends Component {
  
  state = {
    books: [],
    title: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    savedAPI.getBooks()
      .then(res => {
        console.log("res in savedAPI load books: ", res.data);
        this.setState({ books: res.data, title: ""})
        //console.log("books in load books: ", this.state.books);
      })
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    savedAPI.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // viewBook = (id) => {
  //   savedAPI.viewBook(id)
  //     .then(res => {
  //       console.log("res in viewBook: ", res.data);
  //       this.setState({ books: res.data, title: ""});
  //       //route to new route
  //       //console.log("books in load books: ", this.state.books);
  //     })
  //     .catch(err => console.log(err));
  // }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title) {
  //     savedAPI.getGoogleBooks(this.state.title)
  //     .then(res => {
  //       console.log("response in getgooglebooks: ",res.data.items);
  //       console.log("response length: ", res.data.items.length);
  //       for (var i=0; i < res.data.items.length; i++) {
  //         var title = res.data.items[i].volumeInfo.title;
  //         var authors = res.data.items[i].volumeInfo.authors;
  //         var description = res.data.items[i].volumeInfo.description;
  //         var image = res.data.items[i].volumeInfo.imageLinks.smallThumbnail;
  //         var link = res.data.items[i].volumeInfo.canonicalVolumeLink;
  //         var newBook = {
  //           title: title,
  //           authors: authors,
  //           description: description,
  //           image: image,
  //           link: link
  //         };
  //         //this.state.books.push(newBook);
  //         //this.setState({books: this.state.books});
  //         console.log("API.saveBook called");
  //         API.saveBook({
  //           newBook
  //         })
  //         //.then(res2 => console.log("API.saveBook called"))
  //         .catch(err => console.log("error 122: ",err));
  //       }
  //       //console.log("res in getgooglebooks: ",res.data.items);
  //       this.setState({ title: ""})
  //       console.log("books in getgooglebooks: ", this.state.books);
  //       this.loadBooks();
  //     })
  //     .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <div>
                <p>Results</p>
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                      <div>
                      <strong>{book.title}                      </strong>
                      </div>
                    <br></br>
                    <div>
                      Written by: {book.authors}
                      <div>
                        <br></br>
                        <div className="image"><img alt={book.title} src={book.image}></img></div>
                        <div className="right">{book.description}</div>
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <a href={book.link}>{book.link}</a>
                    </div>
                    <div>
                      <button className="right2"><Link to={"/saved/" + book.title}>View</Link></button>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      {/* <ViewBtn onClick={() => this.viewBook(book._id)} />
                      <SaveBtn onClick={() => this.saveBook(book._id)} /> */}
                    </div>
                  </ListItem>
                ))}
              </List>
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>
    );
  }
}

export default SavedBooks;
