import React, {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossResultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
    heads: 0,
    tails: 0,
  }

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const isHeads = tossResult === 0
    const tossResultImage = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    this.setState(prevState => ({
      tossResultImage,
      total: prevState.total + 1,
      heads: prevState.heads + (isHeads ? 1 : 0),
      tails: prevState.tails + (isHeads ? 0 : 1),
    }))
  }

  render() {
    const {tossResultImage, total, heads, tails} = this.state

    return (
      <div className="coin-toss-container">
        <h1 className="heading">Coin Toss Game</h1>
        <p className="description">Heads (or) Tails</p>
        <img
          src={tossResultImage}
          alt="toss result"
          className="toss-result-image"
        />
        <button
          type="button"
          className="toss-coin-button"
          onClick={this.onTossCoin}
        >
          Toss Coin
        </button>
        <div className="stats-container">
          <p className="stat">Total: {total}</p>
          <p className="stat">Heads: {heads}</p>
          <p className="stat">Tails: {tails}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
