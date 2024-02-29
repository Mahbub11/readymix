import React, { useState } from "react";
import { Avatar, List, Radio, Space, Tag, Input, Button } from "antd";
import { Pagination, PaginationProps, Row, Select, Table } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

export default function ItemTable({ list, handleQ,current,page }) {

    const [date,setDate]= useState('23-2-2024')
    const [description,setDescription]= useState('c-35')
  
 
  const columns = [
    {
      title: "Date",
      dataIndex: "id",
      key: "id",
      render: (id, record) => (
        <div>
          {
            //     <Link  target='_self'  to={(`/practice/${type}/${record.index}`)} className="sm:text-[15px] md:text-[21px] font-montserrat font-[400] flex gap-2">
            // <p>{record.index}.</p><p>{title}</p>

            // </Link>
            <button
            //   onClick={(e) => handleQ(record.index)}
              className="sm:text-[15px]  font-montserrat font-[400] flex gap-2"
            >
             <input value={date} onChange={(e)=> setDate(e.target.value)}></input>
            
             
            </button>
          }
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (level, record) => (
        <div className=" font-montserrat font-[400] ">
        <input value={description} onChange={(e)=> setDescription(e.target.value)}></input>
        </div>
      ),
    },
   

  ];


  // const handleChange = (value) => {
  //   setPage(value);
  // };

  // const onChangePage = (page) => {
  //   console.log(page);
  //   setCurrent(page);
  // };

  // const handleClick = (myLink) => () => {
  //   window.location.href = myLink;
  // };
  return (
    <div className="m-auto flex flex-col justify-center sm:pb-5">
      <div className="sm:w-full
      m-auto text-[21px]  over">
        <Table
          dataSource={list}
          columns={columns}
          style={{ fontSize: "20px" }}
          pagination={{
            pageSize: page,
            current: current,
            style: { display: "none" },
          }}
          
          // rowClassName="bg-[#f8f9fa] "

         
        />


      </div>
      
    </div>
  );
}
