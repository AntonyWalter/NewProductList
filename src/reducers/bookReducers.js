import {
    ADD_BOOK_ERROR,
    ADD_BOOK_LOADING,
    ADD_BOOK_SUCCESS,
    DELETE_BOOK_ERROR,
    DELETE_BOOK_LOADING,
    DELETE_BOOK_SUCCESS,
    EDIT_BOOK_ERROR ,
    EDIT_BOOK_LOADING,
    EDIT_BOOK_SUCCESS,
    FETCH_BOOKS_ERROR,
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_SUCCESS
} from '../actions/types';


const defaultStatus ={
    books:[],
    error:null,
    isLoading:false,
};

const bookReducer = (state = defaultStatus , action) => {
switch(action.type) 
{
    case FETCH_BOOKS_SUCCESS:
        console.log(action.payload);
        return{...state,books:action.payload};
 default:
     console.log("step4ggggggggggggg");
     console.log(state);
      return state;
}
}

export default bookReducer;