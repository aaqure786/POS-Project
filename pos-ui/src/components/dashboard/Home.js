import Navbra from './Navbar'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
   return (
        <div className='overflow-y-hidden'>
            <Navbra  />
            <div className='flex max-h-[88vh]'>
                <div className='w-[20%] overflow-y-auto'>
                    <SideBar />
                </div>
                <div className='w-[80%] overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Dashboard