import logo from '../../assets/logo.svg'
import search from '../../assets/svgs/search.svg';
import { FaPlus } from "react-icons/fa6";
import notification from '../../assets/images/notification.png';
import alertbutton from '../../assets/svgs/altert.svg';
import profilepic from '../../assets/images/profile.png';


const Navbar = () => {
    return (
        <>
            <div className="flex justify-between h-16 bg-navbar-gradient items-center">
                <div className='flex gap-20 ml-20'>
                    {/* Logo */}
                    <div className='flex gap-2 items-center hover:cursor-pointer'>
                        <div className=''>
                            <img src={logo}/>
                        </div>
                        <div className='text-white text-head2'>
                            Protrack
                        </div>
                    </div>

                    {/* Search bar */}
                    <div>
                        <div className='flex h-10 items-center gap-3 bg-white p-3 rounded-3xl w-96'>
                            <img src={search} height={"22px"} width={"22px"} className='hover:cursor-pointer'/>
                            <input type='text' placeholder='Search' className='h-8 w-full focus:outline-none'></input>
                        </div>
                    </div>
                </div>

                {/* Right side of navbar */}
                <div className="flex items-center gap-5 mr-7">

                    {/* add task */}
                    <div className='px-3 py-2.5 bg-primary-brand rounded-lg text-white'>
                        <div className='flex gap-3 hover:cursor-pointer'>
                            <FaPlus className='font-bold' />
                            <p className='text-button'>ADD TASKS</p>
                        </div>
                    </div>
                    {/* Notification */}
                    <div>
                        <div className='relative hover:cursor-pointer'>
                            <img src={alertbutton} height={'12px'} width={'12px'} className='absolute right-0 top-0'/>
                            <img src={notification} height={'22px'} width={'22px'}/>
                        </div>
                    </div>

                    {/* Profile */}
                    <div>
                        <img src={profilepic} height={'44px'} width={'44px'} className='hover:cursor-pointer'/>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Navbar