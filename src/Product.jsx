import Button from './ProductButton';
import './products.css';
function Product(props) {
   const{brand, category, description, discountPercentage, id, images, price, rating, stock, thumbnail, title  } = props.products;
 
   return (

        <div className='img-container'>
            <div>
        <img src={images[0]} alt={title} />
        </div>
      <div>
        {title} <br/>
        <span>{price}</span> <span>{discountPercentage}</span>
        <br/>
        <Button productId={id} />
      </div>
      </div>
  )
}

export default Product