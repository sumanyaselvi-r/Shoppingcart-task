
import './App.css';

import Navbar from './Home.jsx';
import CardProduct from './CardProduct.jsx';
import { useState } from 'react';
import CartItem from './Cart.jsx';

function App() {



  const ProductDetails = [{
    id: 1,
    name: "Watch",
    price: 4000,
    image: "https://c0.wallpaperflare.com/preview/940/907/612/watch-product-aesthetic-classy.jpg"

  },
  {
    id: 2,
    name: "Shoe",
    price: 5000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOe9XFye0F0Uj1laaYxUAK95GCsap1dxddw&usqp=CAU"

  },
  {
    id: 3,
    name: "Camera",
    price: 20000,
    image: "https://i.pcmag.com/imagery/reviews/02Uc53QnK54VMTtvk3KzxLJ-1.fit_lim.size_840x473.v1677603207.jpg"

  },
  {
    id: 4,
    name: "kettle",
    price: 3000,
    image: "https://images.meesho.com/images/products/206219579/afkxm_512.webp"

  },
  {
    id: 5,
    name: "camera",
    price: 40000,
    image: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/11/product-photography-tips-17-1.jpg"


  },
  {
    id: 6,
    name: "bottels",
    price: 550,
    image: "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"

  },
  {
    id: 7,
    name: "Lotion",
    price: 400,
    image: "https://spectrum-brand.com/cdn/shop/products/58cm-artificial-monstera-plain-leaf-stem-photography-styling-prop-lifestyle-inuse-2-2.jpg?v=1631722954&width=1001s"

  }
    , {
    id: 8,
    name: "Watch",
    price: 25000,
    image: "https://c0.wallpaperflare.com/preview/940/907/612/watch-product-aesthetic-classy.jpg"

  }
  ]



  let [cart, setCart] = useState([]);
  let [total, setTotal] = useState(0);
  let [show, setShow] = useState(true)


  let AddToCart = (product) => {
    setCart([...cart, product])
    setTotal(total + product.price)
  }
  let RemoveCart = (item) => {
    let removeitem = cart.filter((items) => items.id !== item.id);
    setCart(removeitem)
    setTotal(parseInt(total) - parseInt(item.price))


  }




  return (

    <>

      <Navbar tcart={cart.length} setShow={setShow} ></Navbar><br></br><br></br><br></br>
      {show ? (<div className='container'>
        <div className='row'>

          {

            ProductDetails.map((product, index) => {
              return <CardProduct key={index} product={product} AddToCart={AddToCart}></CardProduct>

            })

          }

          <br></br>




        </div>
      </div>) : (<div className='cart-container'>
        <div className='popup'>
          <h2>Cart({cart.length})</h2><br></br>
          {
            cart.length > 0 ? (<ol className="list-group list-group-numbered">
              {
                cart.map((item, index) => {
                  return <CartItem key={index} item={item} RemoveCart={RemoveCart}></CartItem>
                })
              }
            </ol>) : <h3 style={{ color: 'black', marginRight: '20px', paddingRight: '20px' }}>No item in the cart</h3>
          }
          <br></br>
          <h3>Total Rs.{total}</h3>
          <button className="btn btn-outline-success" onClick={() => { setShow(true) }}>Go to product page</button>

        </div></div>)}









    </>





  );
}

export default App;
