import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import { DonorHome } from "./components/DonorHome";
import { DonorRegistrationForm } from "./components/DonorRegistrationForm";
import { DonorLoginForm } from "./components/DonorLoginForm";
// import { AdminLoginForm } from "./components/Admin/AdminLoginForm"
// import { AdminViewDonationsMade } from "./components/Admin/AdminViewDonationsMade";
// import { AdminViewDonors } from "./components/Admin/AdminViewDonors";

function App() {
  return (
      <>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<DonorHome></DonorHome>}></Route>
            <Route path='/donorregister' element={<DonorRegistrationForm></DonorRegistrationForm>}></Route>
            <Route path='/donorlogin' element={<DonorLoginForm></DonorLoginForm>}></Route>
           

            {/* <Route path='/adminLogin' element={<AdminLoginForm></AdminLoginForm>}></Route>
            <Route path='/adminViewDonations' element={<AdminViewDonationsMade></AdminViewDonationsMade>}></Route>
            <Route path='/adminViewDonors' element={<AdminViewDonors/>}></Route> */}
          </Routes>
        </BrowserRouter>
      </>    
  );
}

export default App;
