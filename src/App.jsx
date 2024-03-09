import './App.css'
import Card from './components/Card';
import nature from './assets/nature.jpg';

import data from './data/data.json';

function App() {

  const data = [
    {
      thumb: nature,
      title: "Tabiat rasmi",
      desc: "Yaxshi rasm emas"
    },
    {
      thumb: nature,
      title: "Hayvon rasmi",
      desc: "Yaxshi rasmi emas"
    }
  ]

  return (
    <>
      {
        data.map((v, i) => {
          return (
            <Card data = {v} key = {i}/>
          )
        })
      }
    </>
  )
}

export default App
