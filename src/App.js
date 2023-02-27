import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import { StudentsList } from "./components/StudentsList";
// import { StudentsFilter } from "./components/StudentsFilter";
import { DonorHome } from "./components/DonorHome";
import { DonorRegistrationForm } from "./components/DonorRegistrationForm";
import { DonorLoginForm } from "./components/DonorLoginForm";
import { BrowseCausesPage } from "./components/BrowseCausesPage";
import { DonorDetails } from "./components/DonorDetails";
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
          <Route
            path="/donor-registration-from"
            element={<DonorRegistrationForm></DonorRegistrationForm>}
          ></Route>
          <Route
            path="/donor-login"
            element={<DonorLoginForm></DonorLoginForm>}
          ></Route>
          <Route
            path="/browse-causes"
            element={<BrowseCausesPage></BrowseCausesPage>}
          ></Route>
          <Route
            path="/donor-details"
            element={<DonorDetails></DonorDetails>}
          ></Route>

          {/* <Route path='/students-list' element={<StudentsList></StudentsList>}></Route>
            <Route path='/students-filter' element={<StudentsFilter></StudentsFilter>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
