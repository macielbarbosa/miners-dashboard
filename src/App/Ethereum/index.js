import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { EthereumComponent } from './EthereumComponent'
import { style } from './style'

export const Ethereum = compose(withStyles(style))(EthereumComponent)
