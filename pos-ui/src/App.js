import './App.css';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Registration from './components/Registration';
import RepaiStatus from './components/RepaiStatus';
import Login from './components/login';
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/business/Register' element={<Registration />} />
          <Route path='/repair-status' element={<RepaiStatus />} />
          {/* <Route path='/dashboard' element={<Dashboard />} >
            <Route path='' element={<MainDashboard />} />
            <Route path='mainDashboard' element={<MainDashboard />} />
            <Route path='manageOffice' element={<MangeOffice />} >
              <Route path='' element={<AllOffices />} />
              <Route path='addoffice' element={<AddOffice />} />
              <Route path='showOffice/:id' element={<ShowOffice />} />
              <Route path='editOffice/:id' element={<EditOffice />} />
              
            </Route>
            <Route path='officeManager' element={<OfficeManager />} >
              <Route path='' element={<AllManagers />} />
              <Route path='addManager' element={<AddManager />} />
              <Route path='showManager/:id' element={<ShowManager />} />
              <Route path='editManager/:id' element={<EditManager />} />
              
            </Route>
            <Route path='shipment' element={<Shipment />} >
              <Route path='' element={<AllShipment />} />
              <Route path='addShipment' element={<AddShipment />} />
              <Route path='showShipment/:id' element={<ShowShipment />} />
              <Route path='editShipment/:id' element={<EditShipment />} />
              <Route path='searchbyconsignment/' element={<SeacrhConsignment />} />
              <Route path='updateStatus/' element={<UpdateStatus />} />
              
              searchbyconsignment
              
            </Route>
            <Route path='customer' element={<Customer />} >
              <Route path='' element={<AllCustomer />} />
              <Route path='addCustomer' element={<AddCustomer />} />
              <Route path='showCustomer/:id' element={<ShowCustomer />} />
              <Route path='editCustomer/:id' element={<EditCustomer />} />
              <Route path='updateCustomerStatus' element={<Approve />} />
              
            </Route>
            <Route path='courier' element={<Courier />} >
              <Route path='' element={<AllCourier />} />
              <Route path='addCourier' element={<AddCourier/>} />
              <Route path='showCourier/:id' element={<ShowCourier />} />
              <Route path='editCourier/:id' element={<EditCourier />} />
              
            </Route>
            <Route path='report' element={<Report />} >
              <Route path='' element={<StatusReport />} />
              <Route path='consignmentReport' element={<ConsignmentReport/>} />
              <Route path='customerReport' element={<CustomerReport />} />
              <Route path='pickupReport' element={<PickupReport />} />
              <Route path='statusReport' element={<StatusReport />} />
              
            </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
