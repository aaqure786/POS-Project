import './App.css';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Registration from './components/Registration';
import RepaiStatus from './components/RepaiStatus';
import Login from './components/login';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home1 from './components/dashboard/Home'; 
import Dashboard from './components/dashboard/Dashboard'; 
import User from './components/dashboard/Users/User';
import AddorEditUsers from './components/dashboard/Users/AddorEditUsers';
import ViewUser from './components/dashboard/Users/ViewUser';
import AllRoles from './components/dashboard/Roles/AllRoles';
import AddorEditRoles from './components/dashboard/Roles/AddorEditRoles';
import SalesCommission from './components/dashboard/Sales Commission Agent/SalesCommission';
import Contact from './components/dashboard/contacts/Contact';
import ViewContact from './components/dashboard/contacts/ViewContact';
import LedgerTab from './components/dashboard/contacts/LedgerTab';
import PurchasesTab from './components/dashboard/contacts/PurchasesTab';
import StockReportTab from './components/dashboard/contacts/StockReportTab';
import DocTable from './components/dashboard/Tables/DocTable';
import PaymentsTab from './components/dashboard/contacts/PaymentsTab';
import ActivitiesTable from './components/dashboard/Tables/ActivitiesTable';
import SalesTab from './components/dashboard/contacts/SalesTab';
import RewardsTab from './components/dashboard/contacts/RewardsTab';


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
          <Route path='/home' element={<Home1 />} >
            <Route path='' element={<Dashboard />} />
            <Route path='/home/users' element={<User />} />
            <Route path='/home/users/addusers' element={<AddorEditUsers />} />
            <Route path='/home/users/edituser/:id' element={<AddorEditUsers />} />
            <Route path='/home/users/viewuser/:id' element={<ViewUser />} />
            <Route path='/home/roles' element={<AllRoles />} />
            <Route path='/home/roles/addroles' element={<AddorEditRoles />} />
            <Route path='/home/roles/editroles/:id' element={<AddorEditRoles />} />
            <Route path='/home/sales-commission-agents' element={<SalesCommission />} />
            <Route path='/home/contact/:type' element={<Contact />} />
            <Route path='/home/contact/view/:id' element={<ViewContact />} >
                <Route path='/home/contact/view/:id/ledger_tab' element={<LedgerTab />} />
                <Route path='/home/contact/view/:id/purchase_tab' element={<PurchasesTab />} />
                <Route path='/home/contact/view/:id/stock_report_tab' element={<StockReportTab />} />
                <Route path='/home/contact/view/:id/document_tab' element={<DocTable />} />
                <Route path='/home/contact/view/:id/payment_tab' element={<PaymentsTab />} />
                <Route path='/home/contact/view/:id/activities_tab' element={<ActivitiesTable />} />
                <Route path='/home/contact/view/:id/sales_tab' element={<SalesTab />} />
                <Route path='/home/contact/view/:id/rewards_tab' element={<RewardsTab />} />

            </Route>
            
            
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
