import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Paper } from '../Paper'
import trex from '../../images/trex.png'
import { TREX_SUMMARY_URL, SECONDS_UPDATE_RIG } from '../../utils/constants'
import { get } from '../../utils/get'
import os from 'os'

export class RigComponent extends Component {
  intervalSummary = null

  constructor(props) {
    super(props)
    document.title = 'Rig dos Sonhos'
    this.state = {
      gpus: [],
      activePool: { worker: 'Worker' },
    }
  }

  componentDidMount = () => {
    this.intervalSummary = setInterval(this.getSummary, SECONDS_UPDATE_RIG * 1000)
  }

  getSummary = async () => {
    try {
      const { gpus, active_pool: activePool } = await get(TREX_SUMMARY_URL, { noCors: false })
      this.setState({ gpus, activePool })
    } catch (error) {
      console.warn('O T-Rex Miner não respondeu.')
    }
  }

  render() {
    const { classes } = this.props
    const {
      gpus,
      activePool: { worker },
    } = this.state
    return (
      <Paper>
        <div className={classes.header}>
          <img src={trex} alt="Logo T-Rex" />
          <Typography variant="h6">{worker}</Typography>
        </div>
        {gpus.map(({ name, temperature }, index) => (
          <Typography variant="body1" key={index}>
            {name} &rarr; {temperature}°C
          </Typography>
        ))}
      </Paper>
    )
  }
}
