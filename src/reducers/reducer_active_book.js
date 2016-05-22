import { BOOK_SELECTED } from '../actions/action_types';
//State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case BOOK_SELECTED: //Return has to always be clean, don't mutate.
            return action.payload;
    }

    return state;
}