import { useState } from "react"
import ExchangeRate from "./ExchangeRate"
import axios from "axios"

const CurrencyConverter = () => {
    const currencies = ['EUR', 'USD', 'BTC', 'ETH', 'XRP', 'LTC', 'ADA', 'DOGE']
    const [chosenPrimaryCurrency, SetChosenPrimaryCurrency] = useState('EUR')
    const [chosenSecondaryCurrency, SetChosenSecondaryCurrency] = useState('EUR')
    const [amount, setAmount] = useState(1)


    console.log(amount)

    const convert = () => {

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: { from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency },
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': '443b6a8c4fmsh7b184418946b25cp15be7ajsn097be1c09636'
            }
        }

        axios.request(options).then((response) => {
            console.log(response.data);
        }).catch( (error) => {
            console.error(error)
        })
    }

    return (
        <div className="currency-converter">
            <h2>CurrencyConverter</h2>

            <div className="Input-box">
                <table>
                    <tbody>
                        <tr>
                            <td>Primary Currency:</td>
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
                            <td>Secondary Currency:</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount2"
                                    value={""}
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

                <button id="convert-button" onClick={convert}>Convert</button>

            </div>


            <ExchangeRate />
        </div>
    )
}

export default CurrencyConverter