import {  Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import {StyleSheetManager} from "styled-components";

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>Loading....</div>}>

    <BrowserRouter>
    <StyleSheetManager shouldForwardProp={(prop)=>prop!=="shake"}>
    <App />
    </StyleSheetManager>
    </BrowserRouter>
  </Suspense>
  
)
