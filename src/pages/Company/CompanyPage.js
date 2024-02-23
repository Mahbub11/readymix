import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function CompanyPage() {
  return (
    <div>
      <div>
        <h1 className="text-[30px] font-poppinsBold  text-center">
          Company Form
        </h1>

        <div className="mt-10 sm:w-[90%] md:w-[40%] flex justify-center flex-col gap-5 m-auto text-[20px] px-2 py-5">
           
          <div>
            <p>* Company Name</p>
            <Input className="h-10" placeholder="Enter Company Name"></Input>
          </div>

          <div>
            <p>* Company Description(optional)</p>
            <TextArea rows={5} className="h-10" placeholder="Enter Company Description"></TextArea>
          </div>

          <div>
            <p>* Company Address(optional)</p>
            <Input className="h-10" placeholder="Enter Company Address"></Input>
          </div>

          <div>
            <p>* Company Contact</p>

            <Input className="h-10" placeholder="+88 000 00000"></Input>
          </div>

           <button className="cursor-pointer hover:bg-blue-300 px-2 py-2 border-2 rounded-md">Save</button>
        </div>
       
      </div>
    </div>
  );
}
