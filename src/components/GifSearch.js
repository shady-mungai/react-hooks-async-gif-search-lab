import React from 'react'

function GifSearch({handler, setSearch}) {
  return (
    <div>
        <form onSubmit={handler}>
            <input type="text" onChange={e => setSearch(e.target.value)}/>
            <button>Find Gifs</button>
        </form>
    </div>
  )
}

export default GifSearch