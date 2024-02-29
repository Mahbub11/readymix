import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  BookOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, notification, Tabs, Grid } from "antd";
import "./index.css";
import { Link, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

export default function SectionLayout() {
  const [api, contextHolder] = notification.useNotification();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout className="bg-#e0ebf8 h-auto m-auto z-50 sm:w-full ">
      <Sider
        className={`${collapsed ? "hidden" : "block"}`}
        trigger={null}
        collapsible
        translate="3s"
        collapsed={false}
        style={{ background: "#e0ebf8", width: "40%" }}
      >
        <div className=" h-auto" />
        <Menu
          theme="light"
          mode="inline"
          className="mt-[5rem] bg-transparent "
          defaultSelectedKeys={["1"]}
          inlineCollapsed={collapsed}
          items={[
            {
              label: (
                <a href="/" rel="noopener noreferrer">
                  Home
                </a>
              ),
              key: "home",
              icon: <HomeOutlined />,
            },
            {
              label: (
                <a href="input/casting" rel="noopener noreferrer">
                  Input Order
                </a>
              ),
              key: "Input Order",
              icon: <HomeOutlined />,
            },
            {
              label: "Order",
              key: "access-control",
              icon: "",
              collapsed: "block",

              children: [
                {
                  label: (
                    <a href="/listing" rel="noopener noreferrer">
                      Order List
                    </a>
                  ),
                  path: "listing",
                  key: "user2",
                  permission: "user list",
                },
                {
                  label: (
                    <a href="/invoice-list" rel="noopener noreferrer">
                      Invoice List
                    </a>
                  ),
                  path: "/invoice-list",
                  key: "user",
                  permission: "user list",
                },
                {
                  label: (
                    <a href="contract-analysis" rel="noopener noreferrer">
                      Contact Analysis
                    </a>
                  ),
                  path: "contract-analysis",
                  key: "role1",
                },
              ],
            },

            {
              label: "Company",
              key: "access-control",
              icon: "",
              collapsed: "block",

              children: [
                {
                  label: (
                    <a href="/company" rel="noopener noreferrer">
                      Company
                    </a>
                  ),
                  path: "company",
                  key: "user2",
                  permission: "user list",
                },
                {
                  label: (
                    <a href="/project" rel="noopener noreferrer">
                      Project
                    </a>
                  ),
                  path: "project",
                  key: "user",
                  permission: "user list",
                },
              ],
            },
          ]}
        ></Menu>
      </Sider>
      <Layout>
        <Header
          className="flex justify-between z-50"
          style={{
            padding: 0,
            background: "#e0ebf8",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <h1
            className="sm:text-[30px] md:text-[40px]   bg-gradient-to-r
         from-blue-600 via-green-600 to-indigo-500 inline-block text-transparent bg-clip-text
          text-center text-[22px] font-serif font-[500] drop-shadow-sm w-auto"
          >
            <Link to={"/"}>X Builders</Link>
          </h1>
          <div></div>
        </Header>
        <div className="h-auto ">
          <div className="md:w-[90%] sm:w-full m-auto mt-5 relative ">
            <Outlet></Outlet>
          </div>
        </div>
      </Layout>
    </Layout>
  );
}
