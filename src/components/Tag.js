import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spin from './Spin';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const Tag = () => {
    const [tag,setTag] = useState("car");
    const [gif,setGif] = useState("");
    const [loading,setLoading] = useState('false');
   
     async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        console.log(imageSource);
        setGif(imageSource);
        setLoading(false);  
     }

    useEffect(()=>{
        fetchData();
    },[]);
    function clickHandler(){
        fetchData();
    }
    function changeHandler(event){
      setTag(event.target.value)
    }
  return (
    <div className='w-1/2 bg-blue-500 mx-auto rounded-lg border-black
    flex flex-col items-center gap-y-5 mt-[15px] '>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} GIF</h1>
        {
            loading ? (<Spin/>) : (<img src={gif} width="450" />)
        }

        <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        value={tag}
        onChange={changeHandler}
        />
        <button className='mb-[20px] w-10/12 bg-yellow-400 text-lg py-2 rounded-lg '
        onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag