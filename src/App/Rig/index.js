import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { RigComponent } from './RigComponent'
import { style } from './style'

export const Rig = compose(withStyles(style))(RigComponent)
