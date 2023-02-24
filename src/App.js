import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { StudentsList } from "./components/StudentsList";
import { StudentsFilter } from "./components/StudentsFilter";
import { DonorHome } from "./components/DonorHome";
import { DonorRegistrationForm } from "./components/DonorRegistrationForm";
import { DonorLoginForm } from "./components/DonorLoginForm";

function App() {
  return (
      <>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<DonorHome></DonorHome>}></Route>
            <Route path='/register' element={<DonorRegistrationForm></DonorRegistrationForm>}></Route>
            <Route path='/login' element={<DonorLoginForm></DonorLoginForm>}></Route>
            <Route path='/students-list' element={<StudentsList></StudentsList>}></Route>
            <Route path='/students-filter' element={<StudentsFilter></StudentsFilter>}></Route>
          </Routes>
        </BrowserRouter>
      </>    
  );
}

export default App;
