function BasketItem(props) {
  const {onDelete, plusItems, minusItems} = props
    return (
      <li className="collection-item special">
        <span className="delete" onClick={() => onDelete(props)}>
          <i className="material-icons">highlight_off</i>
        </span>
        <span className="img"><img src={props.img} alt={props.displayName}/></span>
        <span className="name">{props.displayName}</span>
        <span className="change" onClick={() => minusItems(props)}>
          <i className="material-icons">chevron_left</i>
        </span>
        <span className="count">{props.quantity}</span>
        <span className="change" onClick={() => plusItems(props)}>
          <i className="material-icons">chevron_right</i>
        </span>
        <span className="price">$ {(+props.quantity * +props.price.finalPrice).toLocaleString('ru')}</span>
      </li>
    );
  }
  
  export {BasketItem};