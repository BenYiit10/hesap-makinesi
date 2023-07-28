import React from 'react'
import { BsPlus,BsDash,BsSlash,BsX } from "react-icons/bs";
import { FaEquals } from "react-icons/fa6";
import clicked from '../Processes/Clicked';
import restart from '../Processes/Restart';
import equal from '../Processes/Equal';
import process from '../Processes/Process';

export default function Calculater() {
  return (
    <>
        <div className='inset-0 h-screen bg-[#313131] flex justify-center items-center text-white'>
            <div className='calc-main w-[480px] bg-black rounded-[50px] p-8'>
                <div className='h-[320px] justify-self-end flex items-end text-8xl font-thin'>
                    <div>0</div>
                    <span>as</span>
                </div>
                <div className='calc-main-container flex flex-col justify-between gap-4 text-6xl'>
                    <div>
                        <div onClick={clicked(7)}>7</div>
                        <div onClick={clicked(8)}>8</div>
                        <div onClick={clicked(9)}>9</div>
                        <div onClick={process("divide")}><BsSlash/></div>
                    </div>
                    <div>
                        <div onClick={clicked(4)}>4</div>
                        <div onClick={clicked(5)}>5</div>
                        <div onClick={clicked(6)}>6</div>
                        <div onClick={process("plus")}><BsPlus/></div>
                    </div>
                    <div>
                        <div onClick={clicked(1)}>1</div>
                        <div onClick={clicked(2)}>2</div>
                        <div onClick={clicked(3)}>3</div>
                        <div onClick={process("minus")}><BsDash/></div>
                    </div>
                    <div className='gap-4'>
                        <div onClick={clicked(0)} className='rounded-full'>0</div>
                        <div onClick={restart()} className='rounded-full !bg-[#9f9f9f]'>C</div>
                        <div onClick={equal()} className='rounded-full !bg-[#f69a06] text-[38px]'><FaEquals/></div>
                        <div onClick={process("multiply")} className='grow-2 rounded-full'><BsX/></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}