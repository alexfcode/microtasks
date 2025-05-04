import React from 'react'
import { FilterType, MoneyType } from '../App'
import { Button } from './Button'

type MoneyRenderPropsType = {
    filteredMoney: MoneyType[]
    onClickFilterHandler: (buttonName: FilterType) => void
}

export const MoneyRender = ({filteredMoney, onClickFilterHandler}: MoneyRenderPropsType) => {
  return (
    <>
    <ul>
        {filteredMoney.map((objFromMoneyArr) => {
          return (
            <li>
              <span>{objFromMoneyArr.banknote}</span>
              <span>{objFromMoneyArr.nominal}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          )
        })}
      </ul>
      <Button name="All" callback={() => onClickFilterHandler("all")}/>
      <Button name="Roubles" callback={() => onClickFilterHandler("ruble")}/>
      <Button name="Dollars" callback={() => onClickFilterHandler("dollar")}/>

    </>
  )
}
