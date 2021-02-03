import './ShelfItem.css'

function ShelfItem({item}) {
  return (
    <div key={item.id}>
      <h3>{item.description}</h3>
      <img src={item.image_url} alt={item.description}/>
    </div>
  )
};

export default ShelfItem;