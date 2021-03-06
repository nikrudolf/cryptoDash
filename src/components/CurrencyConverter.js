import { useState } from "react"
import ExchangeRate from "./ExchangeRate"
import axios from "axios"

const CurrencyConverter = () => {
    const currencies = ['EUR', 'USD', 'BTC', 'ETH', 'XRP', 'LTC', 'ADA', 'DOGE']
    const [chosenPrimaryCurrency, SetChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, SetChosenSecondaryCurrency] = useState('EUR')
    const [amount, setAmount] = useState(1)
    const [exchangeRate, setExchangeRate] = useState(0)
    const [primayCurrencyExchange, setPrimayCurrencyExchange] = useState('BTC')
    const [secondaryCurrencyExchange, setSecondaryCurrencyExchange] = useState('EUR')
    const [result, setResult] = useState(0)


    const convert = () => {

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/converter',
            params: { from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency },
        }

        axios.request(options).then((response) => {
            console.log(response.data)
            setExchangeRate(response.data)
            setResult(response.data * amount)
            setPrimayCurrencyExchange(chosenPrimaryCurrency)
            setSecondaryCurrencyExchange(chosenSecondaryCurrency)
        }).catch((error) => {
            console.error(error)
        })
    }


    return (
        <div className="currency-converter">
            <h2>Kryptowährungen Umrechner</h2>

            <div className="input-box">
                <table>
                    <tbody>
                        <tr>
                            <td>Ursprungswährung: </td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount1"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </td>
                            <td>
                                <select value={chosenPrimaryCurrency}
                                    name="currency-option1"
                                    className="currency-options"
                                    onChange={(e) => SetChosenPrimaryCurrency(e.target.value)}
                                >
                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Zielwährung: </td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount2"
                                    value={result}
                                    disabled={true}
                                />
                            </td>
                            <td>
                                <select value={chosenSecondaryCurrency}
                                    name="currency-option2"
                                    className="currency-options"
                                    onChange={(e) => SetChosenSecondaryCurrency(e.target.value)}
                                >
                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button id="convert-button" onClick={convert}>Berechnen</button>

            </div>


            <ExchangeRate
                exchangeRate={exchangeRate}
                chosenPrimaryCurrency={primayCurrencyExchange}
                chosenSecondaryCurrency={secondaryCurrencyExchange}
            />
        </div>
    )
}

export default CurrencyConverter
