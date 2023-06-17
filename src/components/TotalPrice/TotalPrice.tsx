import { FunctionComponent } from 'react'

import { CurrencyFormatter } from '../CurrencyFormatter'
import classes from './total-price.module.scss'

interface Props {
  amount: number
}

export const TotalPrice: FunctionComponent<Props> = ({ amount }) => {
return <div className={classes.totalPrice}>Total: {<CurrencyFormatter amount={amount} />}</div>
}
