import React from 'react';

function ItemList({ items }) {
    console.log("ItemList rendered!");

    return (
        <ul>
            {items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
    );
}

export default React.memo(ItemList);
