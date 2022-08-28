import React from "react";
import Item from '../Item/Item';

const ItemList = ({ Items }) => {
    return (
        <>
            {Items.map((item, indx) =>
                <Item key={indx} id={item.id} title={item.title} price={item.price} />
            )}
        </>
    );
};

export default ItemList;