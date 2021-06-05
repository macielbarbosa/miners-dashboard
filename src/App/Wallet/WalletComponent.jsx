import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Paper } from '../Paper'
import wallet from '../../images/wallet.png'
import { Price } from '../Price'

export class WalletComponent extends Component {
  constructor(props) {
    super(props)
  }

  get total() {
    return Object.values(this.props.balances).reduce((total, balance) => total + balance, 0)
  }

  render() {
    const { price, classes } = this.props
    return (
      <Paper>
        <div className={classes.header}>
          <img src={wallet} alt="Logo Ethereum" />
          <Typography variant="h6">Wallet</Typography>
        </div>
        <Typography variant="body1">
          Unpaid = <Price value={this.total} />
        </Typography>
      </Paper>
    )
  }
}
