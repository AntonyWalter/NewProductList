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
} from './types'

import {products} from '../productData';
import {history} from '../index';



 export const fetchProductSuccess=(data) =>
{
    console.log("step2000000");
    return{
        type: FETCH_PRODUCT_SUCCESS,
        payload: data,
    }
}

export const fetchProductsLoading=(data) =>
{
    return{
        type: FETCH_PRODUCT_LOADING,
        payload: data,
    }
}
 
export const fetchProductsError=(data) =>
{
    return{
        type: FETCH_PRODUCT_ERROR,
        payload: data,
    }
}

export const createProductSuccess=(data)=>
{
    return{
        type: ADD_PRODUCT_SUCCESS,
        payload: data,
    }
}

export const createProductError = (data) =>
{
  return {
      type:ADD_PRODUCT_ERROR,
      payload: data,
  }

}

export const deleteProductError = (id) =>
{
    return {
        type: DELETE_PRODUCT_ERROR,
        payload : id,
    }
}

export const deleteProductSuccess = (data) =>
{
    return {
        type: DELETE_PRODUCT_SUCCESS,
        payload :data,
    }
}

export const deleteProduct = (id) => {
    return (dispatch) => {
        const data ={
            productId: id
                }
          const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
           };
          
          return(dispatch) =>
          {
            fetch("http://localhost:3000/deleteProduct" + id,requestOptions )
            
            .then(response => response.json())
          
            .then(result =>        
             {  
                console.log(result);
                dispatch(deleteProductSuccess(result));
                history.push('/');
             }
             )
            .catch(error => {
                const errorPayLoad ={}
                errorPayLoad['message'] = error.response.data.message;
                errorPayLoad['status'] = error.response.status;
                dispatch(deleteProductError(errorPayLoad));
           });
          }
    }
    }



export const editProductSuccess=(data)=>
{
    return{
        type: EDIT_PRODUCT_SUCCESS,
        payload: data,
    }
}

export const editProductError = (data) =>
{
  return {
      type:EDIT_PRODUCT_ERROR,
      payload: data,
  }

}

export const editProduct = (data) =>
{
  
    return(dispatch) =>
    {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
           };
          
          return(dispatch) =>
          {
            fetch("http://localhost:3000/saveProduct",requestOptions )
            
            .then(response => response.json())
          
            .then(result =>        
             {  
                console.log(result);
                dispatch(editProductSuccess(result));
                history.push('/');
             }
             )
            .catch(error => {
                const errorPayLoad ={}
                errorPayLoad['message'] = error.response.data.message;
                errorPayLoad['status'] = error.response.status;
                dispatch(editProductError(errorPayLoad));
           });
          }
    }
}
 
export const fetchProducts =() => {
   let isLoading =true;
    return (dispatch)=>{
        dispatch(fetchProductsLoading(isLoading));
       
         fetch("http://localhost:3000/products" )
         //.then(response => response.json())
         
         .then(response =>  response.json())
         
         .then(result=>{
            console.log(result);
            isLoading =false;
            dispatch(fetchProductSuccess(result))
            dispatch(fetchProductsLoading(isLoading))
         })
         .catch(error => {
             const errorPayLoad ={}
            // errorPayLoad['message'] = error.response.data.message;
           //  errorPayLoad['status'] = error.response.status;
            dispatch(fetchProductsError(errorPayLoad));
          isLoading =false;
          dispatch(fetchProductsLoading(isLoading))
        });
       
     
    // dispatch(fetchProductSuccess(products))
};
}



export const fetchProductById =(id) => {
    let isLoading =true;
     return (dispatch)=>{
         dispatch(fetchProductsLoading(isLoading));
        
          fetch("http://localhost:3000/products/" +id )
          //.then(response => response.json())
          
          .then(response =>  response.json())
          
          .then(result=>{
             console.log(result);
             isLoading =false;
             dispatch(fetchProductSuccess(result))
             dispatch(fetchProductsLoading(isLoading))
          })
          .catch(error => {
              const errorPayLoad ={}
             // errorPayLoad['message'] = error.response.data.message;
            //  errorPayLoad['status'] = error.response.status;
             dispatch(fetchProductsError(errorPayLoad));
           isLoading =false;
           dispatch(fetchProductsLoading(isLoading))
         });
        
      
     // dispatch(fetchProductSuccess(products))
 };
 }

export const createProduct =(product) =>
{
    if (product.productId !== null && product.productId != 0)
    {
        const data={
            productId: product.productId,
            productName: product.productName,
            category : product.category,
            price: product.price,
            supplierName : product.supplierName,
            productStatus : product.productStatus,
            dateLastUpdated : product.dateLastUpdated,
        
        };

        return (dispatch) =>
        {
            dispatch(editProduct(data));

        }
    }
    else
    {
       
  const data={
    productId:0,
    productName: product.productName,
    category : product.category,
    price: product.price,
    supplierName : product.supplierName,
    productStatus : product.productStatus,
    dateLastUpdated : product.dateLastUpdated,

};

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ data })
 };

return(dispatch) =>
{
  fetch("http://localhost:3000/saveProduct",requestOptions )
  
  .then(response => response.json())

  .then(result =>        
   {  
      console.log(result);
      dispatch(createProductSuccess(result));
      history.push('/');
   }
   )
  .catch(error => {

    var result;
	
	if (error.response) {
		if (error.response.data.error)
			result = error.response.data.error + "!";
		else if (error.response.data.errors)
			result = error.response.data.errors.map(error => error.title).join(', ');
		else
			result = "Internal error!";
	} else {
		result = "Network error!";
	}
    console.log(result);
     // const errorPayLoad ={}
     // errorPayLoad['message'] = error.response.data.message;
     // errorPayLoad['status'] = error.response.status;
     // dispatch(createProductError(errorPayLoad));
 });
}
    }


}