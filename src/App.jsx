import { useState } from 'react'
import { Button } from 'semantic-ui-react'
import {ToastContainer} from "react-toastify"
import { AuthProvider } from './context'
import "./App.scss"
import {Navigation} from './routes'
import {ClientLayout} from "./layouts"

function App() {
  return (
    <AuthProvider>
      <Navigation/>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthProvider>
  )
}

export default App
