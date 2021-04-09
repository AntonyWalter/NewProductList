import {combineReducers} from 'redux';
import books from './bookReducers';
import products from './productReducers';


export default combineReducers ({
    booksData : books,
    productData : products,
});


