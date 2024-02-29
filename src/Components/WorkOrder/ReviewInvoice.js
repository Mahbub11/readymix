import { Button, Input, Table, Tag } from "antd";
import React from "react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../WorkOrderPdf/Invoice";
// import invoice from "../../data/invoice";
var converter = require("number-to-words");

export default function ReviewInvoice({ items, calData }) {
  const current = new Date();

  console.log(items);

  const invoiceData = {
    id: "5df3180a09ea16dc4b95f910",
    invoice_no: "2024-28",
    customer: "Bangladesh Shenabahini",
    email: "mail@xyx.com",
    phone: "+8835465768",
    address: "Cumilla University Extension Part, Cumilla",
    trans_date: "2024-01-12",
    due_date: "2024-3-12",
    sub_total: calData.subtotal,
    pump_charge: true,
    vatRate: calData.vat,
    vat_amount: calData.vatRate,
    prev_due: calData.prevDue,
    rcv_amount: calData.rcvAmount,
    net_payable: calData.payableAmount,
    items: items,
  };

  return (
    <div className="mt-10">
      <PDFViewer width="sm:w-[300] md:w-[600]" height="600" className="app">
        <Invoice invoice={invoiceData}></Invoice>
      </PDFViewer>

      <div className="px-2 py-2 w-full flex justify-center text-[20px] font-[700] bg-home rounded-md">
        <PDFDownloadLink
          document={<Invoice invoice={invoiceData}></Invoice>}
          fileName="form"
        >
          Download
        </PDFDownloadLink>
      </div>
      {/* <div className="md:text-[20px] font-poppins sm:text-[12px]">
        <div id="print" className=" px-5 py-2 mt-10 ">
          <h1 className="text-center font-poppinsBold text-[30px]">Invoice</h1>
          <div className="mt-5 flex-col gap-1 justify-start">
            <h1>
              Invoice Number: <span className="font-poppinsBold">I-123</span>
            </h1>
            <h1>
              Current Date:{" "}
              <span className="font-[800] text-[20px]">
                {current.getDate()}-{current.getMonth() + 1}-
                {current.getFullYear()}
              </span>
            </h1>

            <h1>
              Due Date: <span className="font-[800] text-[20px]">5-3-2024</span>
            </h1>
          </div>

          <div className="mt-10">
            <div>
              <div className="flex-col">
                <h1>Customer Name:</h1>
                <p className="font-[600]">Bangladesh Shenabahini</p>
              </div>
              <div className="flex-col mt-3">
                <h1>Address:</h1>
                <p className="font-[600]">
                  Cumilla University Extension Part, Cumilla
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div id="journal-scroll" className="font-[700] text-[10px] ">
              <Table pagination={false} columns={columns} dataSource={items} />
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col items-start space-y-2 pt-6 ml-3">
              <div className="flex w-full justify-between md:w-1/2">
                <span className="font-bold">Subtotal:</span>
                <span>
                  {calData.subtotal ? calData.subtotal.toLocaleString() : 0}Tk
                </span>
              </div>
              <div className="flex w-full justify-between md:w-1/2">
                <span className="font-bold">Pump Charge:</span>
                <span>{calData.pumpCharge ? calData.pumpCharge : 0} Tk</span>
              </div>

              <div className="flex w-full justify-between md:w-1/2">
                <span className="font-bold">Vat:</span>
                <span>
                  ({calData.vat || "0"}%)
                  {calData.vatRate ? calData.vatRate.toLocaleString() : 0}
                </span>
              </div>

              <div className="flex w-full justify-between border-t border-gray-900/10 pt-2 md:w-1/2">
                <span className="font-bold">Total:</span>
                <span className="font-bold">
                  {calData.grandTotal ? calData.grandTotal.toLocaleString() : 0}{" "}
                  Tk
                </span>
              </div>
              <div className="flex w-full justify-between  pt-2 md:w-1/2">
                <span className="font-bold">Previous Due:</span>
                <span className="font-bold">
                  {calData.prevDue ? calData.prevDue.toLocaleString() : 0} Tk
                </span>
              </div>
              <div className="flex w-full justify-between  pt-2 md:w-1/2">
                <span className="font-bold">Received Amount:</span>
                <span className="font-bold">
                  {calData.rcvAmount ? calData.rcvAmount.toLocaleString() : 0}{" "}
                  Tk
                </span>
              </div>

              <div className="flex w-full justify-between border-t border-gray-900/10 pt-2 md:w-1/2">
                <span className="font-bold">Net Payable Amount:</span>
                <span className="font-bold">
                  {calData.payableAmount
                    ? calData.payableAmount.toLocaleString()
                    : 0}{" "}
                  Tk
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[5rem]">
            <div className="flex justify-between">
              <div>
                <span className="">------------------</span>
                <p>Received By</p>
              </div>
              <div>
                <span className="">-------------------</span>
                <p>Authorized Signature</p>
              </div>
            </div>
          </div>
          <div className="h-10">

          </div>
        </div>

        <div className="mt-[5rem]">
          <div className="flex justify-between m-auto">
            <div className="flex-col ">
              <p className="text-[20px] font-bold">Mail To:</p>
              <div className="flex flex-col gap-2">
                <Input
                  className="w-auto px-5"
                  value="mail@muhidconstruction.com"
                  placeholder="mail@muhidconstruction.com"
                ></Input>
                <Input
                  className="w-auto px-5"
                  value="mail@muhidconstruction.com"
                  placeholder="mail@muhidconstruction.com"
                ></Input>
              </div>
              <div className="flex gap-3 justify-between mt-5">
                <Button style={{ backgroundColor: "#E9EAEC" }}>
                  Add Another
                </Button>
                <Button style={{ backgroundColor: "#E9EAEC" }}>Send</Button>
              </div>
            </div>
            <div className="self-center justify-end">
              <Button  onClick={SaveAsPDFHandler} style={{ backgroundColor: "#E9EAEC" }}>
                Save as PDF
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
