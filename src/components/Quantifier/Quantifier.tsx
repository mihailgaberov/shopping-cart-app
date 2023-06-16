import { FunctionComponent, useState } from 'react'

import classes from './quantifier.module.scss'

interface Props {
  removeItemCallback: (itemId: number) => void
  itemId: number
}

export const Quantifier: FunctionComponent<Props> = ({ removeItemCallback, itemId }) => {
  const [value, setValue] = useState<number>(1)

  const reduce = ():void => {
    setValue(prevState => prevState - 1)

    console.log(">>> minus: ", value)

    if (value === 0) {
      removeItemCallback(itemId)
    }
  }

  const increase = ():void => {
    setValue(prevState => prevState + 1)

    console.log(">>> plus: ", value)
  }

  return (
    <div className={classes.quantifier}>
      <input type="button" value="-" className={classes.buttonMinus} onClick={reduce} />
      <input type="number" step="1" max="" value={value} onChange={e => setValue(parseInt(e.target.value))} className={classes.quantityField} />
      <input type="button" value="+" className={classes.buttonPlus} onClick={increase} />
    </div>
  )
}
