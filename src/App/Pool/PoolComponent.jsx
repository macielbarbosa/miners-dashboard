import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { SECONDS_UPDATE_BALANCE } from '../../utils/constants'
import { Paper } from '../Paper'
import images from '../../images'
import { getBalance } from './getBalance'
import { Price } from '../Price'

export class PoolComponent extends Component {
  static defaultProps = { autoUpdate: false }
  intervalRegressiveCounter = null

  constructor(props) {
    super(props)
    this.state = {
      updateIn: 0,
      balance: 0,
    }
  }

  componentDidMount = () => {
    this.getDate()
  }

  initRegressiveCounter = () => {
    this.setState({ updateIn: SECONDS_UPDATE_BALANCE })
    this.intervalRegressiveCounter = setInterval(this.regressiveCounter, 1000)
  }

  regressiveCounter = () => {
    const { updateIn } = this.state
    if (updateIn > 0) this.setState({ updateIn: updateIn - 1 })
    else {
      clearInterval(this.intervalRegressiveCounter)
      this.getDate()
    }
  }

  getDate = async () => {
    const { autoUpdate, pool } = this.props
    if (pool === 'Garimpool') {
      const balance = 0.02901214
      this.props.onUpdate({ [pool]: balance })
      this.setState({ balance })
      return
    }
    const balance = await getBalance(pool)
    this.props.onUpdate({ [pool]: balance })
    this.setState({ balance })
    if (autoUpdate) this.initRegressiveCounter()
  }

  get logo() {
    const { pool } = this.props
    return images[pool.toLowerCase()]
  }

  render() {
    const { classes, pool, autoUpdate } = this.props
    const { balance, updateIn } = this.state
    return (
      <Paper classes={{ root: classes.root }}>
        <div className={classes.header}>
          <img src={this.logo} alt="Logo Ethereum" />
          <Typography variant="h6">{pool}</Typography>
        </div>
        {/*autoUpdate && <Typography variant="body1">Atualiza em {updateIn} segundos</Typography>*/}
        <Typography variant="body1">
          Unpaid: <Price value={balance} />
        </Typography>
      </Paper>
    )
  }
}
