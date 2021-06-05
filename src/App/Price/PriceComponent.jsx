import React, { Component } from 'react'
import { Tooltip } from '@material-ui/core'

export class PriceComponent extends Component {
  static defaultProps = { value: 1 }
  get usdt() {
    const { value } = this.props
    const { usdt } = this.state
    return (value * usdt).toFixed(2)
  }

  get brl() {
    const { value } = this.props
    const { brl } = this.state
    return (value * brl).toFixed(2)
  }

  formated = (price) => (this.props.value * price).toFixed(2)

  render() {
    const {
      value,
      appContext: { brl, usdt },
      classes,
    } = this.props
    return (
      <span className={classes.root}>
        {value.toFixed(5)} ≈{' '}
        <Tooltip title={'R$' + this.formated(brl)}>
          <span>{'$' + this.formated(usdt)}</span>
        </Tooltip>
      </span>
    )
  }
}
