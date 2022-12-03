import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runStars } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    const [order, setOrder] = useState(null);
    
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runStars();
    }, []);
    
    return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Your order is placed!</h2>
            <p className='email-msg'>Check your email inbox for the invoice.</p>
            <p className='description'>
                If you have any questions, please email us at
                <a className='email' href='mailto:abhayshah3017@gmail.com'>
                    order@electronias.com
                </a>
            </p>
            <Link href="/">
                <button type='button' width="300px" className='btn'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success