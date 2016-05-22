import { BOOK_SELECTED } from './action_types';

export function selectBook(book) {
    //ActionCreator that returns an action. Action must have a type.
    return {
        type: BOOK_SELECTED,
        payload: book
    };
}