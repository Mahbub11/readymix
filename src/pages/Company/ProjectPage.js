import { Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { companies, projects } from "../../utils/dummyData";

export default function ProjectPage() {
  return (
    <div>
      <div>
        <h1 className="text-[30px] font-poppinsBold  text-center">
          Project Form
        </h1>

        <div className="mt-10 sm:w-[90%] md:w-[40%] flex justify-center flex-col gap-5 m-auto text-[20px] px-2 py-5">
          <div>
            <p>* Enter Company Name</p>
            <Select
              showSearch
              className="h-[3rem] w-full"
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label.toLocaleLowerCase() ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={companies}
            />
          </div>

          <div>
            <p>* Project Name</p>
            <Input className="h-10" placeholder="Enter Project Name"></Input>
          </div>

          <div>
            <p>* Project Description(optional)</p>
            <TextArea
              rows={5}
              className="h-10"
              placeholder="Enter Project Description"
            ></TextArea>
          </div>

          <div>
            <p>* Project Duration(optional)</p>
            <Input
              className="h-10"
              placeholder="Enter Project Duration"
            ></Input>
          </div>

          <button className="cursor-pointer hover:bg-blue-300 px-2 py-2 border-2 rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
