import './ShelfForm.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function ShelfForm() {

    const dispatch = useDispatch();

    let [newItem, setNewItem] = useState({})

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setNewItem({...newItem, [event.target.name]: value})
    }

    const placeItem = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: newItem
        })
    }

    return (
        <form onSubmit={placeItem}>
            <input
                type="text"
                placeholder="description"
                name="description"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="image url"
                name="image_url"
                onChange={handleChange}
            />
            <input type="submit" />
        </form>
    )
}

export default ShelfForm;