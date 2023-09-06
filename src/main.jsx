import React from 'react'
import ReactDOM from 'react-dom/client'
import WhyUseEffect from './WhyUseEffect'
import Niji from './Niji'
import Hooks from './Hooks'
import ArrMethods from './ArrMethods'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <>
    <WhyUseEffect />
    <Niji />
    <Hooks />
    <ArrMethods />
  </>
  //</React.StrictMode>,
)

