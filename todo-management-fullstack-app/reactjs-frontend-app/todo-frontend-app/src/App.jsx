import "bootstrap/dist/css/bootstrap.min.css";
import ListTodoComponent from "./components/ListTodoComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTodoComponent from "./components/CreateTodoComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<ListTodoComponent />}></Route>
        <Route path="/todos" element={<ListTodoComponent />}></Route>
        <Route path="/add-todo" element={<CreateTodoComponent />}></Route>
        <Route path="/edit-todo/:id" element={<CreateTodoComponent />}></Route>
      </Routes>
      <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
