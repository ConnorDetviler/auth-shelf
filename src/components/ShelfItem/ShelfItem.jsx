import './ShelfItem.css'
import {useSelector, useDispatch} from 'react-redux';

function ShelfItem({item}) {

  let displayButton = false;

  const user = useSelector((store) => store.user)

  const dispatch = useDispatch();

  if(user.id === item.user_id) {
    displayButton = true;
  }

  const deleteItem = () => {
    dispatch({type: "DELETE_ITEM", payload: item.id})
  }

  return (
    <div key={item.id}>
      <h3>{item.description}</h3>
      <img src={item.image_url} alt={item.description}/>
      {displayButton && (
        <button onClick={deleteItem}>Delete</button>
      )}
    </div>
  )
};

export default ShelfItem;