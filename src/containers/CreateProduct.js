import React,{Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import { createProduct ,fetchProductById} from '../actions/product.actions';
import './CreateProduct.css';


class CreateProduct extends Component
{

     constructor(props)
     {
         super(props);
this.state ={error:'',prop:''};
         this.state={
         productId:0,
         productName:'',
         category:'',supplierName:'',price:'',productStatus:'',dateLastUpdated:'',stock:'', productStatusValue : 2,
        
         errors: {
            productNameValid: '',
            supplierNameValid: '',
          
          }
        

        }


         this.handleChange = this.handleChange.bind(this);
     }

    
      handleChange(e) {
        console.log("status Selected!!");
        this.setState({productStatusValue:e.target.value});
      }
    

     handleSubmit(e)
     {
         e.preventDefault();
         let valid = true;
         console.log(this.prop.productName);
         if(this.state.productName == '')
          {
            console.info('Please enter Product Name')
            valid = false;
          }

          if(valid == true)
          {
            console.info('Valid Form')
            this.props.onAdd(this.state);
          }

        //if(validateForm(this.state.errors)) {
          //  console.info('Valid Form')
          //  this.props.onAdd(this.state);
        //  }else{
         //   console.error('Invalid Form')
        //  }
         

     }


      validateForm = (errors) => {

        
        let valid = true;
        Object.values(errors).forEach(
          // if we have an error string set valid to false
          (val) => val.length > 0 && (valid = false)
        );
        return valid;
      }

     handleOnValueChange(e)
     {
        e.preventDefault();
         this.setState({[e.target.name] : e.target.value,})
     }

     handleReset(e)
     {
         this.setState({productId:0,
            productName:'',
            category:'',supplierName:'',price:'',productStatus:'',dateLastUpdated:'',stock:''})
     }

     componentWillMount()
     {
         const props = this.props;

         if(props.location && props.location.state)
         {
             const product = props.location.state.product;

             this.setState({
                 productId :product.productId,
                 productName : product.productName,
                 category : product.category,
                 price : product.price,
                 productStatus : product.productStatus,
                 dateLastUpdated : product.dateLastUpdated,
                 supplierName: product.supplierName,
                
             })

             this.props.onFetchById(product.productId);
            
         }
     }

     
     render()
     {
         const options =[{value:1,label:'Low'},{value:2,label:'High'}]


         const ProductStatusCompt = () => (
            <div > Product Status :
          <select className="select"
     value={this.state.productStatusValue} onChange={this.handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
          )
    
         return(
             <div className="create-product">

       {this.props.error ?
                 <div className="alert alert-danger" role="alert" >
                      {this.prop.error.message}</div> : ''}
<form onSubmit= {this.handleSubmit.bind(this)}>
    <div className ="form-group">
        <input type="text" className="form-control"
        name ="productName" placeholder="Enter Product Name" value={this.state.productName}
        onChange={this.handleOnValueChange.bind(this)}></input>
    </div>
    <div className ="form-group">
        <input type="text" className="form-control" value={this.state.category}
        name ="category" placeholder="Enter category"  onChange={this.handleOnValueChange.bind(this)}></input>
    </div>
    <div className ="form-group">
        <input type="text" className="form-control" value={this.state.price}
        name ="price" placeholder="Enter Price"  onChange={this.handleOnValueChange.bind(this)}></input>
    </div>
    <div className ="form-group">
        <input type="text" className="form-control" value={this.state.stock}
        name ="stock" placeholder="Enter Stock"  onChange={this.handleOnValueChange.bind(this)}></input>
    </div>
    <div className ="form-group">
        <input type="text" className="form-control" value={this.state.supplierName}
        name ="supplierName" placeholder="Enter SupplierName"  onChange={this.handleOnValueChange.bind(this)}></input>
    </div>
    <div className ="form-group">
        {/* <input type="text" className="form-control" value={this.state.productStatus}
        name ="productStatus" placeholder="Enter Product Status"  onChange={this.handleOnValueChange.bind(this)}></input> */}

<ProductStatusCompt ></ProductStatusCompt>
You select "{this.state.productStatusValue}"
    </div>

    <div className ="form-group">
        <input type="text" className="form-control" value={this.state.dateLastUpdated}
        name ="dateLastUpdated" placeholder="Enter DateLast Updated"  onChange={this.handleOnValueChange.bind(this)}></input>
    </div>
    <div className ="form-group">
        <button type="submit" className="btn btn-primary">Add</button>
        <button type="button" className="btn btn-default" onClick={this.handleReset.bind(this)}>Cancel</button>
    </div>
   
</form>
             </div>
         )
     }

}

const mapStateToProps = (state) => {
    return {
        prop: state.productData.products || [],
       /*  error: state.productData.error, */
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (product) => {
            dispatch(createProduct(product));
        },

        onFetchById: (id) => {
            dispatch(fetchProductById(id));
        },

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateProduct);