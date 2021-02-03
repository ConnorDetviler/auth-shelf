import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';

function ShelfPage() {

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
      {shelf?.map((item) => (
        <ShelfItem/>
      ))}
    </div>
  );
}

export default ShelfPage;
