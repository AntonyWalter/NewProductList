import {
    NEXT_PRODUCT_LOADING,
    NEXT_PRODUCT_SUCCESS,
    PREV_PRODUCT_SUCCESS
} from './types.js'

import {images} from '../imageData';


export const loadingImageSuccess=(currentImgId) =>
{
  
    if(currentImgId < 0)
     {
        currentImgId = 0;
     }
     else
     {
         console.log("in action"); 
         console.log(currentImgId); 
         currentImgId = currentImgId+1;
     }
     return{
        type: NEXT_PRODUCT_SUCCESS,
         imageP:images[currentImgId]  ,
         currentImgId:currentImgId,
    }
}
 


export const loadingPrevImageSuccess=(currentImgId) =>
{
  
    if(currentImgId===0)
     {
        currentImgId = 1;
     }
     else
     {
        currentImgId = currentImgId-1;
     }
    return{
        type: PREV_PRODUCT_SUCCESS,
        imageP:images[currentImgId]  ,
        currentImgId:currentImgId,
    }
}

export const loadingImageLoading=(isLoading) =>
{
    return{
        type: NEXT_PRODUCT_LOADING,
        isLoading: isLoading,
      
    }
} 

export const displayImage = (imageId) => {
    let isLoading =true;
     return (dispatch)=>{
         
        
             dispatch(loadingImageSuccess(imageId))
            
         
         } 
                  
 }

export const displayNextImage = (imageId) => {
    let isLoading =true;
     return (dispatch)=>{
console.log("inside displayNextImage");
        dispatch(loadingImageSuccess(imageId))
        
 }
      
 }


 export const displayPrevImage = (imageId) => {
    let isLoading =true;
     return (dispatch)=>{
          
             dispatch(loadingPrevImageSuccess(imageId))
           
         
         }
      
 }
 
 
 
   