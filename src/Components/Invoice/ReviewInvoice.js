import { Button, Input, Table, Tag } from "antd";
import React from "react";
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { PDFViewer } from "@react-pdf/renderer";
import invoice from "../../data/invoice";
import Invoice from "../Inv/Invoice";
var converter = require("number-to-words");

export default function ReviewInvoice({ items, calData }) {
  const current = new Date();

  console.log(items);

  const columns = [
    {
      title: "Description",
      dataIndex: "itemDes",
      key: "itemDes",
    },
    {
      title: "Unit(m3)",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "1m3=cft",
      dataIndex: "m3cft",
      key: "m3cft",
    },
    {
      title: "Unit(cft)",
      dataIndex: "unitcft",
      key: "unitcft",
    },
    {
      title: "Unit Rate",
      dataIndex: "unitRate",
      key: "unitRate",
    },
    {
      title: "Total Amount",
      dataIndex: "total",
      key: "total",
      render: (text) => <a>{text.toLocaleString()}</a>,
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
    },
  ];

  const SaveAsPDFHandler = () => {
    const dom = document.getElementById('print');
    toPng(dom)
      .then((dataUrl) => {
        const img = new Image();
        img.crossOrigin = 'annoymous';
        img.src = dataUrl;
        img.onload = () => {
          // Initialize the PDF.
          const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'in',
            format: [5.5, 8.5],
          });

          // Define reused data
          const imgProps = pdf.getImageProperties(img);
          const imageType = imgProps.fileType;
          const pdfWidth = pdf.internal.pageSize.getWidth();

          // Calculate the number of pages.
          const pxFullHeight = imgProps.height;
          const pxPageHeight = Math.floor((imgProps.width * 8.5) / 5.5);
          const nPages = Math.ceil(pxFullHeight / pxPageHeight);

          // Define pageHeight separately so it can be trimmed on the final page.
          let pageHeight = pdf.internal.pageSize.getHeight();

          // Create a one-page canvas to split up the full image.
          const pageCanvas = document.createElement('canvas');
          const pageCtx = pageCanvas.getContext('2d');
          pageCanvas.width = imgProps.width;
          pageCanvas.height = pxPageHeight;

          for (let page = 0; page < nPages; page++) {
            // Trim the final page to reduce file size.
            if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
              pageCanvas.height = pxFullHeight % pxPageHeight;
              pageHeight = (pageCanvas.height * pdfWidth) / pageCanvas.width;
            }
            // Display the page.
            const w = 1200;
            const h = 1500;
            pageCtx.fillStyle = 'white';
            pageCtx.fillRect(0, 0, w, h);
            pageCtx.drawImage(img, 0, page * pxPageHeight, w, h, 0, 0, w, h);

            // Add the page to the PDF.
            if (page) pdf.addPage();

            const imgData = pageCanvas.toDataURL(`image/${imageType}`, 1);
            pdf.addImage(imgData, imageType, 0, 0, pdfWidth, pageHeight);
          }
          // Output / Save
          pdf.save(`invoice-${11}.pdf`);
        };
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <div>
         <PDFViewer width="300" height="600" className="app" >
                <Invoice invoice={invoice}></Invoice>
            </PDFViewer>
      <div className="md:text-[20px] font-poppins sm:text-[12px]">
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
      </div>
    </div>
  );
}
