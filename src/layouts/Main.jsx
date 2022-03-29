import {useState, useEffect} from "react";
import {API_URL, API_KEY} from '../config'
import {Loader} from '../components/Loader'
import {ItemList} from '../components/ItemList'
import {Basket} from '../components/Basket'
import {BasketList} from "../components/BasketList";

function Main() {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [order, setOrder] = useState([])
  const [showBasket, setShowBasket] = useState(false)
  const [adding, setAdding] = useState(false)
  const [alertName, setAlertName] = useState('')

  const checkModal = showBasket === true ? 'opened' : 'closed'

  const onBuy = (item) => {
    setAdding(true)
    const findIndex = order.findIndex((el) => el.mainId === item.mainId)  
    const newItem = {
      ...item,
      quantity: 1
    }   
    addVisualEff(item.displayName)
    if(findIndex < 0) {
      setOrder([...order, newItem])
    }
    else {
      const newOrder = order.map((item, index) => {
        if(index === findIndex) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        else {
          return item
        }
      })
      setOrder(newOrder)
    }
  }

  const addVisualEff = (name) => {
    setAlertName(name)
    setTimeout(()=>{
      setAdding(false)
      setAlertName('')
    }, 600)
  }

  const onDelete = (props) => {
    const newOrder = order.filter(function(item) { 
        return item.mainId !== props.mainId 
    })
    setOrder(newOrder)
  }

  const plusItems = (e) => {
    const findIndex = order.findIndex((el) => el.mainId === e.mainId)
    const newOrder = order.map((item, index) => {
      if(index === findIndex) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      else {
        return item
      }
    })
    setOrder(newOrder)
  }

  const minusItems = (e) => {
    const findIndex = order.findIndex((el) => el.mainId === e.mainId)
    const newOrder = order.map((item, index) => {
      if(index === findIndex) {
        return {
          ...item,
          quantity: item.quantity > 0 ? item.quantity - 1 : 0
        }
      }
      else {
        return item
      }
    })
    setOrder(newOrder)
  }

  const showHideBasket = () => {
    setShowBasket(!showBasket)
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        "Authorization": API_KEY,
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(false)
          result.shop && setItems(result.shop)
        },
        (error) => {
          setLoading(false)
          console.error(error)
        }
      )
  }, [])

  return (
    <main data-modal={checkModal} className="container content">
      <h1>Based on Hooks</h1>
      <Basket 
        counter={order.length}
        showHideBasket={showHideBasket}
        adding={adding}
        alertName={alertName} />
      {loading ? <Loader /> : <ItemList items={items} onBuy={onBuy} adding={adding} />} 
      {showBasket &&
      <BasketList
        order={order}
        showHideBasket={showHideBasket}
        onDelete={onDelete}
        plusItems={plusItems}
        minusItems={minusItems}
      />}
    </main>
  );
}

export default Main;


