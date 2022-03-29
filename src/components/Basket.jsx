function Basket(props) {
    const {counter, showHideBasket, adding, alertName} = props
    return (
      <>
        <div className="basket">
          <button className="btn" onClick={showHideBasket}>
              <i className="material-icons">shopping_cart</i>
              <span>{counter}</span>
          </button>
        </div>  
        {adding &&
        <div className="adding-product grey darken-3">
          <p>{alertName} was added to basket</p>
        </div>}
      </>
    );
  }
  
  export {Basket};