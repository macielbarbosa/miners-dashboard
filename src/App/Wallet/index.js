import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { WalletComponent } from './WalletComponent'
import { style } from './style'

export const Wallet = compose(withStyles(style))(WalletComponent)
