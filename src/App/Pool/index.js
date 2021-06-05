import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { PoolComponent } from './PoolComponent'
import { style } from './style'

export const Pool = compose(withStyles(style))(PoolComponent)
