function ItemCard(props) {
  const {displayName, granted, price, onBuy, mainId, adding} = props
  const buttonStatus = adding ? 'btn disabled' : 'btn'
  let img = '';

  granted.map(item => {
    return img = item.images.icon
  })

  return (
    <div className="card foFlex">
      <div className="card-image">
        <img src={img} alt={displayName}/>
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
      </div>
      <div className="card-action foFlex">
        <div className="prices">
          {+price.regularPrice !== +price.finalPrice ?
          <div className="old-price">$ {price.regularPrice}</div> :
          null
          }
          <div className="price">$ {price.finalPrice}</div> 
        </div>
        <button 
          className={buttonStatus} 
          onClick={()=> onBuy({mainId, displayName, price, img})}>BUY</button>
      </div>
    </div>
  );
}

export {ItemCard};