import SideBar from "./SideBar"

const HeroSection = () => {
    return (
        <div className="flex flex-row h-full w-full">
            <div className="flex flex-col h-full w-[270px] border-r justify-end">
                <SideBar />
            </div>
            <div>
                sample 2
            </div>
        </div>
    )
}

export default HeroSection