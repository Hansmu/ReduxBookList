import React, { Component } from 'react';
import { connect } from 'react-redux'; //To connect redux and react.

//A container because it cares about when the list of book changes.
//Only the parent is a component.
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className=""list-group-item> {book.title} </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">

            </ul>
        );
    }
}