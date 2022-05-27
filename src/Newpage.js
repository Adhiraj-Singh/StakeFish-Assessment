import React, {useState, useEffect} from 'react'

/*axios needed to use api url*/
import axios from 'axios'

import './Newpage.css'

const Newpage = (props) => {

   
    const [data, setData] = useState(null);
    const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=10';
    
    /*use url and set data, throw error if it fails*/
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
        <div className = 'Newpage'>

            {/*opening new page based on prop information which is the id number*/}

            <div className = 'newcontainer'>
                <div className='newcard' >
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
            </div>

            
            

        

        </div>

    )
    
}

export default Newpage
