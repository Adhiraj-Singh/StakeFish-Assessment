import React, {useState, useEffect} from 'react'

import axios from 'axios'

import './Infobox.css'

const Infobox = () => {
    const [data, setData] = useState(null)
    const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=10';
    
    useEffect(()=> {
        axios.get(url).then((response)=> {
            setData(response.data)
        }).catch((error)=> {
            console.log(error)
        })
    }, [])

    console.log(data)

    // Checking for error in API data extraction
    if(!data) return null    

    return (
        <div className = 'Infobox'>

            

            <div className = 'container'>
                <div className='card'>
                    <img id = "mylogo" src={data[0].image} alt=''/>

                    <h1>{data[0].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[0].country}</p>
                    
                    <p><strong>URL</strong> - {data[0].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[0].trust_score_rank}</p>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[1].image} alt=''/>

                    <h1>{data[1].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[1].country}</p>
                    
                    <p><strong>URL</strong> - {data[1].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[1].trust_score_rank}</p>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[2].image} alt=''/>

                    <h1>{data[2].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[2].country}</p>
                    
                    <p><strong>URL</strong> - {data[2].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[2].trust_score_rank}</p>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[3].image} alt=''/>

                    <h1>{data[3].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[3].country}</p>
                    
                    <p><strong>URL</strong> - {data[3].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[3].trust_score_rank}</p>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[4].image} alt=''/>

                    <h1>{data[4].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[4].country}</p>
                    
                    <p><strong>URL</strong> - {data[4].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[4].trust_score_rank}</p>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[5].image} alt=''/>

                    <h1>{data[5].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[5].country}</p>
                    
                    <p><strong>URL</strong> - {data[5].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[5].trust_score_rank}</p>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[6].image} alt=''/>

                    <h1>{data[6].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[6].country}</p>
                    
                    <p><strong>URL</strong> - {data[6].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[6].trust_score_rank}</p>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[7].image} alt=''/>

                    <h1>{data[7].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[7].country}</p>
                    
                    <p><strong>URL</strong> - {data[7].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[7].trust_score_rank}</p>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[8].image} alt=''/>

                    <h1>{data[8].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[8].country}</p>
                    
                    <p><strong>URL</strong> - {data[8].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[8].trust_score_rank}</p>
                    
                </div>

                <div className='card'>
                    <img id = "mylogo" src={data[9].image} alt=''/>

                    <h1>{data[9].name}</h1>

                    {/*Highlighting data type for ease of read*/}
                    
                    <p><strong>Country</strong> - {data[9].country}</p>
                    
                    <p><strong>URL</strong> - {data[9].url}</p>

                    <p><strong>Trust Rank</strong> - #{data[9].trust_score_rank}</p>
                    
                </div>

            </div>

        </div>

    )
}

export default Infobox

