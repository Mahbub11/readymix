import React from 'react';
import { Button, DatePicker, Input, InputNumber, Select } from 'antd';
import { companies, projects } from '../../utils/dummyData';
import IconExit_left from '../../Assets/SVG/IconExit_Left';
import { useNavigate } from 'react-router-dom';

function InputPage(props) {
    const navigate = useNavigate();

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div>
            
            <div className='px-2 py-2  md:w-[70%] sm:w-full m-auto'>
            <div className='py-5 bg-slate-100 drop-shadow-md'>
            <div onClick={() => navigate(-1)} className='absolute md:px-2 py-2 cursor-pointer  md:mt-0'>
                <IconExit_left height='2rem' width='2rem'></IconExit_left>
            </div>
                <h1 className='text-center text-[30px]'>Input Project Details</h1>

                <div className='m-auto w-full
                 mt-10  flex justify-center'>
                    <div>
                        <div>
                            <p>* Select a Date</p>
                            <DatePicker className='w-[20rem] h-[3rem]' onChange={onChange} />
                        </div>

                        <div className='flex-col gap-3  mt-5'>

                            <div>
                                <p>* Enter Company Name</p>
                                <Select
                                    showSearch
                                    className='h-[3rem] w-full'
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option?.label.toLocaleLowerCase() ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={companies}
                                />
                            </div>
                            <div className='mt-3'>
                                <p>* Enter Project Name</p>
                                <Select
                                    showSearch
                                    className='h-[3rem] w-full'
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => (option?.label.toLocaleLowerCase() ?? '').includes(input)}
                                    filterSort={(optionA, optionB) =>
                                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                    }
                                    options={projects}
                                />
                            </div>
                            <div className='mt-3'>
                                <p>* Enter Mpa</p>
                                <InputNumber type='number' className='h-[3rem] w-full text-[20px] font-[800]' ></InputNumber>
                            </div>
                            <div className='mt-3'>
                                <p>* Cubic Meter</p>
                                <InputNumber type='number' className='h-[3rem] w-full text-[20px] font-[800]' ></InputNumber>
                            </div>
                            <div className='mt-3'>
                                <p>* Stone(MT)</p>
                                <InputNumber type='number' className='h-[3rem] w-full text-[20px] font-[800]' ></InputNumber>
                            </div>
                            <div className='mt-3'>
                                <p>* Sand(CFT)</p>
                                <InputNumber type='number' className='h-[3rem] w-full text-[20px] font-[800]' ></InputNumber>
                            </div>
                            <div className='mt-3'>
                                <p>* Cement(MT)</p>
                                <InputNumber type='number' className='h-[3rem] w-full text-[20px] font-[800]' ></InputNumber>
                            </div>
                            <div className='mt-3'>
                                <p>* Admixer(KG)</p>
                                <InputNumber type='number' className='h-[3rem] w-full text-[20px] font-[800]' ></InputNumber>
                            </div>
                            <div className='mt-3'>
                                <p>* RCVD Amount</p>
                                <InputNumber type='number' className='h-[3rem] w-full text-[20px] font-[800]' ></InputNumber>
                            </div>
                            <div className='mt-3'>
                                <p>* CFT Quantity</p>
                                <InputNumber type='number' className='h-[3rem] w-full text-[20px] font-[800]' ></InputNumber>
                            </div>



                        </div>
                    </div>

                </div>

                <div className='w-full px-3 py-3 flex justify-center'>
                    <Button className='px-10 m-auto'>SAVE</Button>
                </div>

            </div>



        </div>
        </div>
    );
}

export default InputPage;