function ProductCard({ product, AddToCart }) {


  return <>
    <div className="col-md-3 col-lg-3">
      <div className="card" style={{ fontFamily: "TimesNewRoman", fontSize: "20px" }} >
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body" style={{ textAlign: "center" }}>
          <h5 className="card-title" style={{ fontWeight: "bold" }}>{product.name}</h5>
          <p className="card-text">Rs.{product.price}</p>
          <a href="#" className="btn btn-primary" onClick={() => { AddToCart(product) }} >Add to Cart</a>
        </div>
      </div>
      <br></br><br></br>

    </div>
  </>
}
export default ProductCard;