import React, { Component } from 'react'
import { get } from '../utils/get'
import { USDT_PRICE_URL, BRL_PRICE_URL, SECONDS_UPDATE_PRICE } from '../utils/constants'
import { Pool } from './Pool'
import { Ethereum } from './Ethereum'
import { Rig } from './Rig'
import { Wallet } from './Wallet'
import { AppContext } from './context'

export class AppComponent extends Component {
  intervalPrice = null
  intervalBRL = null

  constructor(props) {
    super(props)
    document.title = 'Rig dos Sonhos'
    this.state = {
      balances: {},
      usdt: 0,
      brl: 0,
    }
  }

  componentDidMount = () => {
    this.getPrice()
    this.intervalPrice = setInterval(this.getPrice, SECONDS_UPDATE_PRICE * 1000)
  }

  getPrice = async () => {
    const { price: usdt } = await get(USDT_PRICE_URL)
    const { price: brl } = await get(BRL_PRICE_URL)
    this.setState({ usdt: Number(usdt), brl: Number(brl) })
  }

  onPoolUpdate = (balance) => {
    const { balances } = this.state
    this.setState({ balances: { ...balance, ...balances } })
  }

  render() {
    const { usdt, brl, balances } = this.state
    const { classes } = this.props
    const poolProps = { onUpdate: this.onPoolUpdate }
    return (
      <AppContext.Provider value={{ usdt, brl }}>
        <div className={classes.root}>
          <Ethereum />
          <Pool pool="Pool2mine" {...poolProps} autoUpdate />
          <Pool pool="Flexpool" {...poolProps} /* autoUpdate */ />
          <Pool pool="Sparkpool" {...poolProps} /* autoUpdate */ />
          <Pool pool="Garimpool" {...poolProps} /* autoUpdate */ />
          <Wallet balances={balances} />
          <Rig />
        </div>
      </AppContext.Provider>
    )
  }
}
