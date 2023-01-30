import React, {useState, useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {

    const [dataFetch, setDataFetch] = useState()
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search === ""? "dolphin":search}&api_key=saanLrcouTbMFfTg26rXD2MrLPGObE7A&rating=g`)
        .then(response => response.json())
        .then((dataFetch) => setDataFetch(dataFetch.data.slice(0, 3)))
    }, [search])
    console.log(dataFetch)


    function submitHandler (e) {
      e.preventDefault()
      // setDataFetch(e.target.value)
    }


  return (
    <div>
      <GifSearch setSearch={setSearch} handler = {submitHandler}/>
      <GifList dataFetch = {dataFetch}/>
    </div>
  )
}

export default GifListContainer