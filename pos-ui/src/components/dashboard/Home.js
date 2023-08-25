import Navbra from './Navbar'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const clicked = useSelector((state)=>state.sidebar.value)
console.log(clicked)
   return (
        <div className='overflow-y-hidden'>
            <Navbra  />
            <div className='flex max-h-[558px]'>
                <div className='w-[17%] overflow-y-auto'>
                    <SideBar />
                </div>
                <div className='w-[83%] overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Dashboard