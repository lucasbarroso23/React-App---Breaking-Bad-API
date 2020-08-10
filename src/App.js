import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import Axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';

import './App.css';
import Search from './components/ui/Search';


const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      //console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />

      <Search getQuery={(q) => setQuery(q)} />

      <CharacterGrid isLoading={isLoading} items={items} />

    </div>
  )

}

export default App;
