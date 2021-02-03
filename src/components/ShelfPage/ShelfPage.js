import {React, useState} from 'react';
import ShelfForm from '../ShelfForm/ShelfForm.jsx'

function ShelfPage() {

  let [formVis, setFormVis] = useState(false)

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
    </div>
  );
}

export default ShelfPage;
