import React from "react";

export default function Benefits() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
        {/* Code block starts */}
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div>
            <div role="contentinfo" className="flex items-center flex-col px-4">
              {/* <p tabIndex={0} className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4">in few easy steps</p> */}
              <h1
                className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4"
              >
                Benefits and ROI
              </h1>
            </div>
            <div
              aria-label="group of cards"
              className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
            >
              <div
                aria-label="card 1"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                  >
                    Enhanced Security and Privacy
                  </h2>
                  <p
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    Our platforms decentralized architecture and robust
                    security measures will provide users with unparalleled data
                    security and privacy, mitigating the risks associated with
                    centralized storage solutions.
                    <br />
                  </p>
                </div>
              </div>
              <div
                aria-label="card 2"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    User Empowerment
                  </h2>
                  <p
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    By giving users control over their data and integrating
                    user-friendly AI tools, we empower individuals and
                    businesses to leverage AI technologies without compromising
                    on security.
                  </p>
                </div>
              </div>
              <div
                aria-label="card 3"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Cost Efficiency
                  </h2>
                  <p
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    Decentralized storage and blockchain technologies can reduce
                    costs associated with data management and security, offering
                    a cost-effective solution for AI applications.
                  </p>
                </div>
              </div>
              <div
                aria-label="card 4"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Competitive Advantage
                  </h2>
                  <p
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    Our unique combination of AI and blockchain technologies
                    will position our startup as a leader in the secure AI
                    solutions market, attracting customers and investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
