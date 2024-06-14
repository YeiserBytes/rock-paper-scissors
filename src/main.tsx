import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NormalMode from "./page/NormalMode";
import ExpantionMode from "./page/ExpantionMode";
import '@fontsource/barlow-semi-condensed/600.css'
import '@fontsource/barlow-semi-condensed/700.css'
import "./index.css"

createRoot(document.getElementById('root') as HTMLElement)
.render(
  <BrowserRouter>
    <Routes>
      <Route path="/bazinga" element={<ExpantionMode />} />
      <Route path="/" element={<NormalMode />} />
    </Routes>
  </BrowserRouter>
)
