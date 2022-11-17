import {useParams} from 'react-router-dom'
 
function SingleProduct() {
const {productId} = useParams()
    console.log(productId)
  return (
        <div>
        SingleProduct
        
        </div>
  )
}

export default SingleProduct