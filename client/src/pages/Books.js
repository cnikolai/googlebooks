import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./style.css";


class Books extends Component {
  state = {
    books: [],
    title: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        //console.log("res in load books: ",res.data);
        this.setState({ books: res.data, title: ""})
        //console.log("books in load books: ", this.state.books);
      })
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.getGoogleBooks(this.state.title)
      .then(res => {
        console.log("response in getgooglebooks: ",res.data.items);
        console.log("response length: ", res.data.items.length);
        for (var i=0; i < res.data.items.length; i++) {
          var title = res.data.items[i].volumeInfo.title;
          //console.log("title: ", title);
          var authors = res.data.items[i].volumeInfo.authors;
          //console.log("authors: ", authors);
          var description = res.data.items[i].volumeInfo.description;
          //console.log("description: ", description);
          var image = res.data.items[i].volumeInfo.imageLinks.smallThumbnail;
          //console.log("image: ",image);
          var link = res.data.items[i].volumeInfo.canonicalVolumeLink;
          //console.log("link: ",link);
          API.saveBook({
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
          })
          //.then(res2 => this.loadBooks())
          //.catch(err => console.log(err));
        }
        //console.log("res in getgooglebooks: ",res.data.items);
        this.setState({ books: res.data.items, title: ""})
        //console.log("books in getgooglebooks: ", this.state.books);
        this.loadBooks();
      })
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Search Term (required)"
              />
              <FormBtn
                disabled={!this.state.title}
                onClick={this.handleFormSubmit}
              >
                Search for Book(s)
              </FormBtn>
            </form>
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <div>
                <p>Results</p>
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <div>
                      <strong>{book.title}                      </strong>
                      </div>
                    </Link>
                    <br></br>
                    <div>
                      Written by: {book.authors.join(", ")}
                      <div>
                        <br></br>
                        <div className="image"><img alt={book.title} src={book.image}></img></div>
                        <div className="right">{book.description}</div>
                      </div>
                    </div>
                    <br></br>
                      <div><a className="right2" href={book.link}>{book.link}</a></div>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
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

export default Books;
