import './App.css';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Registration from './components/Registration';
import RepaiStatus from './components/RepaiStatus';
import Login from './components/login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
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
import AddorEditPurchase from './components/dashboard/Purchases/AddorEditPurchase';
import ImporContact from './components/dashboard/contacts/ImportContact';
import CustomerGroup from './components/dashboard/contacts/CustomerGroup';
import AddorEditSell from './components/dashboard/sell/AddorEditSell';
import AddorEditProduct from './components/dashboard/Product/AddorEditProduct';
import PurchaseOrder from './components/dashboard/Purchases/PurchaseOrder';
import AddorEditPurchaseOrder from './components/dashboard/Purchases/AddorEditPurchaseOrder';
import Purchase from './components/dashboard/Purchases/Purchase';
import PurchaseReturn from './components/dashboard/Purchases/PurchaseReturn';
import AddorEditPucReturn from './components/dashboard/Purchases/AddorEditPucReturn';
import Product from './components/dashboard/Product/Product';
import UpdatePrice from './components/dashboard/Product/UpdatePrice';
import ImportProducts from './components/dashboard/Product/ImportProducts';
import ImportOpeningStock from './components/dashboard/Product/ImportOpeningStock';
import PrintLables from './components/dashboard/Product/PrintLables';
import Variations from './components/dashboard/Product/variations/Variations';
import Units from './components/dashboard/Product/units/Units';
import SellingPriceGrp from './components/dashboard/Product/sellingPriceGrp/SellingPriceGrp';
import Categories from './components/dashboard/Product/category/Categories';
import Brand from './components/dashboard/Product/brands/Brand';
import Warranties from './components/dashboard/Product/warranties/Warranties';
import AddorEditSellingPriceGrps from './components/dashboard/Product/AddorEditSellingPriceGrps';
import AddOpeningStock from './components/dashboard/Product/openingStock/AddOpeningStock';


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
              <Route path='/home/contact/view/:id' element={<LedgerTab />} />
              <Route path='/home/contact/view/:id/ledger_tab' element={<LedgerTab />} />
              <Route path='/home/contact/view/:id/purchase_tab' element={<PurchasesTab />} />
              <Route path='/home/contact/view/:id/stock_report_tab' element={<StockReportTab />} />
              <Route path='/home/contact/view/:id/document_tab' element={<DocTable />} />
              <Route path='/home/contact/view/:id/payment_tab' element={<PaymentsTab />} />
              <Route path='/home/contact/view/:id/activities_tab' element={<ActivitiesTable />} />
              <Route path='/home/contact/view/:id/sales_tab' element={<SalesTab />} />
              <Route path='/home/contact/view/:id/rewards_tab' element={<RewardsTab />} />

            </Route>
            <Route path='/home/contact/import' element={<ImporContact />} />
            <Route path='/home/contact/customer-group' element={<CustomerGroup />} />
            
            <Route path='/home/purchase' element={<Purchase />} />

            <Route path='/home/purchase/create' element={<AddorEditPurchase />} />
            <Route path='/home/purchase/edit/:id' element={<AddorEditPurchase />} />
            <Route path='/home/sells/create' element={<AddorEditSell />} />
            <Route path='/home/sells/edit/:id' element={<AddorEditSell />} />
            <Route path='/home/products/create' element={<AddorEditProduct />} />
            <Route path='/home/purchase-order' element={<PurchaseOrder />} />
            <Route path='/home/purchase-order/create' element={<AddorEditPurchaseOrder />} />
            <Route path='/home/purchase-order/eidt/:id' element={<AddorEditPurchaseOrder />} />
            <Route path='/home/purchase-return' element={<PurchaseReturn />} />
            <Route path='/home/purchase-return/create' element={<AddorEditPucReturn />} />
            <Route path='/home/purchase-return/edit/:id' element={<AddorEditPucReturn />} />
            <Route path='/home/products' element={<Product/>} />
            <Route path='/home/update-product-price' element={<UpdatePrice/>} />
            <Route path='/home/import-products' element={<ImportProducts/>} />
            <Route path='/home/import-opening-stock' element={<ImportOpeningStock/>} />
            <Route path='/home/lables/show' element={<PrintLables/>} />
            <Route path='/home/variation-templates' element={<Variations />} />
            <Route path='/home/units' element={<Units />} />
            <Route path='/home/selling-price-group' element={<SellingPriceGrp />} />
            <Route path='/home/taxonomies/product' element={<Categories />} />
            <Route path='/home/brands' element={<Brand />} />
            <Route path='/home/warranties' element={<Warranties />} />
            <Route path='/home/products/add-selling-prices/:id' element={<AddorEditSellingPriceGrps />} />
            <Route path='/home/opening-stock/add/:id' element={<AddOpeningStock/>} />
            
            
 
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
