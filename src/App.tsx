import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowDetails from "./ShowDetails";
import ShowsList from "./ShowsList"


function App() {

  return (
    <BrowserRouter>
    <div>
      <Routes>
   <Route index element ={<ShowsList />} />
    <Route path="/shows/:id" element ={<ShowDetails />} />
</Routes >
    </div>
    </BrowserRouter>
  )
}

export default App;
