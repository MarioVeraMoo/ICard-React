import { useState } from 'react'
import { Button } from 'semantic-ui-react'
import "./App.scss"
import {Navigation} from './routes'
import {ClientLayout} from "./layouts"

function App() {
  return (
    <div className=''>
      <Navigation/>
    </div>
  )
}

export default App
