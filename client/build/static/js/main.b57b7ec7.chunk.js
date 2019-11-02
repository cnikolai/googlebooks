(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},25:function(e,t,a){e.exports=a(57)},31:function(e,t,a){},32:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(22),r=a.n(l),s=a(60),i=a(61),c=a(62),m=a(23),u=a(6),d=a(7),h=a(9),g=a(8),k=a(10);a(31);a(32);var v=function(e){return o.a.createElement("button",Object.assign({className:"save-btn"},e),"Save")};var f=function(e){var t=e.children;return o.a.createElement("div",{style:{height:350,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},b=a(4),E=a.n(b),p={getBooks:function(){return E.a.get("/api/books")},viewBook:function(e){return E.a.get("/api/books/"+e)},deleteBook:function(e){return E.a.delete("/api/books/"+e)},saveBook:function(e){return E.a.post("/api/books",e)},getGoogleBooks:function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&maxResults=25")}},y={getBooks:function(){return E.a.get("/api/saved")},viewBook:function(e){return E.a.get("/api/saved/"+e)},deleteBook:function(e){return E.a.delete("/api/saved/"+e)},saveBook:function(e){return E.a.post("/api/saved/",e)},getGoogleBooks:function(e){return E.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)}},B=a(59);a(51);function w(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function j(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}function N(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Book Search"),o.a.createElement("input",Object.assign({className:"form-control"},e)))}function I(e){return o.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}a(21);var O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:""},a.viewBook=function(e){p.viewBook(e).then(function(e){console.log("res in viewBook: ",e.data),a.setState({books:e.data,title:""})}).catch(function(e){return console.log(e)})},a.saveBook=function(e){y.saveBook(e).then(function(e){console.log("book saved!")}).catch(function(e){return console.log(e)})},a.loadBooks=function(){p.getBooks().then(function(e){a.setState({books:e.data,title:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){p.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(m.a)({},n,o))},a.handleFormSubmit=function(e){e.preventDefault(),console.log(a.state.title),a.state.title&&(a.setState({books:[]}),p.getGoogleBooks(a.state.title).then(function(e){console.log("response in getgooglebooks: ",e.data.items),console.log("response length: ",e.data.items.length),0!==e.data.items.length&&a.props.history.push("/books/"+a.state.title);for(var t=0;t<e.data.items.length;t++){var n=e.data.items[t].id,o=e.data.items[t].volumeInfo.title;if(e.data.items[t].volumeInfo.authors)var l=e.data.items[t].volumeInfo.authors;else l=[];var r=e.data.items[t].volumeInfo.description;if(e.data.items[t].volumeInfo.imageLinks.smallThumbnail)var s=e.data.items[t].volumeInfo.imageLinks.smallThumbnail;else s="";var i={id:n,title:o,authors:l,description:r,image:s,link:e.data.items[t].volumeInfo.canonicalVolumeLink,searchkeyword:a.state.title};a.state.books.push(i),a.setState({books:a.state.books})}a.setState({title:""}),console.log("books in getgooglebooks: ",a.state.books)}).catch(function(e){return console.log(e)}))},a}return Object(k.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.searchkeyword?p.getGoogleBooks(this.props.match.params.searchkeyword).then(function(t){console.log("response in getgooglebooks: ",t.data.items),console.log("response length: ",t.data.items.length);for(var a=0;a<t.data.items.length;a++){var n=t.data.items[a].id;console.log("id: ",n);var o=t.data.items[a].volumeInfo.title;if(t.data.items[a].volumeInfo.authors)var l=t.data.items[a].volumeInfo.authors;else l=[];var r={id:n,title:o,authors:l,description:t.data.items[a].volumeInfo.description,image:t.data.items[a].volumeInfo.imageLinks.smallThumbnail,link:t.data.items[a].volumeInfo.canonicalVolumeLink,searchkeyword:e.props.match.params.searchkeyword};e.state.books.push(r),e.setState({books:e.state.books})}e.setState({title:""}),console.log("books in getgooglebooks: ",e.state.books)}).catch(function(e){return console.log(e)}):this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(f,null,o.a.createElement("h1",null,"(React) Google Books Search"),o.a.createElement("h3",null,"Search for and Save Books of Interest")),o.a.createElement("form",null,o.a.createElement(N,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Search Term (required)"}),o.a.createElement(I,{disabled:!this.state.title,onClick:this.handleFormSubmit},"Search for Book(s)")),this.state.books.length?o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("strong",null,"Results")),o.a.createElement(w,null,this.state.books.map(function(t){return o.a.createElement(j,{key:t.id},o.a.createElement("div",null,o.a.createElement("strong",null,t.title,"                      ")),o.a.createElement("br",null),o.a.createElement("div",null,"Written by: ",t.authors.join(", "),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("div",{className:"image"},o.a.createElement("img",{alt:t.title,src:t.image})),o.a.createElement("div",{className:"right"},t.description))),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("a",{className:"right3",href:t.link},t.link)),o.a.createElement("button",{className:"right2"},o.a.createElement(B.a,{style:{color:"#000000"},to:"/books/"+t.searchkeyword+"/"+t.id},"View")),o.a.createElement(v,{className:"right2",onClick:function(){return e.saveBook({title:t.title,authors:t.authors,description:t.description,image:t.image,link:t.link})}}))}))):o.a.createElement("h3",null,"No Results to Display"))}}]),t}(n.Component);a(54);var S=function(e){return o.a.createElement("button",Object.assign({className:"delete-btn"},e),"Delete")},x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:""},a.loadBooks=function(){y.getBooks().then(function(e){console.log("res in savedAPI load books: ",e.data),a.setState({books:e.data,title:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){y.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(k.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(f,null,o.a.createElement("h1",null,"Books On My List")),this.state.books.length?o.a.createElement("div",null,o.a.createElement(w,null,this.state.books.map(function(t){return o.a.createElement(j,{key:t._id},o.a.createElement("div",null,o.a.createElement("strong",null,t.title,"                      ")),o.a.createElement("br",null),o.a.createElement("div",null,"Written by: ",t.authors,o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("div",{className:"image"},o.a.createElement("img",{alt:t.title,src:t.image})),o.a.createElement("div",{className:"right"},t.description))),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("a",{href:t.link},t.link)),o.a.createElement("div",null,o.a.createElement("button",{className:"right2"},o.a.createElement(B.a,{to:"/saved/"+t.title,style:{color:"#000"}},"View")),o.a.createElement(S,{onClick:function(){return e.deleteBook(t._id)}})))}))):o.a.createElement("h3",null,"No Results to Display"))}}]),t}(n.Component);function C(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function D(e){var t=e.fluid,a=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function L(e){var t=e.size,a=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var z=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={book:{}},a}return Object(k.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.getGoogleBooks(this.props.match.params.id).then(function(t){console.log("response in getgooglebooks: ",t.data.items),console.log("response length: ",t.data.items.length);for(var a=0;a<1;a++){var n=t.data.items[a].id;console.log("id: ",n);var o=t.data.items[a].volumeInfo.title,l=t.data.items[a].volumeInfo.authors.join(", ");console.log("authors: ",l);var r={id:n,title:o,authors:l,description:t.data.items[a].volumeInfo.description,image:t.data.items[a].volumeInfo.imageLinks.smallThumbnail,link:t.data.items[a].volumeInfo.canonicalVolumeLink,searchkeyword:e.props.match.params.searchkeyword};e.setState({book:r})}console.log("book in getgooglebooks: ",e.state.book)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(C,{fluid:!0},o.a.createElement(D,null,o.a.createElement(L,{size:"md-12"},o.a.createElement(f,null,o.a.createElement("div",{className:"image"},o.a.createElement("img",{alt:this.state.book.title,src:this.state.book.image})),o.a.createElement("h1",null,this.state.book.title),"by",o.a.createElement("h2",null,this.state.book.authors)))),o.a.createElement(D,null,o.a.createElement(L,{size:"md-10 md-offset-1"},o.a.createElement("article",null,o.a.createElement("h1",null,"Description"),o.a.createElement("p",null,this.state.book.description),o.a.createElement("div",null,o.a.createElement("a",{className:"right3",href:this.state.book.link},this.state.book.link))))),o.a.createElement(D,null,o.a.createElement(L,{size:"md-6"},o.a.createElement("br",null),o.a.createElement(B.a,{to:"/books/"+this.state.book.searchkeyword},"\u2190 Back to Homepage"))))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={book:{}},a}return Object(k.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.getGoogleBooks(this.props.match.params.id).then(function(t){console.log("response in getgooglebooks: ",t.data.items),console.log("response length: ",t.data.items.length);for(var a=0;a<1;a++){var n=t.data.items[a].id;console.log("id: ",n);var o=t.data.items[a].volumeInfo.title,l=t.data.items[a].volumeInfo.authors.join(", ");console.log("authors: ",l);var r={id:n,title:o,authors:l,description:t.data.items[a].volumeInfo.description,image:t.data.items[a].volumeInfo.imageLinks.smallThumbnail,link:t.data.items[a].volumeInfo.canonicalVolumeLink};e.setState({book:r})}console.log("book in getgooglebooks: ",e.state.book)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(C,{fluid:!0},o.a.createElement(D,null,o.a.createElement(L,{size:"md-12"},o.a.createElement(f,null,o.a.createElement("div",{className:"image"},o.a.createElement("img",{alt:this.state.book.title,src:this.state.book.image})),o.a.createElement("h1",null,this.state.book.title),"by",o.a.createElement("h2",null,this.state.book.authors)))),o.a.createElement(D,null,o.a.createElement(L,{size:"md-10 md-offset-1"},o.a.createElement("article",null,o.a.createElement("h1",null,"Description"),o.a.createElement("p",null,this.state.book.description),o.a.createElement("div",null,o.a.createElement("a",{className:"right3",href:this.state.book.link},this.state.book.link))))),o.a.createElement(D,null,o.a.createElement(L,{size:"md-6"},o.a.createElement("br",null),o.a.createElement(B.a,{to:"/saved"},"\u2190 Back to Saved Books"))))}}]),t}(n.Component);var T=function(){return o.a.createElement(C,{fluid:!0},o.a.createElement(D,null,o.a.createElement(L,{size:"md-12"},o.a.createElement(f,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};a(55);var A=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),o.a.createElement("a",{className:"navbar-brand smallfont",href:"/"},"Search"),o.a.createElement("a",{className:"navbar-brand smallfont",href:"/saved/"},"Saved"))};var R=function(){return o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(A,null),o.a.createElement(i.a,null,o.a.createElement(c.a,{exact:!0,path:"/",component:O}),o.a.createElement(c.a,{exact:!0,path:"/books/:searchkeyword",component:O}),o.a.createElement(c.a,{exact:!0,path:"/books",component:O}),o.a.createElement(c.a,{exact:!0,path:"/books/:searchkeyword/:id",component:z}),o.a.createElement(c.a,{exact:!0,path:"/saved",component:x}),o.a.createElement(c.a,{exact:!0,path:"/saved/:id",component:G}),o.a.createElement(c.a,{component:T}))))};r.a.render(o.a.createElement(R,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b57b7ec7.chunk.js.map