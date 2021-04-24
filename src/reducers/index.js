import {combineReducers} from 'redux';
import books from './bookReducers';
import products from './productReducers';
import imageP from './imageReducers';


export default combineReducers ({
    /*  booksData : books,
     productData : products, */
    imageData : imageP
   
}


);




