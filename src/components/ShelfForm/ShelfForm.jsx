import './ShelfForm.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function ShelfForm() {

    const dispatch = useDispatch();

    let [newItem, setNewItem] = useState({
        description: '',
        image_url: ''
    })

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setNewItem({...newItem, [event.target.name]: value})
    }

    const placeItem = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_ITEM',
            payload: newItem
        })
        setNewItem({
            description: '',
            image_url: ''
        });
    }

    return (
        <form onSubmit={placeItem}>
            <input
                type="text"
                placeholder="description"
                name="description"
                onChange={handleChange}
                value={newItem.description}
            />
            <input
                type="text"
                placeholder="image url"
                name="image_url"
                onChange={handleChange}
                value={newItem.image_url}
            />
            <input type="submit" />
        </form>
    )
}

export default ShelfForm;