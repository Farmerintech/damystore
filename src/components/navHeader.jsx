import { useContext } from "react";
import { useEffect, useState } from "react"
import { BiChevronLeft,BiChevronRight, BiHeart, BiMenu, BiPopsicle, BiShoppingBag, BiX } from "react-icons/bi";
import { IoBag, IoMenuOutline, IoSearch } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { ProductContext } from "./productContext";
import { Cart } from "./pages/cart";
import { Fav } from "./pages/fav";

import { Notify } from "./notify";

export const NewNav = ({open, close, action})=>{
 const products =[]
 const hats ='hats', shoes = 'shoes'
const men = 'men', women= 'women'
    return(
        <nav className={`bg-white  text-black ${open ? 'absolute left-0 top-0 transform-translate smooth 0.2s w-full h-[100vh] scroll-y-none ' : 'left-100'}`}>
            <div className={`md:hidden absolute right-5 ${open ? ' text-black rounded-full block mt-5': 'hidden'}`} onClick={close} >
                <BiX size={20}/>
            </div>
            <ul className={` ${open ? 'block p-2 mt-10': 'hidden'} text-black lg:flex justify-center items-center lg:gap-10 `}>
                <li className="p-2 lg:p-0" onClick={close}>
                    <Link to='/'>Home</Link>
                </li>
                <li className="p-2 lg:p-0" onClick={close}>
                    <Link to={`product/${hats}`}>Hats</Link>
                </li>
                <li className="p-2 lg:p-0" onClick={close}>
                    <Link to={`product/${shoes}`}>Shoes</Link>
                </li>
                <li className="p-2 lg:p-0" onClick={close}>
                    <Link to={`product/${men}`}>Men's Cloth</Link>
                </li>
                <li className="p-2 lg:p-0" onClick={close}>
                    <Link to={`product/${women}`}>Women's Cloth</Link>
                </li>
            </ul>
        </nav>
    )
}


export const NewHeader = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const handleNav =() =>{
        setIsOpen(true);
        // alert('')
    }
    const Close =() =>{
        setIsOpen(false);
    }
    const {state, dispatch} = useContext(ProductContext);
    const [show, setShow] = useState(false)
    const showCart = ()=>{
        setShowFav(false)
        !show ?
        setShow(true) : setShow(false); 
        

    }

    const [showfav, setShowFav] = useState(false)
    const showFav = ()=>{
        setShow(false); 
        !showfav ?
        setShowFav(true) : setShowFav(false);

    }
    return(
       
        <>

        <header className="shadow-sm z-50 fixed top-0 bg-white w-[100%] flex justify-between p-5 bg-white text-black">
            <div className="flex items-center justify-center content-center gap-5">
                <div className="pointer flex gap-2" onClick={()=>{handleNav()}}>
                    <BiMenu size={25} className="lg:hidden"/>
                    <p className="font-bold">Damystore</p>
                </div>
              
        
                <div className="pointer">
                </div>
            </div>
            <NewNav open={isOpen} close={Close}/>
            <div  className="flex items-center justify-center content-center gap-5">
                <div onClick={()=>(showFav())}>
                <p className={`absolute top-5 ${state.Fav.length >0 ? 'bg-blue-400': ''} text-white right-25  flex justify-center items-center text-sm w-[15px] h-[15px] rounded-full `}>{state.Fav.length >0 ? state.Fav.length:''}</p>
                    <BiHeart size={25}/>
                </div>
                <div onClick={()=>(showCart())}>
                 <p className={`absolute top-5 ${state.cart.length >0 ? 'bg-blue-400': ''} flex justify-center items-center text-sm text-white w-[15px] h-[15px] rounded-full text-sm`} >{state.cart.length >0 ? state.cart.length:''}</p>
                   <BiShoppingBag size={25}/>
                </div>
            </div>
        </header>
        <Cart show={show}/>
        <Fav showfav={showfav}/>

        </>
    )
}

