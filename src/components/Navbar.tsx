"use client";

import Link from "next/link";
import React, { useState } from "react";
export default function Navbar() {
  const [show, setShow] = useState(false);
  // const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}
        <nav className="w-full mx-auto hidden xl:block bg-[#1a0cc7] shadow py-10">
          <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <Link href={"/"}>
                <div className="mr-10 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    height={86}
                    width={85}
                    fill="white"
                  >
                    <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
                  </svg>

                  <h3 className="text-base text-white font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                    Secure AI and Blockchain
                  </h3>
                </div>
              </Link>
              <ul className="pr-12 xl:flex items-center h-full hidden">
                <Link href={"/"}>
                  <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white tracking-normal hover:border-b-2 active:border-white">
                    <div className="flex items-center">
                      <div className="w-4 h-4 md:w-6 md:h-6 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          fill="white"
                        >
                          <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                        </svg>
                      </div>
                      <p className=" xl:text-base text-base ml-3">Home</p>
                    </div>
                  </li>
                </Link>
                <Link href={"/problem"}>
                  <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white mx-10 tracking-normal hover:border-b-2 active:border-white">
                    <div className="flex items-center">
                      <div className="w-4 h-4 md:w-6 md:h-6 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-puzzle"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                        </svg>
                      </div>
                      <p className=" xl:text-base text-base ml-3">Problem</p>
                    </div>
                  </li>
                </Link>
                <Link href={"/solution"}>
                  <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white mr-10 tracking-normal hover:border-b-2 active:border-white">
                    <div className="flex items-center">
                      <div className="w-4 h-4 md:w-6 md:h-6 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-compass"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="8 16 10 10 16 8 14 14 8 16" />
                          <circle cx={12} cy={12} r={9} />
                        </svg>
                      </div>
                      <p className=" xl:text-base text-base ml-3">Solution</p>
                    </div>
                  </li>
                </Link>
                <Link href={"/technology"}>
                  <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white mr-10 tracking-normal hover:border-b-2 active:border-white">
                    <div className="flex items-center">
                      <div className="w-4 h-4 md:w-6 md:h-6 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          stroke="currentColor"
                          fill="white"
                        >
                          {" "}
                          <path d="M502.3 159.7l-234-156c-8-4.9-16.5-5-24.6 0l-234 156C3.7 163.7 0 170.8 0 178v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 4.9 16.5 5 24.6 0l234-156c6-4 9.7-11.1 9.7-18.3V178c0-7.1-3.7-14.3-9.7-18.3zM278 63.1l172.3 114.9-76.9 51.4L278 165.7V63.1zm-44 0v102.6l-95.4 63.7-76.9-51.4L234 63.1zM44 219.1l55.1 36.9L44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4L234 346.3v102.6zm22-140.9l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.9V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156l-55.1-36.9L468 219.1v73.7z" />
                        </svg>
                      </div>
                      <p className=" xl:text-base text-base ml-3">Technology</p>
                    </div>
                  </li>
                </Link>
                {/* Implementation */}

                <Link href={"/implementation"}>
                  <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white mr-10 tracking-normal hover:border-b-2 active:border-white">
                    <div className="flex items-center">
                      <div className="w-4 h-4 md:w-6 md:h-6 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          fill="white"
                        >
                          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                        </svg>
                      </div>
                      <p className=" xl:text-base text-base ml-3">
                        Implementation
                      </p>
                    </div>
                  </li>
                </Link>
                <Link href={"/benefits"}>
                  <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white mr-10 tracking-normal hover:border-b-2 active:border-white">
                    <div className="flex items-center">
                      <div className="w-4 h-4 md:w-6 md:h-6 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          fill="white"
                        >
                          <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z" />
                        </svg>
                      </div>
                      <p className=" xl:text-base text-base ml-3">Benefits</p>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="h-full xl:flex items-center justify-end hidden">
              <div className="w-full h-full flex items-center">
                <div className="w-full h-full flex">
                  <Link href={"/contact"}>
                    <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white mr-10 tracking-normal hover:border-b-2 active:border-white">
                      <div className="flex items-center">
                        <div className="w-4 h-4 md:w-6 md:h-6 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            fill="white"
                          >
                            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                          </svg>
                        </div>
                        <p className=" xl:text-base text-base ml-3">Contact</p>
                      </div>
                    </li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center xl:hidden">
              <ul className="p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
                <li className="flex md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <span className="ml-2 font-bold">Home</span>
                  </div>
                </li>
                <li className=" md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                  <div className="flex items-center">
                    <span className="ml-2 font-bold">Problem</span>
                  </div>
                </li>
                <li className=" md:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                  <div className="flex items-center">
                    <span className="ml-2 font-bold">Solution</span>
                  </div>
                </li>
                <li className="border-b border-gray-300  md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <span className="ml-2 font-bold">Technology</span>
                </li>
                {/* Implementation */}
                <li className="border-b border-gray-300 md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <span className="ml-2 font-bold">Implementation</span>
                </li>
                <li className="border-b border-gray-300 md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <span className="ml-2 font-bold">Benefits</span>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                      <img
                        className="rounded h-10 w-10 object-cover"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt="logo"
                      />
                    </div>
                    <p className="text-sm ml-2 cursor-pointer">Jane Doe</p>
                    <div className="sm:ml-2 text-white relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={7} r={4} />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <span className="ml-2">Profile</span>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-logout"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                  </svg>
                  <span className="ml-2">Sign out</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-[#1a0cc7] fixed top-0 z-40">
            <div className="w-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height={46}
                width={45}
                fill="white"
              >
                <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
              </svg>
            </div>
            <div>
              <div
                id="menu"
                className="text-white"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  " "
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "absolute xl:hidden w-full h-full transform -translate-x-0 z-40"
                : "absolute xl:hidden w-full h-full transform -translate-x-full z-40"
            }
            id="mobile-nav"
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 fixed overflow-y-auto z-40 top-0 bg-gray-800 shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            height={46}
                            width={45}
                            fill="white"
                          >
                            <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
                          </svg>
                          <p className="text-base  text-white ml-3">
                            Secure AI and Blockchain
                          </p>
                        </div>
                        <div
                          id="cross"
                          className="text-white"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <Link href={"/"} className="cursor-pointer">
                        <li
                          className="text-white pt-10"
                          onClick={() => setShow(!show)}
                        >
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                fill="white"
                              >
                                <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                              </svg>
                            </div>
                            <p className="xl:text-base text-base ml-3">Home</p>
                          </div>
                        </li>
                      </Link>
                      <Link href={"/problem"} className="cursor-pointer">
                        <li
                          className="text-white pt-8"
                          onClick={() => setShow(!show)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-puzzle"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                </svg>
                              </div>
                              <p className="text-white xl:text-base  text-base ml-3">
                                Problem
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link href={"/solution"} className="cursor-pointer">
                        <li
                          className="text-white pt-8"
                          onClick={() => setShow(!show)}
                        >
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-compass"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                <circle cx={12} cy={12} r={9} />
                              </svg>
                            </div>
                            <p className="text-white xl:text-base  text-base ml-3">
                              Solution
                            </p>
                          </div>
                        </li>
                      </Link>
                      <Link href={"/technology"}>
                        <li
                          className="text-white pt-8 cursor-pointer"
                          onClick={() => setShow(!show)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  stroke="currentColor"
                                  fill="white"
                                >
                                  {" "}
                                  <path d="M502.3 159.7l-234-156c-8-4.9-16.5-5-24.6 0l-234 156C3.7 163.7 0 170.8 0 178v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 4.9 16.5 5 24.6 0l234-156c6-4 9.7-11.1 9.7-18.3V178c0-7.1-3.7-14.3-9.7-18.3zM278 63.1l172.3 114.9-76.9 51.4L278 165.7V63.1zm-44 0v102.6l-95.4 63.7-76.9-51.4L234 63.1zM44 219.1l55.1 36.9L44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4L234 346.3v102.6zm22-140.9l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.9V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156l-55.1-36.9L468 219.1v73.7z" />
                                </svg>
                              </div>
                              <p className="text-white xl:text-base  text-base ml-3">
                                Technology
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link href={"/implementation"}>
                        <li
                          className="text-white pt-8 cursor-pointer"
                          onClick={() => setShow(!show)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                  fill="white"
                                >
                                  <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                                </svg>
                              </div>
                              <p className="text-white xl:text-base  text-base ml-3">
                                Implementation
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                      <Link href={"/benefits"}>
                        <li
                          className="text-white pt-8 cursor-pointer"
                          onClick={() => setShow(!show)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                  fill="white"
                                >
                                  <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z" />
                                </svg>
                              </div>
                              <p className="text-white xl:text-base  text-base ml-3">
                                Benefits
                              </p>
                            </div>
                          </div>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div className="w-full pt-6">
                    <div className="border-t border-gray-700">
                      <div className="w-full flex items-center justify-between pt-1">
                        <Link href={"/contact"}>
                          <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white mr-10 tracking-normal hover:border-b-2 active:border-white"
                          onClick={() => setShow(!show)}
                          >
                            <div className="flex items-center mt-4">
                              <div className="w-6 h-6 md:w-8 md:h-8 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  fill="white"
                                >
                                  <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                                </svg>
                              </div>
                              <p className=" xl:text-base text-base ml-3">
                                Contact
                              </p>
                            </div>
                          </li>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Sidebar ends */}

        {/* Code block ends */}
      </div>
    </>
  );
}
