const ExchangeRate = ({ exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency }) => {
  return (
    <div className="exchange-rate">
      <h3>Wechselkurs</h3>
      <h1>{exchangeRate}</h1>
      <b>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</b>

    </div>
  )
}

export default ExchangeRate
