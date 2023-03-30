import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SideCard = ({ watchTime }) => {
    const [time , setTime] = useState(watchTime);
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() =>{
        const getTimeStorage = localStorage.getItem('watchTime')
        const breakTime = localStorage.getItem('breakTime')

        if(breakTime){
            setBreakTime(breakTime)
        }else{
            setBreakTime(0)
        }
        setTime(getTimeStorage)
    },[watchTime])

    const handleBreakTime = (bt) =>{
        localStorage.setItem('breakTime',bt);
        setBreakTime(bt)

    }
    const handleComplate = () =>{
        toast("Wow so easy!")
    }


    return (
        <div>
            <h1>My Cart</h1>

            <div className="mt-5 text-center">
                <p>total watch time</p>
                <input type="text" value={time} disabled />
            </div>
            <h5 className="mt-5">Add Break time</h5>
            <dutton onClick={() =>handleBreakTime(15)} className="w-25 btn-circle m-1 btn btn-info">15</dutton>
            <dutton onClick={() =>handleBreakTime(20)} className="w-25 btn-circle bg-warning btn btn-info">20</dutton>
            <dutton onClick={() =>handleBreakTime(25)} className="w-25 btn-circle m-1 bg-danger btn btn-info">25</dutton>
            <input type="text" value={breakTime} disabled />
            <button onClick={handleComplate}  className="mt-5 btn btn-info w-100">
                Complete
            </button>
        </div>
    );
};

export default SideCard;