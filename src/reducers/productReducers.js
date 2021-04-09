import {
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_LOADING,
    ADD_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    DELETE_PRODUCT_LOADING,
    DELETE_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR ,
    EDIT_PRODUCT_LOADING,
    EDIT_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_LOADING,
    FETCH_PRODUCT_SUCCESS
} from '../actions/types';


const defaultStatus ={
    products:[],
    error:null,
    isLoading:false,
};

const productReducer = (state = defaultStatus , action) => {
switch(action.type) 
{
    case FETCH_PRODUCT_SUCCESS:
        console.log(action.payload);
        return{...state,products:action.payload};
   case FETCH_PRODUCT_LOADING:
         return{...state,isLoading :action.payload};
   case FETCH_PRODUCT_ERROR:
        return{...state,error :action.payload};
   case ADD_PRODUCT_SUCCESS:
       return {...state, products:[...state.products,action.payload]};
   case ADD_PRODUCT_ERROR:
        return {...state,error :action.payload};
   case EDIT_PRODUCT_SUCCESS:
            const updatedProduct = state.products.filter(product => product.id !== action.payload)
            return {...state, products:[...updatedProduct]};
   case EDIT_PRODUCT_ERROR:
             return {...state,error :action.payload};
   case DELETE_PRODUCT_SUCCESS:
                const deleteProduct = state.products.filter(product => product.id !== action.payload)
                return {...state, products:[...deleteProduct,action.payload]};
 default:
     console.log(state);
      return state;
}
}

export default productReducer;