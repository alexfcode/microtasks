import React from 'react'
import { FilterType, MoneyType } from '../App'

type NewComponentPropsType = {
    filteredMoney: MoneyType[]
    onClickFilterHandler: (name: FilterType) => void
}

export const NewComponent = ({filteredMoney, onClickFilterHandler}: NewComponentPropsType) => {
    return (
        <>
            <ul>
                {filteredMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}-</span>
                            <span>{objFromMoneyArr.nominal}-</span>
                            <span>{objFromMoneyArr.number}-</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => onClickFilterHandler("all")}>All</button>
            <button onClick={() => onClickFilterHandler("ruble")}>Rubles</button>
            <button onClick={() => onClickFilterHandler("dollar")}>Dollars</button>
        </>
    )
}
