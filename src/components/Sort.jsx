function Sort(props) {
  const {sorting, applySort, cancelSort, byPriceDown, byPriceUp} = props
  const btnActive = sorting ? '' : 'disabled'
  const lowActivity = byPriceDown && 'active'
  const highActivity = byPriceUp && 'active'
  
  return (
    <div className="row sort">
      <span>Price:</span>
      <span data-sort="low" className={`${lowActivity}`} onClick={(e) => applySort(e)}>Low to High</span>
      <span data-sort="hight" className={`${highActivity}`} onClick={(e) => applySort(e)}>High to Low</span>
      <button className={`btn ${btnActive}`} onClick={cancelSort}>off</button>
    </div>
  );
}

export {Sort};