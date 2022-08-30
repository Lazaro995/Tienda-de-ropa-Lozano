import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { Spinner } from '@chakra-ui/react';
export default function ItemListContainer({ greeting }) {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = useState({});
  useEffect(() => {



    let products = [{ id: 1, title: "Pashmina azul", price: 1500 }, { id: 2, title: "pashmina blanca", price: 1500 }];
    new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(products);
      }, 4000)

    })
      .then((data) => {
        setItems(data);
      }).catch().finally(() => { setLoading(false) })
  }, [])

  return (
    <div>
      <span>{greeting}</span>
      {items.length ?
        <ItemList items={items} /> :
        <Spinner></Spinner>
      }
    </div>
  )
}
