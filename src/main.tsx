import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Normal from "./page/Normal";
import New from "./page/New";
import '@fontsource/barlow-semi-condensed/600.css'
import '@fontsource/barlow-semi-condensed/700.css'
import "./index.css"

createRoot(document.getElementById('root') as HTMLElement)
.render(
  <BrowserRouter>
    <Routes>
      <Route path="/new" element={<New />} />
      <Route path="/" element={<Normal />} />
    </Routes>
  </BrowserRouter>
)
