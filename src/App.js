import { Routes, Route } from "react-router-dom";
import GetOrders from "./Components/GetOrders";
import GetUsers from "./Components/GetUsers";
import PostUser from "./Components/PostUser";
import Overview from "./Components/Overview";
import GetSingleUser from "./Components/GetSingleUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/users" element={<GetUsers />} />
        <Route path="/orders" element={<GetOrders />} />
        <Route path="/users/create" element={<PostUser />} />
        <Route path="/users/:id" element={<GetSingleUser />} />
      </Routes>
    </div>
  );
}

export default App;
