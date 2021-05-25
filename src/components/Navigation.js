import Image from 'next/image'
import {MenuAlt2Icon, SearchIcon,} from '@heroicons/react/outline'
import { useState } from 'react'





function Navigation() {

    const [showMenu, setShowMenu] = useState(true)




    return (

        <>


        {/*Top bar */}
        <header className="flex items-center bg-amazon_blue h-18 flex-grow p-2 sticky top-0 left-0 z-50">

            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            
                <Image 
                    src='https://links.papareact.com/f90'
                    width = {120}
                    height ={30}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>


            <div className="hidden sm:flex items-center h-8 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500"  >
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none text-xs" />
                <SearchIcon className="h-8 p-2"/>
            </div>


            <div className="text-white">
                <MenuAlt2Icon className="h-6 mx-12 cursor-pointer" onClick={() => setShowMenu(!showMenu)}   />
            </div>



        </header>




        {/* Side navigation */}


        <div className={`sideNav ${showMenu && 'hideNav'} `}>
            <p className="cursor-pointer  my-3">Hello ramesh</p>
            <p className="cursor-pointer  my-3">Orders</p>
            <p className="cursor-pointer  my-3">About</p>
            <p className="cursor-pointer  my-3">Cart</p>
        </div>


        </>
    )
}






export default Navigation
