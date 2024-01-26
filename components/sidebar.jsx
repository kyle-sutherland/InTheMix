import Image from "next/image";

function Sidebar() {
  return (
    <div>
      <div className="mx-auto pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0">
        <Image
          src="/In-The-Mix(teal).jpg"
          width={240}
          height={64}
          alt="navigate to home"
          aria-label="Navigate to homepage"
        />
      </div>
      <div className="bg-white"></div>
      <div className="bg-white">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-gray-200"></div>
          <div className="flex bg-gray-100  overflow-x-hidden">
            <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
              <div className="flex-col pt-5 flex overflow-y-auto">
                <div className="h-full flex-col justify-between px-4 flex">
                  <div className="space-y-4">
                    <div>
                      <div className="navigation mt-4 bg-top bg-cover space-y-1">
                        <a
                          href="/#about"
                          className="font-medium  items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                          transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 mr-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0
                                002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0
                                012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                  />
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>About Us</span>
                        </a>
                        <a
                          href="/#cocktails"
                          className="font-medium  items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                          transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 mr-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0
                                0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                  />
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>Signature Cocktails</span>
                        </a>
                        <a
                          href="/#contact"
                          className="font-medium  items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                          transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                        >
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 mr-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0
                                0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                  />
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>Contact</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
