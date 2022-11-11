import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/index";
import Dashboard from "./pages/dashboard/index";
import UserProfile from "./pages/users/index";
import Error from "./pages/404/index";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/user" element={<UserProfile  />} />
      <Route path="dashboard/user/:id" element={<UserProfile  />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
