import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';
import ShelfForm from '../ShelfForm/ShelfForm.jsx'

function ShelfPage() {
  let [formVis, setFormVis] = useState(false)
  const dispatch = useDispatch();

  const shelf = useSelector(store => store?.shelf)

  console.log(shelf)

  useEffect(() => {
    dispatch({
      type: 'FETCH_SHELF'
    })
  }, [])


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>


      {!formVis && (
        <button onClick={() => setFormVis(!formVis)}>Add Item!</button>
      )}

      {formVis && (
          <>
            <ShelfForm />
            <button onClick={() => setFormVis(!formVis)}>Cancel</button>
          </>
      )}

      {shelf?.map((item) => (
        <ShelfItem item={item}/>
      ))}

    </div>
  );
}

export default ShelfPage;
