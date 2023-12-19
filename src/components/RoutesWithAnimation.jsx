import { Route, Routes, useLocation } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

export default function RoutesWithAnimation() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/detail" element={<Detail></Detail>}></Route>
    </Routes>
  );
}
