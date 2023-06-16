import { FunctionComponent, useState } from 'react'

import classes from './quantifier.module.scss'

interface Props {
  removeProductCallback: (itemId: number) => void
  productId: number
}

export const Quantifier: FunctionComponent<Props> = ({ removeProductCallback, productId }) => {
  const [value, setValue] = useState<number>(1)

  const reduce = ():void => {
    setValue(prevState => prevState - 1)
    if (value === 0) {
      removeProductCallback(productId)
    }
  }

  const increase = ():void => {
    setValue(prevState => prevState + 1)
  }

  return (
    <div className={classes.quantifier}>
      <input type="button" value="-" className={classes.buttonMinus} onClick={reduce} />
      <input type="number" step="1" max="" value={value} onChange={e => setValue(parseInt(e.target.value))} className={classes.quantityField} />
      <input type="button" value="+" className={classes.buttonPlus} onClick={increase} />
    </div>
  )
}
