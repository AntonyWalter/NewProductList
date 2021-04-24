import {
    NEXT_PRODUCT_LOADING,
    NEXT_PRODUCT_SUCCESS,
    PREV_PRODUCT_SUCCESS
} from '../actions/types';



const defaultStatus ={
    imageP:[],
    isLoading:false,
    currentImgId:1,
};



const imageReducers = (state = defaultStatus , action) => {
    switch(action.type) 
    {
        case NEXT_PRODUCT_LOADING:
            console.log('action.imageData');
             console.log(action);
            return{...state,imageP:action.imageP,isLoading :action.isLoading,currentImgId:action.currentImgId};
       case NEXT_PRODUCT_SUCCESS:
        console.log('NEXT_PRODUCT_SUCCESS');
        console.log(action);
        return{...state,imageP:action.imageP,currentImgId:action.currentImgId
        };
       case PREV_PRODUCT_SUCCESS:
            return{...state,imageP :action.imageP,currentImgId:action.currentImgId};
      
     default:
        
          return state;
    }
    }
    
    export default imageReducers;