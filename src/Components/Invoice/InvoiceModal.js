import { DatePicker, Table } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
import ItemTable from './ItemTable'
import InvoiceCalculation from './InvoiceCalculation'


const data=[
    {
        date:'23-2-2024',
        description:'Lorem ipsum dolor sit amet',
       

    }
]
export default function InvoiceModal() {

    const [address,setAddress] =useState('Cumilla University Extension Part, Cumilla')
  return (
    <div>
        <div className='h-auto px-2 py-2'>
            <h1 className='font-poppinsBold text-[30px] text-center'>Invoice</h1>
            <div className='flex md:flex-row sm:flex-col gap-4 justify-between'>
                <div className='text-[22px] mt-5'>
                    <h1 className='font-[500]'>Customer Name: <span className='font-[700] bg-gray-200 px-1 py-1 rounded-md'>Bangladesh Shenabahini</span></h1>
                    <div className='flex gap-5 mt-3'>
                        <h1 className='font-[500]'>Address:</h1>
                        <TextArea className='ml-[4rem] text-[17px] font-[700]' value={address} style={{width:'20rem'}} placeholder=''></TextArea>
                    </div>
                </div>

                <div>
                    <div className='text-[17px] font-[500] flex flex-col gap-2'>
                        <h1 className='font-[500] text-[17px]'>Invoice Number: <span className='font-[700] bg-gray-200 px-1 py-1 rounded-md'>1</span></h1>
                        <div>
                            <h1>Current date: <span className='font-[700] bg-gray-200 px-1 py-1 rounded-md'>2-23-2024</span></h1>
                        </div>
                        <div className='flex gap-1'>
                            <h1>Due Date:</h1>
                           <div className='w-[7rem]'>
                           <DatePicker  />
                           </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
            {/* <ItemTable list={data}></ItemTable> */}
            <InvoiceCalculation></InvoiceCalculation>
                
            </div>
        </div>
    </div>
  )
}
