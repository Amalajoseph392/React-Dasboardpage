

import React, {useState} from 'react'
import Navbar from './Navbar';
import {AiOutlineMenu} from '/node_modules/react-icons/ai';
import { AiOutlineSearch,AiOutlineClose ,AiFillTag, AiFillDatabase} from 'react-icons/ai';
import { BsFillSaveFill, BsGridFill,BsFillCollectionFill} from 'react-icons/bs';
import {RiDashboard3Fill} from 'react-icons/ri';
import { HiArrowNarrowRight,HiClipboardList} from 'react-icons/hi';
import {BiDiamond,BiSolidUser} from 'react-icons/bi';
import {FaUserFriends,FaWallet,FaShoppingBag} from 'react-icons/fa';
import {MdFavorite,MdHelp} from 'react-icons/md';
import {TbArrowBarRight} from 'react-icons/tb';

import {IoMdHelpBuoy} from 'react-icons/io';


function Sidebar(props) {
    const nav=props.nav;

   
  return (

 <div className='fixed  left-0 w-[250px] h-screen bg-white z-10 duration-300'>   


<nav>
<ul className='flex flex-col p-4 text-gray-600'>
<li className='text-base py-3 flex cursor-pointer hover:bg-gray-200 hover:rounded-lg '><RiDashboard3Fill size={25} className='mr-4'/>Dashboard</li>
<li className='text-base py-3 flex  cursor-pointer hover:bg-gray-200 hover:rounded-lg '><BsGridFill size={25} className='mr-4'/>Kanban  <button className='bg-gray-300 rounded-xl w-10 ml-[76px]'> Pro</button></li>
<li className='text-base py-3 flex  cursor-pointer hover:bg-gray-200 hover:rounded-lg '><HiArrowNarrowRight size={25} className='mr-4'/>Inbox <button className='bg-gray-300 rounded-xl w-10 ml-[90px]'> Pro</button></li>
<li className='text-base py-3 flex  cursor-pointer hover:bg-gray-200 hover:rounded-lg '><BiSolidUser size={25} className='mr-4'/>Users</li>
<li className='text-base py-3 flex cursor-pointer hover:bg-gray-200 hover:rounded-lg  '><FaShoppingBag size={25} className='mr-4'/>Products</li>
<li className='text-base py-3 flex  cursor-pointer hover:bg-gray-200 hover:rounded-lg '><TbArrowBarRight size={25} className='mr-4'/>Signin</li>
<li className='text-base py-3 flex cursor-pointer hover:bg-gray-200 hover:rounded-lg'><AiFillDatabase size={25} className='mr-4'/>Signup</li>

<hr></hr>
<li className='text-base py-3 flex cursor-pointer hover:bg-gray-200 hover:rounded-lg'><BiDiamond size={25} className='mr-4'/>Upgrade to Pro</li>
<li className='text-base py-3 flex cursor-pointer hover:bg-gray-200 hover:rounded-lg'><HiClipboardList size={25} className='mr-4'/>Documentation</li>
<li className='text-base py-3 flex cursor-pointer hover:bg-gray-200 hover:rounded-lg'><BsFillCollectionFill size={25} className='mr-4'/>Components</li>
<li className='text-base py-3 flex cursor-pointer hover:bg-gray-200 hover:rounded-lg '><IoMdHelpBuoy size={25} className='mr-4'/>Help</li>




</ul>
<div className="absolute top-0 left-[250px] -ml-0.5 w-0.5 h-screen bg-gray-100"></div>
</nav>

    


</div>


      
    
  )
}

export default Sidebar
