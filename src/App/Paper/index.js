import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { PaperComponent } from './PaperComponent'
import { style } from './style'

export const Paper = compose(withStyles(style))(PaperComponent)
