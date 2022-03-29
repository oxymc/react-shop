import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {order = [], showHideBasket, onDelete, plusItems, minusItems} = props
  const totalPrice = order.reduce(
    (sum, el) => {
      return sum + (+el.price.finalPrice * +el.quantity)
    }, 0
  )
  
  return (
    <ul className="collection with-header basket-wrapper">
      <li className="collection-header">
        <h4>Basket</h4>
        <button className="btn" onClick={showHideBasket}><i className="material-icons">close</i></button>
      </li>
      {order.length ?
        order.map((item) => {
          return (
            <BasketItem
            key={item.mainId}
            {...item}
            onDelete={onDelete}
            plusItems={plusItems}
            minusItems={minusItems}
            />
          )
        })
      : <p className="flow-text">No products in basket</p>}
      {order.length ? <li className="collection-header"><h5>Total:</h5><span className="price">$ {totalPrice.toLocaleString('ru')}</span></li> : null}     
    </ul>
  );
}
  
  export {BasketList};