import React from "react";

export default function Problem() {
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
                Problem Statement
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
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg"
                      alt="drawer"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                  >
                    Data Security and Privacy Concerns
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    As AI systems become more pervasive, concerns around data
                    security and privacy have grown. Centralized storage
                    solutions are vulnerable to breaches, putting sensitive user
                    data at risk. Users need assurance that their data is secure
                    and private.
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
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg"
                      alt="check"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Centralized Data Management
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    Traditional AI models rely on centralized data management,
                    which creates single points of failure and limits the
                    control users have over their data. This approach is not
                    only risky but also inefficient in terms of data management
                    and utilization.
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
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg"
                      alt="html tag"
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Lack of Secure AI Solutions
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    While AI has immense potential, the lack of secure solutions
                    deters many businesses and individuals from fully adopting
                    AI technologies. There is a need for a platform that
                    integrates high-level security measures in AI development
                    and deployment.
                  </p>
                </div>
              </div>
              {/* <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg" alt="monitor" />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-lg font-semibold leading-tight text-gray-800">The Last UI kit you’ll ever need</h2>
                  <p tabIndex={0} className="focus:outline-none text-base text-gray-600 leading-normal pt-2">We have chosen the bright color palettes that arouse the only positive emotions. The kit that simply assures to be loved by everyone.</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Code block ends */}
      </div>
    </div>
  );
}
