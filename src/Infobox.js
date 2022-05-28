import React, {useState, useEffect} from 'react'
import Typed from 'react-typed'

/*axios needed to use api url*/
import axios from 'axios'

import './Infobox.css'

const Infobox = () => {
    const [data, setData] = useState(null)
    const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=10';
    
    /*use url and set data, throw error if it fails*/
    useEffect(()=> {
        axios.get(url).then((response)=> {
            setData(response.data)
        }).catch((error)=> {
            console.log(error)
        })
    }, [])

 
    // Checking for error in API data extraction
    if(!data) return null 

    return (
        <div className = 'Infobox'>

            {/*Caption for website*/}
            <div className='title'>
            <h1>Learn more about...   <Typed strings = {['  Binance', '  FTX', '  Kraken']} typeSpeed={120} backSpeed={130} loop/> </h1>
            </div>

            

            {/* The api info needed is for the first 10 cards only, stored in an array [0-9]*/}
            <div className = 'container'>
                <div className='card' >

                    {/*logo of exchange*/}
                    <img id = "mylogo" src={data[0].image} alt=''/>
                    {/*name of exchange*/}
                    <h1>{data[0].name}</h1>

                    {/*Highlighting data type for ease of read using bold*/}
                    
                    {/*Country based*/}
                    <p><strong>Country</strong> - {data[0].country}</p>
                    
                    {/*url to exchange website*/}
                    <p><strong>URL</strong> - {data[0].url}</p>

                    {/*Ranking of the exchange*/}
                    <p><strong>Trust Rank</strong> - #{data[0].trust_score_rank}</p>

                    {/*adding this text for call to action*/}
                  
                    <h2>CLICK FOR MORE INFO</h2>
                   
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[1].image} alt=''/>

                    <h1>{data[1].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[1].country}</p>
                    
                    <p><strong>URL</strong> - {data[1].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[1].trust_score_rank}</p>

                    {/*adding this text for call to action*/}
                    <h2>CLICK FOR MORE INFO</h2>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[2].image} alt=''/>

                    <h1>{data[2].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[2].country}</p>
                    
                    <p><strong>URL</strong> - {data[2].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[2].trust_score_rank}</p>

                    {/*adding this text for call to action*/}
                    <h2>CLICK FOR MORE INFO</h2>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[3].image} alt=''/>

                    <h1>{data[3].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[3].country}</p>
                    
                    <p><strong>URL</strong> - {data[3].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[3].trust_score_rank}</p>

                    {/*adding this text for call to action*/}
                    <h2>CLICK FOR MORE INFO</h2>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[4].image} alt=''/>

                    <h1>{data[4].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[4].country}</p>
                    
                    <p><strong>URL</strong> - {data[4].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[4].trust_score_rank}</p>

                    {/*adding this text for call to action*/}
                    <h2>CLICK FOR MORE INFO</h2>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[5].image} alt=''/>

                    <h1>{data[5].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[5].country}</p>
                    
                    <p><strong>URL</strong> - {data[5].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[5].trust_score_rank}</p>

                    {/*adding this text for call to action*/}
                    <h2>CLICK FOR MORE INFO</h2>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[6].image} alt=''/>

                    <h1>{data[6].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[6].country}</p>
                    
                    <p><strong>URL</strong> - {data[6].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[6].trust_score_rank}</p>

                    {/*adding this text for call to action*/}
                    <h2>CLICK FOR MORE INFO</h2>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[7].image} alt=''/>

                    <h1>{data[7].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[7].country}</p>
                    
                    <p><strong>URL</strong> - {data[7].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[7].trust_score_rank}</p>

                    {/*adding this text for call to action*/}
                    <h2>CLICK FOR MORE INFO</h2>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[8].image} alt=''/>

                    <h1>{data[8].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[8].country}</p>
                    
                    <p><strong>URL</strong> - {data[8].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[8].trust_score_rank}</p>

                    {/*adding this text for call to action*/}
                    <h2>CLICK FOR MORE INFO</h2>
                    
                </div>

                <div className='card'>
                    
                    <img id = "mylogo" src={data[9].image} alt=''/>

                    <h1>{data[9].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[9].country}</p>
                    
                    <p><strong>URL</strong> - {data[9].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[9].trust_score_rank}</p>

                    {/*adding this text for call to action*/}
                    <h2>CLICK FOR MORE INFO</h2>
                    
                </div>

            </div>

        </div>

    )
}

export default Infobox

