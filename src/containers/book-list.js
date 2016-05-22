import React, { Component } from 'react';
import { connect } from 'react-redux'; //To connect redux and react.

//A container because it cares about when the list of book changes.
//Only the parent is a component.
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item"> {book.title} </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }
}
//If our state changes, then the container will instantly re-render with a new list of books.
function mapStateToProps(state) {
    //Whatever gets returned from here will show up as props.
    //Generally return an object from here.
    return {
        //Use this.props.books to access this value.
        books: state.books
    }
}

export default connect(mapStateToProps) (BookList);//Produces a container.