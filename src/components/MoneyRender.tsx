import React from 'react'
import { FilterType, MoneyType } from '../App'

type MoneyRenderPropsType = {
    filteredMoney: MoneyType[]
    onClickHandler: (buttonName: FilterType) => void
}

export const MoneyRender = ({filteredMoney, onClickHandler}: MoneyRenderPropsType) => {
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
      <button onClick={() => onClickHandler("all")}>All</button>
      <button onClick={() => onClickHandler("ruble")}>Roubles</button>
      <button onClick={() => onClickHandler("dollar")}>Dollars</button>
    </>
  )
}
