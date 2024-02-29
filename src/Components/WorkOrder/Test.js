import React from 'react'
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import { Table } from 'antd';

export default function Test({ items, calData }) {
    console.log(calData)

    const current = new Date();

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

  return (
    <Document id="print" className=" px-5 py-2 mt-10 ">
    <Page size="A4">
      <View>
      <Text>
        <h1>ldjflggjh</h1>
      </Text>
      </View>
      
    </Page>
  </Document>
  )
}
