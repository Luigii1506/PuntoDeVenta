import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BillPreview from "../components/BillPreview";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import { useState } from "react";
import {
  AiFillEnvironment,
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

export default function Home() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", spacing: true, icon: <BsPerson /> },
    { title: "Settings", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];

  const MenuFake = [
    {
      name: "Primer producto",
      price: 200,
      quantity: 1,
      id: 0,
    },
    {
      name: "Segundo producto",
      price: 100,
      quantity: 1,
      id: 1,
    },
    {
      name: "Tercer producto",
      price: 300,
      quantity: 1,
      id: 2,
    },
    {
      name: "Cuarto producto",
      price: 220,
      quantity: 1,
      id: 3,
    },
    {
      name: "Quinto producto",
      price: 110,
      quantity: 1,
      id: 4,
    },
    {
      name: "Sexto producto",
      price: 120,
      quantity: 1,
      id: 5,
    },
    {
      name: "Septimo producto",
      price: 55,
      quantity: 1,
      id: 6,
    },
    {
      name: "Octavo producto",
      price: 90,
      quantity: 1,
      id: 7,
    },
  ];

  return (
    <div className="flex" data-theme="wireframe">
      <div
        className="drawer-side"
        style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
      >
        <label htmlFor="drawer" className="drawer-overlay" />
        <aside className="bg-base-200 w-80 h-full">
          <div className="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex shadow-sm">
            <a
              href="/"
              aria-current="page"
              aria-label="Homepage"
              className="flex-0 btn btn-ghost px-2"
            >
              <div className="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
                <span className="lowercase">daisy</span>{" "}
                <span className="text-base-content uppercase">UI</span>
              </div>
            </a>
            <a
              href="/docs/changelog"
              className="link link-hover font-mono text-xs text-opacity-50"
            >
              <div data-tip="Changelog" className="tooltip tooltip-bottom">
                2.39.0
              </div>
            </a>
          </div>
          <div className="h-4" />
          <ul className="menu menu-compact flex flex-col p-0 px-4">
            <li>
              <a
                
                href="/docs/install"
                id=""
                className="flex gap-4"
              >
                <span className="flex-none">
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                    />
                  </svg>
                </span>
                <span className="flex-1">Install</span>
              </a>
            </li>
            <li>
              <a
                
                href="/docs/use"
                id=""
                className="flex gap-4"
              >
                <span className="flex-none">
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
                <span className="flex-1">Use</span>
              </a>
            </li>
            <li>
              <a
                
                href="/docs/customize"
                id=""
                className="flex gap-4"
              >
                <span className="flex-none">
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </span>
                <span className="flex-1">Customize components</span>
              </a>
            </li>
            <li>
              <a
                
                href="/docs/config"
                id=""
                className="flex gap-4"
              >
                <span className="flex-none">
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>
                <span className="flex-1">Config</span>
              </a>
            </li>
            <li>
              <a
                
                href="/docs/colors"
                id=""
                className="flex gap-4"
              >
                <span className="flex-none">
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path d="M19,11.5C19,11.5 17,13.67 17,15C17,16.1 17.9,17 19,17C20.1,17 21,16.1 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z" />
                  </svg>
                </span>
                <span className="flex-1">Colors</span>
              </a>
            </li>
            <li>
              <a
                
                href="/docs/themes"
                id=""
                className="flex gap-4"
              >
                <span className="flex-none">
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </span>
                <span className="flex-1">Themes</span>
              </a>
            </li>
            <li>
              <a
                
                href="/theme-generator"
                id=""
                className="flex gap-4"
              >
                <span className="flex-none">
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 512 512"
                  >
                    <title>ionicons-v5-m</title>
                    <path d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z" />
                    <line x1="90.25" y1="90.25" x2="124.19" y2="124.19" />
                    <path d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z" />
                    <path d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z" />
                    <line x1="293.89" y1="90.25" x2="259.95" y2="124.19" />
                    <path d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z" />
                    <line x1="124.19" y1="259.95" x2="90.25" y2="293.89" />
                    <path d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z" />
                    <path d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z" />
                    <path d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z" />
                  </svg>
                </span>
                <span className="flex-1">Theme Generator</span>
              </a>
            </li>
            <li>
              <a
                
                href="/docs/layout-and-typography"
                id=""
                className="flex gap-4"
              >
                <span className="flex-none">
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M14.7999209,15 L9.19992091,15 L8,18 L6,18 L11,6 L13,6 L18,18 L16,18 L14.7999209,15 Z M13.9998682,13 L11.9997364,8 L9.99986818,13 L13.9998682,13 Z" />
                  </svg>
                </span>
                <span className="flex-1">Layout &amp; Typography</span>
              </a>
            </li>
          </ul>
          <ul className="menu menu-compact flex flex-col p-0 px-4">
            <li />
            <li className="menu-title">
              <span>Actions</span>
            </li>
            <li>
              <a
                
                href="/components/button"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Button</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/dropdown"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Dropdown</span>{" "}
                <span className="badge badge-sm flex-none lowercase">
                  updated
                </span>
              </a>
            </li>
            <li>
              <a
                
                href="/components/modal"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Modal</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/swap"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Swap</span>{" "}
              </a>
            </li>
          </ul>
          <ul className="menu menu-compact flex flex-col p-0 px-4">
            <li />
            <li className="menu-title">
              <span>Data display</span>
            </li>
            <li>
              <a
                
                href="/components/alert"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Alert</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/avatar"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Avatar</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/badge"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Badge</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/card"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Card</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/carousel"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Carousel</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/collapse"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Collapse</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/countdown"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Countdown</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/kbd"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Kbd</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/progress"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Progress</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/radial-progress"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Radial progress</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/stat"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Stat</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/table"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Table</span>{" "}
              </a>
            </li>
            <li>
              <a
                
                href="/components/tooltip"
                id=""
                className="flex gap-4"
              >
                {" "}
                <span className="flex-1">Tooltip</span>{" "}
                <span className="badge badge-sm flex-none lowercase">
                  updated
                </span>
              </a>
            </li>
          </ul>
          <ul className="menu menu-compact flex flex-col p-0 px-4" />
          <div className="from-base-200 pointer-events-none sticky bottom-0 flex h-20 bg-gradient-to-t to-transparent" />
        </aside>
      </div>

      <div className="h-screen flex-auto">
        <NavBar />
        <div className="main p-5">
          <Menu products={MenuFake} />
        </div>
      </div>
      <div className="h-screen basis-1/5 bg-base-200">
        <BillPreview />
      </div>
    </div>
  );
}
