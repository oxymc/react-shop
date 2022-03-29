import {ItemCard} from './ItemCard'

function ItemList(props) {
  const {items = [], onBuy, adding} = props

  return (
    <div className="row fogrid">
        {items.map((item) => {
          return <ItemCard key={item.mainId} {...item} onBuy={onBuy} adding={adding}/>})}
    </div>
  );
}

export {ItemList};