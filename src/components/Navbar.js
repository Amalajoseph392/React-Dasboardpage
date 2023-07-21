import React, {useState} from 'react'
import {AiOutlineMenu} from '/node_modules/react-icons/ai';
import { AiOutlineSearch,AiOutlineClose ,AiFillTag, AiOutlineStar} from 'react-icons/ai';
import { BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import {BiDiamond} from 'react-icons/bi';
import {FaUserFriends,FaWallet} from 'react-icons/fa';
import {MdFavorite,MdHelp} from 'react-icons/md';
import Sidebar from './Sidebar';


function Navbar() {
    const[nav,setNav]=useState(false)
  return (
    
    <div className='Max-w-[1800px] bg-white  px-4 items-center'>
<div className='  px-4 items center mt-5'>
<div className='  flex justify-start '>
{/* left aide*/}


<div className=' flex items-center  bg-white  px-4  justify-start '>
<div onClick={()=>setNav(!nav)}className=' cursor-pointer lg:hidden '>
<HiOutlineMenuAlt1 size={30}/></div>
<img className='max-w-[25px]'src= "https://www.saashub.com/images/app/service_logos/195/kdigl8jl7ozy/large.png?1637322077" alt=""/>
<h1 className='text-2xl font-bold sm:text-2xl lg:text-2xl px-2 '>Windster</h1>




{/*Search Begins*/}



<AiOutlineSearch size={30} className='lg:hidden justify-end'/>


<div className=' bg-gray-100  hidden md:flex items-center py-1 ml-[100px] w-[100px] sm-w-[200px] pb-px lg:w-[300px] rounded-lg border border-black-100'>
<AiOutlineSearch size={20} className='mr-10' /><input className="bg-gray-100 outline-none"type="text" placeholder='Search'></input>
</div>

</div>










<div className='flex md:flex md:flex-grow flex-row justify-end space-x-5 items-center'>
<div>
<h1 className='hidden lg:flex '>Open Source ❤️ </h1>
</div>
{/*star*/}
<div className='hidden lg:flex items-center  text-[14px] border border-black-100 rounded-lg'>


<div className='bg-gray-200 text-black hidden md:flex items-center'>
<AiOutlineStar size={20} className='bg-gray-200 mr-2'/>Star</div>




<p className='p-2'>776</p>
</div>


<button className=' bg-cyan-700 text-white hidden md:flex items-center py-2 mx-4 rounded-lg '>
<BiDiamond size={20} className='mr-2 ,ml-4' />Upgrade to Pro
</button>
</div>
</div>














</div>
<hr></hr>
</div>







  )
}

export default Navbar