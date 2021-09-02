/* eslint-disable import/no-anonymous-default-export */
import { useState } from 'react';
import uuid from 'uuid';
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from '../actions/types'

export default function (action) {
    const [items, setItems] = useState([{ id: uuid(), name: 'Butter' }])
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...items
            }
        default:
            return items
    }
}