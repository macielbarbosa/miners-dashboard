import { withStyles } from '@material-ui/core/styles'
import { withAppContext } from '../context'
import { compose } from 'redux'
import { PriceComponent } from './PriceComponent'
import { style } from './style'

export const Price = compose(withStyles(style), withAppContext)(PriceComponent)
