import { useState } from 'react';
import './App.css';
import { MoneyRender } from './components/MoneyRender';


export type MoneyType = {
  banknote: string 
  nominal: number 
  number: string
}

export type FilterType = "all" | "ruble" | "dollar"

export const App = () => {

  const [money, setMoney] = useState<MoneyType[]>([
    { banknote: "dollar", nominal: 100, number: "a123456789" },
    { banknote: "dollar", nominal: 50, number: "b123456789" },
    { banknote: "ruble", nominal: 100, number: "c123456789" },
    { banknote: "dollar", nominal: 100, number: "d123456789" },
    { banknote: "dollar", nominal: 50, number: "e123456789" },
    { banknote: "ruble", nominal: 100, number: "f123456789" },
    { banknote: "dollar", nominal: 50, number: "j123456789" },
    { banknote: "ruble", nominal: 50, number: "h123456789" }
  ])


  const [filter, setFilter] = useState<FilterType>("all")

  let filteredMoney = money
 
  if (filter === "ruble") {
    filteredMoney = money.filter((mon) => mon.banknote === "ruble")
  }
  if (filter === "dollar") {
    filteredMoney = money.filter((mon) => mon.banknote === "dollar" )
  }
  
  const onClickFilterHandler = (buttonName: FilterType) => {
      setFilter(buttonName)
  }
  return (
    <div className='App'>
      <MoneyRender onClickFilterHandler={onClickFilterHandler} filteredMoney={filteredMoney}/>
    </div>
  )
}