import React, {Component} from 'react';
import {products} from '../productData';
import Product from '../components/Product';

import Nav from '../components/Nav'
//import Pagination from '../components/Pagination';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/product.actions.js';
import {deleteProduct} from '../actions/product.actions.js';
import {history} from '../index';
import Pagination from "react-js-pagination";

class Products extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {filterVal: "", search: null,currentPage:1,postsPerPage:10}
        this.handleChange = this.handleChange.bind(this);
      
    }

componentWillMount()
{
    this.props.onFetch();
}

handleEdit(product)
{
 history.push({
     pathname:'/edit/${product.productId}',
     state :{product:product}
 })
}

handleChange(event) {
    this.setState({ filterVal: event.target.value });
    let keyword = event.target.value;
    this.setState({ search: keyword });
  }

  handlePageChange(pageNumber) {
    console.log('active page is ${pageNumber}');
    this.setState({currentPage: pageNumber});
  }

    render(){

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts  =  (this.props.products).slice(indexOfFirstPost,indexOfLastPost);
        console.log(this.state.currentPage);
        const paginate =(pageNumber) => this.setState({currentPage : pageNumber})

        console.log(this.state.currentPage);

        const items  = this.state.search === null ? currentPosts : currentPosts.filter((data) => {
            if (data.productName.toLowerCase().includes(this.state.search.toLowerCase()) ||
              data.category.toLowerCase().includes(this.state.search.toLowerCase())) {
                console.log("true");
                  return true;
            }
              console.log("false");
            return false;
          })

        
        const Search =<input value={this.state.filterVal} onChange={this.handleChange} />; 
if(this.props.isLoading)
{

return(
    <p>Loading....</p>
)
}
else if(this.props.error )
{
    return (
        <p className="alert alert-danger" role="alert">
            {this.props.error.message}
        </p>
    )
}
else{
        return(
           <div><div   align="left" >
                <label>FILTER:</label> {Search} 
                </div>
            <div>
                
                <table className="table table-stribed">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Supplier Name</th>
                            <th>Product Status</th>
                            <th>DateLast Updated</th>
                        </tr>
                    </thead>
                    <tbody>

                     
                        {
                            items.map(product =>{
                                return (
                                   <Product key={product.productId} product={product} onEdit={this.handleEdit.bind(this)}  
                                   onDelete={this.props.onDelete}></Product>
                                )
                            })
                        }
                    </tbody>    
                </table>
            </div>
            <div>
            {/* <Pagination postsPerPage={this.state.postsPerPage} totalPosts={(this.props.products).length} paginate={paginate}></Pagination> */}
            <Pagination 
          activePage={this.state.currentPage}
          itemsCountPerPage={10}
          totalItemsCount={(this.props.products).length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
            <div>
         
      </div>
            </div>
            </div> 
        )
                    }
    }

}

const mapStateToProps = (state) =>
{ 
    return {
       
        products: state.productData.products || [],
        error : state.productData.error || null,
        isLoading : state.productData.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchProducts());
        },

        onDelete: (id) => {
            dispatch(deleteProduct(id))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Products);