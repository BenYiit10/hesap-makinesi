import React, { Fragment } from 'react'
import { BsPlus,BsDash,BsSlash,BsX } from "react-icons/bs";
import { FaEquals } from "react-icons/fa6";
import Clicked from '../Processes/Clicked';
import Restart from '../Processes/Restart';
import Equal from '../Processes/Equal';
import Process from '../Processes/Process';
import { useSelector } from 'react-redux';

const Calculater =() => {
    const num = useSelector((state) => state.reducer.num)
    const resultAppreance = useSelector((state) => state.reducer.resultAppreance)
    /* resultAppreance.forEach(item => (
            console.log(item)
    )
) */
    return (
        <>
            <div className='inset-0 h-screen bg-[#313131] flex justify-center items-center text-white'>
                <div className='calc-main w-[480px] bg-black rounded-[50px] p-8 border border-solid border-white'>
                    <div className='result w-full h-[320px] overflow-hidden justify-self-end flex flex-col justify-end text-8xl font-thin text-end'>
                        <div>{num}</div>
                        <span className='result-appreance h-5 text-base text-neutral-400 font-normal'>
                            
                            {
                            resultAppreance.map((item,index) => (
                                        <Fragment key={index}>
                                            {item} 
                                        </Fragment>
                                    )
                                )
                            }
                        </span>
                    </div>
                    <div className='calc-main-container flex flex-col justify-between gap-4 text-6xl'>
                        <div>
                            <Clicked>7</Clicked>
                            <Clicked>8</Clicked>
                            <Clicked>9</Clicked>
                            <Process process="/"><BsSlash/></Process>
                        </div>
                        <div>
                            <Clicked>4</Clicked>
                            <Clicked>5</Clicked>
                            <Clicked>6</Clicked>
                            <Process process="+"><BsPlus/></Process>
                        </div>
                        <div>
                            <Clicked>1</Clicked>
                            <Clicked>2</Clicked>
                            <Clicked>3</Clicked>
                            <Process process="-"><BsDash/></Process>
                        </div>
                        <div className=''>
                            <Clicked>0</Clicked>
                            <Restart>C</Restart>
                            <Equal><FaEquals/></Equal>
                            <Process process="*"><BsX/></Process>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculater;