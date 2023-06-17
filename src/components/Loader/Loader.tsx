import { FunctionComponent } from 'react'
import classes from './loader.module.scss'

export const Loader:FunctionComponent = () => (
    <div className={classes.loader}>
      <div className={classes.spinner}></div>
    </div>
  )
