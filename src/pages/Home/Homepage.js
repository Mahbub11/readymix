import React from 'react';
import { Link } from 'react-router-dom';

function Homepage(props) {
    return (
        <div className='h-full w-full px-2 '>

            <div className='md:w-[60%] sm:w-full px-2 py-2 h-full  m-auto '>
                <div className='px-5 py-5 bg-gray-200 rounded-sm'>
                    <div>
                        <h1 className='text-center text-[40px]'>Dashboard</h1>
                    </div>

                    <div className='mt-10 md:w-[30%] sm:w-[40%] m-auto flex flex-col  gap-5 text-[20px]'>



                        <Link to={'/input/casting'} className='cursor-pointer w-full self-center px-3 py-3 rounded-md bg-green-300 text-center'>Input</Link>

                        <Link to={'/listing'} className='cursor-pointer w-full self-center px-3 py-3 rounded-md bg-pink-300 text-center'>Generate</Link>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Homepage;