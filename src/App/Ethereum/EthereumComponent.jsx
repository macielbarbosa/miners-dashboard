import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Paper } from '../Paper'
import ethereum from '../../images/ethereum.png'
import { Price } from '../Price'

export class EthereumComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { price, classes } = this.props
    return (
      <Paper>
        <div className={classes.header}>
          <img src={ethereum} alt="Logo Ethereum" />
          <Typography variant="h6">Ethereum</Typography>
        </div>
        <Typography variant="body1">
          <Price />
        </Typography>
      </Paper>
    )
  }
}
