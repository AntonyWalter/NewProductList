import React, { Component } from 'react'
import './ProductImages.css'
import {images} from '../imageData';
import preButton from '../images/Previous-Button-PNG-Picture.png'
import nextButton from '../images/Next-Button-PNG-Picture.png'
import { displayNextImage ,displayPrevImage} from '../actions/image.actions';
import {connect} from 'react-redux';


class ProductImages extends Component
{
    constructor (props)
    {
     super(props);

     this.state={ imageP:images[0] ,currentImgId: 1, imageCount :0};
    // this.handleGoNext = this.handleGoNext.bind(this);
    }

    componentDidMount()
    {
        
        this.setState({imageCount: images.length});
     
        console.log(this.state.currentImgId);
        console.log(this.state.imageCount);
    }


    handleGoPrevious(imgId)
    {
      this.props.GoPrevious(imgId);
    }

    handleGoNext(imgId)
    {
        console.log("next 111");
        this.props.GoNext(imgId);
    }

render() 
{
  
  const ShowPreDiv = () =>
  (
    <div> <button id="btnPrev" ><img src={preButton} alt="my image" onClick={ () => this.handleGoPrevious(this.props.currentImgId)} /></button></div>
    )  


  const ShowNextDiv = () =>
  (

    <div> <button ><img src={nextButton} alt="my image" onClick={ () =>  this.handleGoNext(this.props.currentImgId)}/></button></div>
  )

   return(
       <div className="container">
         
          <div className="item-logo">Logo</div>
          <div className="item-header"> Header</div>

          <div className="item-content"> Content
          <table><tbody><tr><td> {this.props.currentImgId >0 ? <ShowPreDiv/> : null}</td>
          <td>  <img src={this.props.imagePD.url} alt="new"></img></td>
          <td>{this.props.currentImgId < this.state.imageCount-1 ? <ShowNextDiv /> : null}</td></tr></tbody></table>
        
          </div>
       </div>
   )
}

    
} 

const mapStateToProps = (state) =>
{  console.log(state.imageData.imageP)
    return {
       
        imagePD: state.imageData.imageP || [],
        currentImgId :state.imageData.currentImgId,
        isLoading : state.imageData.isLoading,
      
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        GoNext: (currentImgId) => {
            dispatch(displayNextImage(currentImgId));
        },

        GoPrevious: (currentImgId) => {
            dispatch(displayPrevImage(currentImgId));
        },

    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ProductImages);

