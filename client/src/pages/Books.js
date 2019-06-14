import React, { Component } from "react";
import ViewBtn from "../components/ViewBtn";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import savedAPI from "../utils/savedAPI";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "./style.css";


class Books extends Component {
  state = {
    books: [],
    title: "",
  };

  componentDidMount() {
    if (this.props.match.params.searchkeyword) {
      API.getGoogleBooks(this.props.match.params.searchkeyword)
      .then(res => {
        console.log("response in getgooglebooks: ",res.data.items);
        console.log("response length: ", res.data.items.length);
        for (var i=0; i < res.data.items.length; i++) {
          var id = res.data.items[i].id;
          console.log("id: ",id);
          var title = res.data.items[i].volumeInfo.title;
          if (res.data.items[i].volumeInfo.authors)
          var authors = res.data.items[i].volumeInfo.authors;
          else
          var authors = [];
          var description = res.data.items[i].volumeInfo.description;
          var image = res.data.items[i].volumeInfo.imageLinks.smallThumbnail;
          var link = res.data.items[i].volumeInfo.canonicalVolumeLink;
          var newBook = {
            id: id, 
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link,
            searchkeyword: this.props.match.params.searchkeyword 
          };
          this.state.books.push(newBook);
          this.setState({books: this.state.books});
          //console.log("API.saveBook called");
          //API.saveBook(newBook)
          //.then(res2 => console.log("API.saveBook called"))
          //.catch(err => console.log("error 122: ",err));
        }
        //console.log("res in getgooglebooks: ",res.data.items);
        this.setState({ title: ""})
        console.log("books in getgooglebooks: ", this.state.books);
        //this.loadBooks();
      })
      .catch(err => console.log(err));
    }
    else {
      this.loadBooks();
    }
  }

  viewBook = (id) => {
    API.viewBook(id)
      .then(res => {
        console.log("res in viewBook: ", res.data);
        this.setState({ books: res.data, title: ""});
        //route to new route
        //console.log("books in load books: ", this.state.books);
      })
      .catch(err => console.log(err));
  };

  saveBook = (book) => {
    savedAPI.saveBook(book)
    .then(res => {console.log("book saved!")})
    .catch(err => console.log(err));
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
    //this.loadBooks();
    event.preventDefault();
    console.log(this.state.title);
    if (this.state.title) {
      //this.props.history.push("/books/"+this.state.title);
      this.setState({books: []});
      //window.location.reload("/books/"+this.state.title);
      API.getGoogleBooks(this.state.title)
      .then(res => {
        console.log("response in getgooglebooks: ",res.data.items);
        console.log("response length: ", res.data.items.length);
        if (res.data.items.length !== 0)
          this.props.history.push("/books/"+this.state.title); 
        for (var i=0; i < res.data.items.length; i++) {
          var id = res.data.items[i].id;
          //console.log("id: ",id);
          var title = res.data.items[i].volumeInfo.title;
          if (res.data.items[i].volumeInfo.authors)
          var authors = res.data.items[i].volumeInfo.authors;
          else
          var authors = [];
          var description = res.data.items[i].volumeInfo.description;
          if (res.data.items[i].volumeInfo.imageLinks.smallThumbnail)
          var image = res.data.items[i].volumeInfo.imageLinks.smallThumbnail;
          else 
          var image = "";
          var link = res.data.items[i].volumeInfo.canonicalVolumeLink;
          var newBook = {
            id: id, 
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link,
            searchkeyword: this.state.title
          };
          this.state.books.push(newBook);
          this.setState({books: this.state.books});
          //console.log("API.saveBook called");
          //API.saveBook(newBook)
          //.then(res2 => console.log("API.saveBook called"))
          //.catch(err => console.log("error 122: ",err));
        }
        //console.log("res in getgooglebooks: ",res.data.items);
        this.setState({ title: ""})
        console.log("books in getgooglebooks: ", this.state.books);
        //this.loadBooks();
      })
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h3>Search for and Save Books of Interest</h3>
        </Jumbotron>
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
            {this.state.books.length ? (
              <div>
                <p><strong>Results</strong></p>
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    {/* <Link to={"/books/" + book._id}> */}
                      <div>
                      <strong>{book.title}                      </strong>
                      </div>
                    {/* </Link> */}
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
                      <div><a className="right3" href={book.link}>{book.link}</a></div>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                    <button className="right2"><Link style={{ color: '#000000' }} to={"/books/" + book.searchkeyword + "/" + book.id}>View</Link></button>
                    <SaveBtn className="right2" onClick={() => this.saveBook({title: book.title, authors: book.authors, description: book.description, image: book.image, link: book.link})}></SaveBtn>
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
