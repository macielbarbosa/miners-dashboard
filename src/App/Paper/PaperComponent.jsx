import { Paper, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export class PaperComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, children } = this.props
    return <Paper className={classes.root}>{children}</Paper>
  }
}
