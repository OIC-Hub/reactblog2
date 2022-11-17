import {Link} from 'react-router-dom';

function Button({productId}) {
   
  return (
    <div>
        <Link to={`product/${productId}`}>Buy</Link>
    </div>
  )
}

export default Button;
