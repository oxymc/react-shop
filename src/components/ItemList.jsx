import {ItemCard} from './ItemCard'
import {Sort} from './Sort'

function ItemList(props) {
  const {items = [], onBuy, adding, sorting, byPriceDown, byPriceUp, applySort, cancelSort} = props

  const priceLowHigh = [].concat(items).sort((a, b) => a.price.regularPrice > b.price.regularPrice ? 1 : -1)
  const priceHightLow = [].concat(items).sort((a, b) => a.price.regularPrice < b.price.regularPrice ? 1 : -1)
  
  return (
    <> 
    <Sort sorting={sorting} byPriceDown={byPriceDown} byPriceUp={byPriceUp} applySort={applySort} cancelSort={cancelSort}/>
    <div className="row fogrid">
      { 
      !sorting ?
          items.map((item) => {
            return <ItemCard key={item.mainId} {...item} onBuy={onBuy} adding={adding}/>})
        : byPriceDown ? 
          priceLowHigh.map((item) => {
            return <ItemCard key={item.mainId} {...item} onBuy={onBuy} adding={adding}/>}) 
        : priceHightLow.map((item) => {
            return <ItemCard key={item.mainId} {...item} onBuy={onBuy} adding={adding}/>})
      }
      </div>
    </>
  );
}

export {ItemList};