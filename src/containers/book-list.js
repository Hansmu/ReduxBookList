import React, { Component } from 'react';
import { connect } from 'react-redux'; //To connect redux and react.
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //To make sure an action flows through all of the reducers in our application.

//A container because it cares about when the list of book changes.
//Only the parent is a component.
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                    className="list-group-item"
                    onClick={ () => this.props.selectSingleBook(book) }>
                    {book.title}
                </li>
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
        books: state.listOfBooks //listOfBooks comes from combineReducers.
    }
}
//Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all
    //of our reducers
    //When we call this.props.selectedBook, then our action creator selectBook will be called.
    //The dispatch function will then send the action to the reducers.
    return bindActionCreators({ selectSingleBook: selectBook}, dispatch);
}
//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook
//Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps) (BookList);//Produces a container.