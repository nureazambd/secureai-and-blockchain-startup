"use client";

import Image from 'next/image'
import Link from "next/link";
import React, { useState } from "react";
import secureaiLogo from '../../public/logo.jpg'
export default function Navbar() {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}
        <nav className="w-full mx-auto hidden xl:block bg-gray-800 shadow py-10">
          <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
            <div className="h-full flex items-center">
              <div className="mr-10 flex items-center">
              <Image className=' rounded-xl'
      src={secureaiLogo}
      alt="Picture of the author"
      width={80} 
      height={80} 
      blurDataURL="data:..." 
      placeholder="blur" // Optional blur-up while loading
    />
                <h3 className="text-base text-white font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                Secure Intelligent 
                </h3>
              </div>
              <ul className="pr-12 xl:flex items-center h-full hidden">
                <Link href={"/"}>
                  <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white tracking-normal hover:border-b-2 active:border-white">
                    <div className="flex items-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-grid"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <rect x={4} y={4} width={6} height={6} rx={1} />
                          <rect x={14} y={4} width={6} height={6} rx={1} />
                          <rect x={4} y={14} width={6} height={6} rx={1} />
                          <rect x={14} y={14} width={6} height={6} rx={1} />
                        </svg>
                      </div>
                      <p className=" xl:text-base text-base ml-3">Home</p>
                    </div>
                  </li>
                </Link>
                <Link href={"/problem"}>
                  <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white mx-10 tracking-normal hover:border-b-2 active:border-white">
                  <div className="flex items-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 ">
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
                      <div className="w-6 h-6 md:w-8 md:h-8 ">
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
                      <div className="w-6 h-6  ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"/></svg>
                      </div>
                      <p className=" xl:text-base text-base ml-3">Technology</p>
                    </div>
                  </li>
                </Link>
                {/* Implementation */}

                <Link href={"/implementation"}>
                  <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white mr-10 tracking-normal hover:border-b-2 active:border-white">
                  <div className="flex items-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 ">
                      <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-code"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <polyline points="7 8 3 12 7 16" />
                                  <polyline points="17 8 21 12 17 16" />
                                  <line x1={14} y1={4} x2={10} y2={20} />
                                </svg>
                      </div>
                      <p className=" xl:text-base text-base ml-3">Implementation</p>
                    </div>
                  </li>
                </Link>
                <Link href={"/benefits"}>
                  <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white mr-10 tracking-normal hover:border-b-2 active:border-white">
                  <div className="flex items-center">
                      <div className="w-6 h-6  ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
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
                  
                  <div
                    className="w-full flex items-center justify-end relative cursor-pointer"
                    onClick={() => setProfile(!profile)}
                  >
                    
                    <div className="rounded h-8 w-8 object-cover">
                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z"/></svg>
                    </div>
                    <p className="text-white text-sm ml-2">Contact</p>
                  </div>
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
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-gray-800 fixed top-0 z-40">
            <div className="w-24">
            <Image className=' rounded-xl'
      src={secureaiLogo}
      alt="Picture of the author"
      width={45} 
      height={45} 
      blurDataURL="data:..." 
      placeholder="blur" // Optional blur-up while loading
    />
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
                        <Image className=' rounded-xl'
      src={secureaiLogo}
      alt="Picture of the author"
      width={45} 
      height={45} 
      blurDataURL="data:..." 
      placeholder="blur" // Optional blur-up while loading
    />
                          <p className="text-base  text-white ml-3">
                          Secure Intelligent
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
                                className="icon icon-tabler icon-tabler-grid"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect
                                  x={14}
                                  y={4}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                                <rect
                                  x={4}
                                  y={14}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                                <rect
                                  x={14}
                                  y={14}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                              </svg>
                            </div>
                            <p className="xl:text-base text-base ml-3">
                              Home
                            </p>
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
                              <div className="w-5 h-5 text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"/></svg>

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
                                  className="icon icon-tabler icon-tabler-code"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <polyline points="7 8 3 12 7 16" />
                                  <polyline points="17 8 21 12 17 16" />
                                  <line x1={14} y1={4} x2={10} y2={20} />
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
                              <div className="w-5 h-5 text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
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
                  <div className="w-full pt-4">
                    <div className="flex justify-center mb-4 w-full">
                      <div className="relative w-full">
                        <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-search"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="#A0AEC0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                          </svg>
                        </div>
                        <input
                          className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-700 pl-10 py-2"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <div className="border-t border-gray-700">
                      <div className="w-full flex items-center justify-between pt-1">
                        <Link href={"/contact"}>
                          <li className="cursor-pointer h-full flex items-center hover:text-gray-400 text-lg text-white mr-10 tracking-normal hover:border-b-2 active:border-white"
                          onClick={() => setShow(!show)}
                          >
                            <div className="flex items-center mt-2">
                              <div className="w-6 h-6 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z"/></svg>
                                
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
