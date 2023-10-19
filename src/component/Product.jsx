import "./product.css"

const Product = ({Pname, about, amount, image}) => {
  return (
    <div className="container">
      <div className="card">
        <img src={image} alt="picture" />
        <div>
          <h3 className="title">Product:{Pname}</h3>
          <h5>About:{about}</h5>
          <p>Price:{amount}</p>
          </div>
          <div>
         
        </div>
        </div>
    </div>
  )
}

export default Product