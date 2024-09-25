
import './ProductBody.css'
import './Navigation.css'

const ProductBody = ()=>{

    return(
        <div className='product'>
            <div className='product-body'>
           <h1>YOUR FEET DESERVE THE BEST</h1>
           <p>
           YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET 
           DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
           </p>
            <div className='product-btn'>
                <button className='button'> Shop Now</button>
                <button className='category-btn'> Category </button>
            </div>
            <div className='notes'>
                <p> Also Available Now</p>
                <img src='/images/flipkart.png'></img>
                <img src='/images/amazon.png'></img>
           </div>
           </div>
           <div className='product-image'>
            <img src='/images/shoe_image.png'></img>
           </div>
        </div>
    )

}
export default ProductBody;















