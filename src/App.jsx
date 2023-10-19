import Product from "./component/Product"


const App = () => {

const products = [
  {
    productName: "MK-2688 PC",
    description: "Headset with noise cancellation feature",
    price: 5000,
    image: "https://shorturl.at/exH58"
  },
  {
    productName:"Hp-core i5",
    description: "Intel core i5",
    price:5000000,
    image:"https://shorturl.at/fyCZ0"
  },
  {
    productName:"Blender",
    description:"A very fast blender with sharp blades",
    price: 30000,
    image: "https://shorturl.at/fKQ45"
  }
  ]
  return (
    <div>
      
      {products.map(({productName,description,price,image},index)=>(
        <Product 
        key={index}
        Pname={productName}
        about={description}
        amount={price}
        image={image}
        >

        </Product>
      ))}
      
    </div>
  )
}

export default App
