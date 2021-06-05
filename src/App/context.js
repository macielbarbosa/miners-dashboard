import React from 'react'
import { withContext } from '../utils/withContext'

export const AppContext = React.createContext()
AppContext.displayName = 'AppContext'
export const withAppContext = withContext(AppContext, 'appContext')
export const useAppContext = () => React.useContext(AppContext)
