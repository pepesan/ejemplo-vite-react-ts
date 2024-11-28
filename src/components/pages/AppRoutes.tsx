import {Route, Routes} from "react-router";
import {About, Home, NotFound} from "./Pages.tsx";

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound/>}/>
      </Routes>
  )
}

export default AppRoutes;