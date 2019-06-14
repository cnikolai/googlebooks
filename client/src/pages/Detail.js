import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    // API.viewBook(this.props.match.params.id)
    //   .then(res => {
    //     this.setState({ book: res.data });
    //     this.setState({ authors: res.data.authors.join(", ")});
    //     console.log("authors: ", res.data.authors.join(", "));
    //   })
    //   .catch(err => console.log(err));
    API.getGoogleBooks(this.props.match.params.id)
    .then(res => {
        console.log("response in getgooglebooks: ",res.data.items);
        console.log("response length: ", res.data.items.length);
        for (var i=0; i < 1; i++) {
          var id = res.data.items[i].id;
          console.log("id: ",id);
          var title = res.data.items[i].volumeInfo.title;
          var authors = res.data.items[i].volumeInfo.authors.join(", ");
          console.log("authors: ", authors);
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
          //this.state.book.push(newBook);
          this.setState({book: newBook});
          //console.log("API.saveBook called");
          //API.saveBook(newBook)
          //.then(res2 => console.log("API.saveBook called"))
          //.catch(err => console.log("error 122: ",err));
        }
        //console.log("res in getgooglebooks: ",res.data.items);
        console.log("book in getgooglebooks: ", this.state.book);
        //this.loadBooks();
      })
      .catch(err => console.log(err));
    }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <div className="image"><img alt={this.state.book.title} src={this.state.book.image}></img></div>
              <h1>
                {this.state.book.title} 
              </h1>
              by 
              <h2>{this.state.book.authors}
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {this.state.book.description}
              </p>
              <div><a className="right3" href={this.state.book.link}>{this.state.book.link}</a></div>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <br></br>
            <Link to={"/books/" + this.state.book.searchkeyword}>← Back to Homepage</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
