import homeicon from '../../assets/svgs/home-icon.svg';
import tasksicon from '../../assets/svgs/tasks-icon.svg';
import notesicon from '../../assets/svgs/notes.svg';
import calendericon from '../../assets/svgs/calender.svg';


const SideBar = () => {

    const navItems = [
        {
            name:'Home',
            img: homeicon
        },
        {
            name: 'Calendar',
            img: calendericon
        },
        {
            name: 'Tasks',
            img: tasksicon
        },
        {
            name: 'Notes',
            img: notesicon
        },
    ]
    const selected = 'Home';

    return (
        <div className='flex h-full justify-center'>
            <div className='flex flex-col mt-10 border-b'>
                {
                    navItems.map((navItem,index)=>(
                        <div key={index} className={`flex items-center w-52 gap-2 px-5 py-3 rounded-xl hover:cursor-pointer ${selected == navItem.name ?'bg-primary-brand-75':''}`}>
                            <img src={navItem.img} height={"22px"} width={"22px"}></img>
                            <p className={`text-head3 text-tx-main ${selected == navItem.name ? 'text-white' : ''}`}>{navItem.name}</p>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default SideBar