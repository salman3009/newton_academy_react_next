import React, { useState, useEffect } from 'react';

function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);

    useEffect(() => {
        const fetchCryptoData = async () => {
            const request = await fetch("https://api.coinlore.net/api/tickers/");
            const response = await request.json();
            const result = response.data;
            console.log(result.slice(0, 10));
            setCryptoArr(result.slice(0, 10));
        }

        fetchCryptoData();
    }, [])
    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>
                {cryptoArr && cryptoArr.map((coin) => {
                    const { id, rank, name, symbol, price_usd } = coin;
                    return (
                        <div className='coin-container' key={id}>
                            <p className='rank-para'>Rank #{rank}</p>
                            <h3 className='coin-symbol'>{name} ({symbol})</h3>
                            <p className='price-para'>Price: {price_usd}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Top