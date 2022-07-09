import {useEffect, useState} from "react"

function App() {
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] = useState([])
    const [money, setMoney] = useState("")
    const [selectCoin, setSelectCoin] = useState([])

    const onChange = (event) => {
        setMoney(event.target.value)
    }
    const onChangeSelect = (event) => {
        setSelectCoin(event.target.value)
    }

    console.log(money)
    console.log(selectCoin)
    console.log(money*selectCoin)
    
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <h1>The Coins! ({loading ? "" : coins.length})</h1>
            <p>
                <label for="money">코인으로 바꾸실 USD를 입력해주세요.</label><br />
                <input id="money" value={money} onChange={onChange} type="number" placeholder="Write your USD..." />
            </p>
            {loading ? <strong>Loading...</strong> : <select onChange={onChangeSelect}>
                {coins.map((coin) => <option value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
            </select>}
            <p>입력하신 USD로 바꿀 수 있는 코인은? <br /><strong>{money/selectCoin}</strong></p>
            
            
            
        </div>
    )
}
export default App;

