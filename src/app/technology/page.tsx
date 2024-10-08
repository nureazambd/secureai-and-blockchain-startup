import React from "react";

export default function Technology() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
        {/* Code block starts */}

        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div>
            <div role="contentinfo" className="flex items-center flex-col px-4">
              {/* <p tabIndex={0} className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4">in few easy steps</p> */}
              <h1
                tabIndex={0}
                className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4"
              >
                Technology Stack
              </h1>
            </div>
            <div
              tabIndex={0}
              aria-label="group of cards"
              className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
            >
              <div
                tabIndex={0}
                aria-label="card 1"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3"></div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                  >
                    Decentralized Cloud Storage
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    We will leverage leading decentralized cloud storage
                    solutions such as Storj, Sia, and Filecoin to ensure secure
                    and distributed data storage. These technologies provide
                    end-to-end encryption and redundancy, enhancing data
                    security, privacy, and availability.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 2"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3"></div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Large Language Models (LLMs): Hura
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    Our platform will utilize Hura, an advanced decentralized
                    LLM designed to power generative AI applications and the AI
                    chatbot. Hura will be trained on decentralized data to
                    ensure privacy and security while delivering high
                    performance and accuracy.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 3"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3"></div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Blockchain Technology
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    Blockchain will be the foundation of our platform, ensuring
                    transparency, security, and immutability of data
                    transactions. Smart contracts will be deployed to automate
                    processes, enforce security policies, and ensure transparent
                    interactions on the platform.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 4"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3"></div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Native Cryptocurrency: HalalCoin
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    HalalCoin will be built on a secure blockchain protocol,
                    enabling fast and secure transactions within the platform.
                    It will serve as a means of incentivizing network
                    participants, rewarding contributions, and ensuring
                    transparent, certified transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code block ends */}
      </div>
    </div>
  );
}
