
import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { Form, Input, InputNumber, Button, Select, Divider, Row, Col, DatePicker } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

// import AutoCompleteAsync from '@/components/AutoCompleteAsync';
// import ItemRow from '@/components/ErpPanel/ItemRow';

// import MoneyInputFormItem from '@/components/MoneyInputFormItem';

const data = [
  {
    index: 1,
    label: "c-25",
    value: "c-25",
  },
  {
    index: 1,
    label: "c-35",
    value: "c-35",
  },
  {
    index: 1,
    label: "c-30",
    value: "c-30",
  },
  {
    index: 1,
    label: "c-20",
    value: "c-20",
  },
];
export default function InvoiceCalculation({ subTotal = 0, current = null }) {

    const [unitRate,setUnitRate] = useState(360)

    const [total, setTotal] = useState(0);
    const [taxRate, setTaxRate] = useState(0);
    const [taxTotal, setTaxTotal] = useState(0);
    const [currentYear, setCurrentYear] = useState(() => new Date().getFullYear());
    const handelTaxChange = (value) => {
      setTaxRate(value);
    };
  
    useEffect(() => {
      if (current) {
        const { taxRate = 0, year } = current;
        setTaxRate(taxRate);
        setCurrentYear(year);
      }
    }, [current]);
    useEffect(() => {
      const currentTotal = subTotal * taxRate + subTotal;
      setTaxTotal((subTotal * taxRate).toFixed(2));
      setTotal(currentTotal.toFixed(2));
    }, [subTotal, taxRate]);
  
    const addField = useRef(false);
  
    useEffect(() => {
      addField.current.click();
    }, []);
  return (
    // <div className="text-[17px]">
    //   <div>
    //     <h1 className="text-center mt-10 text-[22px] underline font-[600]">
    //       Item Description
    //     </h1>

    //     <div>
    //       <div className="flex justify-around gap-5 mt-5">
    //         <div className="w-[60%] bg-gray-100">
    //           <div className="w-[40%] flex-col gap-5">
    //             <div>
    //               <h1>* Description</h1>
    //               <Select
    //                 showSearch
    //                 className="h-[3rem] w-full"
    //                 placeholder="Search to Select"
    //                 optionFilterProp="children"
    //                 filterOption={(input, option) =>
    //                   (option?.label.toLocaleLowerCase() ?? "").includes(input)
    //                 }
    //                 filterSort={(optionA, optionB) =>
    //                   (optionA?.label ?? "")
    //                     .toLowerCase()
    //                     .localeCompare((optionB?.label ?? "").toLowerCase())
    //                 }
    //                 options={data}
    //               />
    //             </div>
    //             <div>
    //                 <h1>Unit (m3)</h1>
    //                 <InputNumber placeholder="Enter Unit"></InputNumber>
    //             </div>
    //             <div>

    //             </div>
    //           </div>
    //         </div>

    //         <div className="w-[30%] ">
    //             <div>
    //                 <h1 className="text-[20px] font-[700]">UNIT Values</h1>
    //                 <div className="bg-gray-200 px-1 py-1 rounded-md">
    //                     <h1>1(m3)= cft:</h1>
    //                     <h1><span className="font-[700]">35.135</span></h1>
    //                 </div>
    //                 <div className="bg-gray-200 px-1 py-1 rounded-md mt-5">
    //                     <h1>Unit Rate</h1>
    //                     <InputNumber value={unitRate} onChange={(e)=> setUnitRate(e)}></InputNumber>
    //                 </div>
    //             </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>

      <Divider dashed />
      <Row gutter={[12, 12]} style={{ position: 'relative' }}>
        <Col className="gutter-row" span={5}>
          <p>Item</p>
        </Col>
        <Col className="gutter-row" span={7}>
          <p>Description</p>
        </Col>
        <Col className="gutter-row" span={3}>
          <p>Quantity</p>
        </Col>
        <Col className="gutter-row" span={4}>
          <p>Price</p>
        </Col>
        <Col className="gutter-row" span={5}>
          <p>Total</p>
        </Col>
      </Row>
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <>
            {/* {fields.map((field) => (
              <ItemRow key={field.key} remove={remove} field={field} current={current}></ItemRow>
            ))} */}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
                ref={addField}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Divider dashed />
      <div style={{ position: 'relative', width: ' 100%', float: 'right' }}>
        <Row gutter={[12, -5]}>
          <Col className="gutter-row" span={5}>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />} block>
                Save Invoice
              </Button>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={4} offset={10}>
            <p
              style={{
                paddingLeft: '12px',
                paddingTop: '5px',
              }}
            >
              Sub Total :
            </p>
          </Col>
          <Col className="gutter-row" span={5}>
            {/* <MoneyInputFormItem readOnly value={subTotal} /> */}
          </Col>
        </Row>
        <Row gutter={[12, -5]}>
          <Col className="gutter-row" span={4} offset={15}>
            <Form.Item
              name="taxRate"
              rules={[
                {
                  required: false,
                  message: 'Please input your taxRate!',
                },
              ]}
              initialValue="0"
            >
              <Select
              className='border-2'
                value={taxRate}
                onChange={handelTaxChange}
                bordered={false}
                options={[
                  { value: 0, label: 'Tax 0 %' },
                  { value: 0.19, label: 'Tax 19 %' },
                ]}
              ></Select>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={5}>
            {/* <MoneyInputFormItem readOnly value={taxTotal} /> */}
          </Col>
        </Row>
        <Row gutter={[12, -5]}>
          <Col className="gutter-row" span={4} offset={15}>
            <p
              style={{
                paddingLeft: '12px',
                paddingTop: '5px',
              }}
            >
              Total :
            </p>
          </Col>
          <Col className="gutter-row" span={5}>
            {/* <MoneyInputFormItem readOnly value={total} /> */}
          </Col>
        </Row>
      </div>
    
    
    </>
  );
}
