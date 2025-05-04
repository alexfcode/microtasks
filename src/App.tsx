import { useState } from 'react';
import './App.css';
import { NewComponent } from './components/NewComponent';

export type FilterType = "all" | "dollar" | "ruble"

export type MoneyType = {
  banknote: string
  nominal: number
  number: string
}

export const App = () => {

  const [money, setMoney] = useState([
    { banknote: "dollar", nominal: 100, number: "a123456789" },
    { banknote: "dollar", nominal: 50, number: "b123456789" },
    { banknote: "ruble", nominal: 100, number: "c123456789" },
    { banknote: "dollar", nominal: 100, number: "d123456789" },
    { banknote: "dollar", nominal: 50, number: "e123456789" },
    { banknote: "ruble", nominal: 100, number: "f123456789" },
    { banknote: "dollar", nominal: 50, number: "j123456789" },
    { banknote: "ruble", nominal: 50, number: "h123456789" }
  ])


  const [filter, seFilter] = useState("all")

  let filteredMoney = money

  if (filter === "ruble") {
    filteredMoney = money.filter((mon) => mon.banknote === "ruble")
  }
  if (filter === "dollar") {
    filteredMoney = money.filter((mon) => mon.banknote === "dollar")
  }

  const onClickFilterHandler = (buttonName: FilterType) => {
    seFilter(buttonName)
  }


  return (
    <div className='App'>
      <NewComponent filteredMoney={filteredMoney} onClickFilterHandler={onClickFilterHandler}/>
    </div>
  )
}