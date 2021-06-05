import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { AppComponent } from './AppComponent'
import { style } from './style'

export const App = compose(
  withStyles(style),
)(AppComponent)

