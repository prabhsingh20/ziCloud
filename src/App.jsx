import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllChats from "./pages/AllChats";
import Calender from "./pages/Calender";
import HomePage from "./pages/HomePage";
import Meet from "./pages/Meet";
import Rating from "./pages/Rating";
import Saved from "./pages/Saved";
import Work from "./pages/Work";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="allChats" element={<AllChats />} />
          <Route path="work" element={<Work />} />
          <Route path="meet" element={<Meet />} />
          <Route path="calender" element={<Calender />} />
          <Route path="rating" element={<Rating />} />
          <Route path="saved" element={<Saved />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
