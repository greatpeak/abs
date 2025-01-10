import downArrow from "../../assets/downArrow.svg";
import schoolLogo from "../../assets/schoolLogo.svg";
import SchoolChrome from "../../assets/bi_browser-chrome.svg";
import Logo from "../../assets/logo.svg";
import HarvardLogo from "../../assets/harvardLogo.svg";
// import zincPIcture from "../../assets/zuci picture.svg";
import UniPicture from "../../assets/uni.svg";
function Scholarship() {
  return (
    <div className="md:py-[60px] md:px-[90px]">
      {/* first Page code */}
      <div>
        <div className="flex justify-between mb-[36px]">
          <div>
            <h2 className="md:text-[28px] mb-2 font-medium">
              Location category
            </h2>
            <p className="md:text-[16px] font-medium">
              These are scholarships based on your preferred location
            </p>
          </div>
          <div className="bg-[#6E58FF] py-[16px] px-[20px] flex gap-2 rounded-2xl justify-center items-center">
            <h6 className="md:text-[16px] font-medium text-white">
              Opportunities
            </h6>
            <div className="h-[12px] bg-[#FFFFFF] border-[1px]"></div>
            <div className="flex gap-2">
              <h6 className="md:text-[16px] font-medium text-[#D4D3FC]">
                USA scholarships
              </h6>
              <button>
                <img src={downArrow} alt="okay" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:gap-[34px]">
          {/* right */}
          <div className="flex gap-[32px]">
            <div className="p-[16px] ">
              <div className="">
                <img src={UniPicture} alt="" />
                <h1 className="text-[22px] font-bold w-[440px] mt-3">
                  Scholarship opportunity for undergraduate in University of
                  Cyprus.
                </h1>
              </div>
              <div className="">
                <div className="flex gap-3 mt-2">
                  <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                    <img src={Logo} alt="" />
                  </div>{" "}
                  <h1 className="text-[16px] font-medium">ABS opportunities</h1>
                  <div className="rounded-lg px-[6px] bg-[#F6F5FF]">
                    <p className="text-[12px] font-medium text-[#6E58FF]">
                      Scholarship
                    </p>
                  </div>
                  <p className="text-[12px] font-medium text-[#8A8A8A]">4h</p>
                </div>
                <div>
                  <p className="text-[12px] mt-3 font-medium text-[#3D3D3D] w-[440px]">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel, thesis or research.
                  </p>
                </div>
              </div>
            </div>
            <div>
              {/* card 1 */}
              <div className="flex gap-[17px]">
                <div className="w-[101px] h-[100px]">
                  <img src={HarvardLogo} alt="" />
                </div>
                <div className=" flex flex-col">
                  <div>
                    <h1 className="text-[14px] mb-[8px] font-bold w-[200px]">
                      Scholarship opportunity for undergraduate in ...
                    </h1>
                    <div className="flex gap-2 justify-start items-center place-content-center">
                      {" "}
                      <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                        <img src={Logo} alt="" />
                      </div>
                      <div>
                        <div className="flex gap-[6px]">
                          <h6 className="text-[14px] font-medium">
                            ABS opportunities
                          </h6>
                          <p className="text-[12px] font-medium text-[#8A8A8A]">
                            4h
                          </p>
                        </div>
                        <div className="py-[2px] rounded-lg px-[6px] bg-[#F6F5FF]">
                          <p className="text-[12px] font-medium text-[#6E58FF]">
                            Skill acquisition{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="w-[257px] text-[12px] text-[#3D3D3D] mt-4 font-medium">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel, thesis or research.
                  </p>
                </div>
              </div>
              {/* card 1 */}
              <div className="flex gap-[17px]">
                <div className="w-[101px] h-[100px]">
                  <img src={HarvardLogo} alt="" />
                </div>
                <div className=" flex flex-col">
                  <div>
                    <h1 className="text-[14px] mb-[8px] font-bold w-[200px]">
                      Scholarship opportunity for undergraduate in ...
                    </h1>
                    <div className="flex gap-2 justify-start items-center place-content-center">
                      {" "}
                      <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                        <img src={Logo} alt="" />
                      </div>
                      <div>
                        <div className="flex gap-[6px]">
                          <h6 className="text-[14px] font-medium">
                            ABS opportunities
                          </h6>
                          <p className="text-[12px] font-medium text-[#8A8A8A]">
                            4h
                          </p>
                        </div>
                        <div className="py-[2px] rounded-lg px-[6px] bg-[#F6F5FF]">
                          <p className="text-[12px] font-medium text-[#6E58FF]">
                            Skill acquisition{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="w-[257px] text-[12px] text-[#3D3D3D] mt-4 font-medium">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel, thesis or research.
                  </p>
                </div>
              </div>
              {/* card 1 */}
              <div className="flex gap-[17px]">
                <div className="w-[101px] h-[100px]">
                  <img src={HarvardLogo} alt="" />
                </div>
                <div className=" flex flex-col">
                  <div>
                    <h1 className="text-[14px] mb-[8px] font-bold w-[200px]">
                      Scholarship opportunity for undergraduate in ...
                    </h1>
                    <div className="flex gap-2 justify-start items-center place-content-center">
                      {" "}
                      <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                        <img src={Logo} alt="" />
                      </div>
                      <div>
                        <div className="flex gap-[6px]">
                          <h6 className="text-[14px] font-medium">
                            ABS opportunities
                          </h6>
                          <p className="text-[12px] font-medium text-[#8A8A8A]">
                            4h
                          </p>
                        </div>
                        <div className="py-[2px] rounded-lg px-[6px] bg-[#F6F5FF]">
                          <p className="text-[12px] font-medium text-[#6E58FF]">
                            Skill acquisition{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="w-[257px] text-[12px] text-[#3D3D3D] mt-4 font-medium">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel, thesis or research.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* middle */}
          <div className="bg-[#F2F2F2] h-[569px] w-[2px]"></div>
          <div>
            {/* left */}
            <div>
              <div className="py-[12px] px-[16px]">
                <div>
                  <div className="relative mb-3">
                    <img
                      src={schoolLogo}
                      alt=""
                      className=" object-cover w-[274px] h-[130px]"
                    />
                    <div className="absolute py-2 px-3 bg-[#6E58FF] rounded-xl bottom-2 right-2">
                      <div className="flex gap-2">
                        <img src={SchoolChrome} alt="" />{" "}
                        <p className="underline text-white">Harvard.com</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-left flex flex-col justify-start items-start 
              "
                  >
                    <div className="flex gap-2 justify-center items-center place-content-center">
                      {" "}
                      <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                        <img src={Logo} alt="" />
                      </div>
                      <div>
                        <div className="flex gap-[6px]">
                          <h6 className="text-[14px] font-medium">
                            ABS opportunities
                          </h6>
                          <p className="text-[12px] font-medium text-[#8A8A8A]">
                            4h
                          </p>
                        </div>
                        <div className="py-[2px] rounded-lg px-[6px] bg-[#F6F5FF]">
                          <p className="text-[12px] font-medium text-[#6E58FF]">
                            Scholarship
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[14px] font-bold w-[274px] mt-4">
                      Scholarship opportunity for undergraduate in ...
                    </h1>
                    <p className="text-[11px] mt-2 font-medium w-[274px]">
                      The RTF Scholarships is specifically designed to pay for
                      tuition fees, help with living costs, and provide other
                      allowances that covers travel...
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-[12px] px-[16px]">
                <div>
                  <div className="relative mb-3">
                    <img
                      src={schoolLogo}
                      alt=""
                      className=" object-cover w-[274px] h-[130px]"
                    />
                    <div className="absolute py-2 px-3 bg-[#6E58FF] rounded-xl bottom-2 right-2">
                      <div className="flex gap-2">
                        <img src={SchoolChrome} alt="" />{" "}
                        <p className="underline text-white">Harvard.com</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="text-left flex flex-col justify-start items-start 
              "
                  >
                    <div className="flex gap-2 justify-center items-center place-content-center">
                      {" "}
                      <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                        <img src={Logo} alt="" />
                      </div>
                      <div>
                        <div className="flex gap-[6px]">
                          <h6 className="text-[14px] font-medium">
                            ABS opportunities
                          </h6>
                          <p className="text-[12px] font-medium text-[#8A8A8A]">
                            4h
                          </p>
                        </div>
                        <div className="py-[2px] rounded-lg px-[6px] bg-[#F6F5FF]">
                          <p className="text-[12px] font-medium text-[#6E58FF]">
                            Scholarship
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[14px] font-bold w-[274px] mt-4">
                      Scholarship opportunity for undergraduate in ...
                    </h1>
                    <p className="text-[11px] mt-2 font-medium w-[274px]">
                      The RTF Scholarships is specifically designed to pay for
                      tuition fees, help with living costs, and provide other
                      allowances that covers travel...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second page code*/}
      <div className="flex gap-[89px]">
        {/* left */}
        <div className=" flex justify-start text-left flex-col gap-[24px] w-[359px]">
          {/* search Location */}
          <div className="w-[359px]">
            <input
              type="text"
              placeholder="search information"
              className="bg-[#F2F2F2] py-3 px-6 rounded-2xl w-[359px]"
            />
          </div>
          <div className="bg-[#F2F2F2] py-3 px-4 rounded-xl">
            <div className="mb-5">
              <h1 className="text-[16px] font-medium mb-2">Location</h1>
              <div className="w-[318px] bg-[#646464] h-[2px]"></div>
            </div>
            <div className="flex flex-col gap-[18px]">
              <div>
                <h1 className="text-[14px] border-l-black border-[2px] bg-white w-[207px] p-[10px] rounded-r-3xl text-[#3D3D3D] font-medium mb-3">
                  USA Scholarship
                </h1>
                <div className="w-[318px] bg-[#FFFFFF] h-[2px]"></div>
              </div>
              <div>
                <h1 className="text-[14px] text-[#3D3D3D] font-medium mb-3">
                  London Scholarship{" "}
                </h1>
                <div className="w-[318px] bg-[#FFFFFF] h-[2px]"></div>
              </div>
              <div>
                <h1 className="text-[14px] text-[#3D3D3D] font-medium mb-3">
                  Nigeria Scholarship{" "}
                </h1>
                <div className="w-[318px] bg-[#FFFFFF] h-[2px]"></div>
              </div>
              <div>
                <h1 className="text-[14px] text-[#3D3D3D] font-medium mb-3">
                  South Africa{" "}
                </h1>
                <div className="w-[318px] bg-[#FFFFFF] h-[2px]"></div>
              </div>
              <div>
                <h1 className="text-[14px] text-[#3D3D3D] font-medium mb-3">
                  Australia scholarship{" "}
                </h1>
                <div className="w-[318px] bg-[#FFFFFF] h-[2px]"></div>
              </div>
              <div>
                <h1 className="text-[14px] text-[#3D3D3D] font-medium mb-3">
                  Canada scholarship{" "}
                </h1>
                <div className="w-[318px] bg-[#FFFFFF] h-[2px]"></div>
              </div>
            </div>
          </div>
          {/* search Location end */}

          {/* Top info for you code */}
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-[22px] font-medium">Top picks for you</h1>
            <div className="flex flex-col gap-[28px]">
              <div>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex gap-[22px]">
                    <div className="relative">
                      <img src={HarvardLogo} alt="" />{" "}
                      <img
                        src={Logo}
                        alt=""
                        className="absolute right-1 bottom-4 bg-[#F2F2F2] p-2 rounded-full"
                      />
                    </div>
                    <div className="">
                      <h1 className="w-[246px] text-[14px] font-bold mb-[8px]">
                        Scholarship opportunity in Tokyo for undergraduates.
                      </h1>
                      <div className="flex flex-col gap-[2px]">
                        <div className="flex gap-[6px]">
                          <h2 className="text-[14px] font-medium">
                            Tech camp ABS
                          </h2>
                          <p className="text-[12px] font-medium text-[#8A8A8A]">
                            {" "}
                            4h
                          </p>
                        </div>
                        <div className="px-[6px] py-[2px] bg-[#F6F5FF] w-auto">
                          <p className="text-[12px] text-[#6E58FF] font-medium">
                            Scholarship
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-medium text-[12px]">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel, thesis or research.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[357px] bg-[#F2F2F2] h-[2px]"></div>
            <div className="flex flex-col gap-[28px]">
              <div>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex gap-[22px]">
                    <div className="relative">
                      <img src={HarvardLogo} alt="" />{" "}
                      <img
                        src={Logo}
                        alt=""
                        className="absolute right-1 bottom-4 bg-[#F2F2F2] p-2 rounded-full"
                      />
                    </div>
                    <div className="">
                      <h1 className="w-[246px] text-[14px] font-bold mb-[8px]">
                        Scholarship opportunity in Tokyo for undergraduates.
                      </h1>
                      <div className="flex flex-col gap-[2px]">
                        <div className="flex gap-[6px]">
                          <h2 className="text-[14px] font-medium">
                            Tech camp ABS
                          </h2>
                          <p className="text-[12px] font-medium text-[#8A8A8A]">
                            {" "}
                            4h
                          </p>
                        </div>
                        <div className="px-[6px] py-[2px] bg-[#F6F5FF] w-auto">
                          <p className="text-[12px] text-[#6E58FF] font-medium">
                            Scholarship
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-medium text-[12px]">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel, thesis or research.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[357px] bg-[#F2F2F2] h-[2px]"></div>
            <div className="flex flex-col gap-[28px]">
              <div>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex gap-[22px]">
                    <div className="relative">
                      <img src={HarvardLogo} alt="" />{" "}
                      <img
                        src={Logo}
                        alt=""
                        className="absolute right-1 bottom-4 bg-[#F2F2F2] p-2 rounded-full"
                      />
                    </div>
                    <div className="">
                      <h1 className="w-[246px] text-[14px] font-bold mb-[8px]">
                        Scholarship opportunity in Tokyo for undergraduates.
                      </h1>
                      <div className="flex flex-col gap-[2px]">
                        <div className="flex gap-[6px]">
                          <h2 className="text-[14px] font-medium">
                            Tech camp ABS
                          </h2>
                          <p className="text-[12px] font-medium text-[#8A8A8A]">
                            {" "}
                            4h
                          </p>
                        </div>
                        <div className="px-[6px] py-[2px] bg-[#F6F5FF] w-auto">
                          <p className="text-[12px] text-[#6E58FF] font-medium">
                            Scholarship
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="font-medium text-[12px]">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel, thesis or research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="grid grid-rows-3 grid-cols-2 gap-[40px]">
          {/* card 1 */}
          <div className="bg-[#FFFFFF] shadow-lg rounded-md">
            <div>
              <div className="relative mb-3">
                <img
                  src={schoolLogo}
                  alt=""
                  className=" object-cover w-[386px] h-[196px]"
                />
                <div className="absolute py-2 px-3 bg-[#6E58FF] rounded-xl bottom-2 right-2">
                  <div className="flex gap-2">
                    <img src={SchoolChrome} alt="" />{" "}
                    <p className="underline text-white">Harvard.com</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div
                  className="text-left flex flex-col justify-start items-start 
              "
                >
                  <div className="flex gap-2 justify-center items-center place-content-center">
                    {" "}
                    <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                      <img src={Logo} alt="" />
                    </div>
                    <div>
                      <div className="flex gap-[6px]">
                        <h6 className="text-[14px] font-medium">
                          ABS opportunities
                        </h6>
                        <p className="text-[12px] font-medium text-[#8A8A8A]">
                          4h
                        </p>
                      </div>
                      <div className="py-[2px] rounded-lg px-[6px] bg-[#F6F5FF]">
                        <p className="text-[12px] font-medium text-[#6E58FF]">
                          Scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[14px] font-bold mt-4">
                    Scholarship opportunity for undergraduate in ...
                  </h1>
                  <p className="text-[11px] mt-2 font-medium">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel...
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* card 2 */}
          <div className="bg-[#FFFFFF] shadow-lg rounded-md">
            <div>
              <div className="relative mb-3">
                <img
                  src={schoolLogo}
                  alt=""
                  className=" object-cover w-[386px] h-[196px]"
                />
                <div className="absolute py-2 px-3 bg-[#6E58FF] rounded-xl bottom-2 right-2">
                  <div className="flex gap-2">
                    <img src={SchoolChrome} alt="" />{" "}
                    <p className="underline text-white">Harvard.com</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div
                  className="text-left flex flex-col justify-start items-start 
              "
                >
                  <div className="flex gap-2 justify-center items-center place-content-center">
                    {" "}
                    <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                      <img src={Logo} alt="" />
                    </div>
                    <div>
                      <div className="flex gap-[6px]">
                        <h6 className="text-[14px] font-medium">
                          ABS opportunities
                        </h6>
                        <p className="text-[12px] font-medium text-[#8A8A8A]">
                          4h
                        </p>
                      </div>
                      <div className="py-[2px] rounded-lg px-[6px] bg-[#F6F5FF]">
                        <p className="text-[12px] font-medium text-[#6E58FF]">
                          Scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[14px] font-bold mt-4">
                    Scholarship opportunity for undergraduate in ...
                  </h1>
                  <p className="text-[11px] mt-2 font-medium">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel...
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* card 3 */}
          <div className="bg-[#FFFFFF] shadow-lg rounded-md">
            <div>
              <div className="relative mb-3">
                <img
                  src={schoolLogo}
                  alt=""
                  className=" object-cover w-[386px] h-[196px]"
                />
                <div className="absolute py-2 px-3 bg-[#6E58FF] rounded-xl bottom-2 right-2">
                  <div className="flex gap-2">
                    <img src={SchoolChrome} alt="" />{" "}
                    <p className="underline text-white">Harvard.com</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div
                  className="text-left flex flex-col justify-start items-start 
              "
                >
                  <div className="flex gap-2 justify-center items-center place-content-center">
                    {" "}
                    <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                      <img src={Logo} alt="" />
                    </div>
                    <div>
                      <div className="flex gap-[6px]">
                        <h6 className="text-[14px] font-medium">
                          ABS opportunities
                        </h6>
                        <p className="text-[12px] font-medium text-[#8A8A8A]">
                          4h
                        </p>
                      </div>
                      <div className="py-[2px] rounded-lg px-[6px] bg-[#F6F5FF]">
                        <p className="text-[12px] font-medium text-[#6E58FF]">
                          Scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[14px] font-bold mt-4">
                    Scholarship opportunity for undergraduate in ...
                  </h1>
                  <p className="text-[11px] mt-2 font-medium">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel...
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* card 4 */}
          <div className="bg-[#FFFFFF] shadow-lg rounded-md">
            <div>
              <div className="relative mb-3">
                <img
                  src={schoolLogo}
                  alt=""
                  className=" object-cover w-[386px] h-[196px]"
                />
                <div className="absolute py-2 px-3 bg-[#6E58FF] rounded-xl bottom-2 right-2">
                  <div className="flex gap-2">
                    <img src={SchoolChrome} alt="" />{" "}
                    <p className="underline text-white">Harvard.com</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div
                  className="text-left flex flex-col justify-start items-start 
              "
                >
                  <div className="flex gap-2 justify-center items-center place-content-center">
                    {" "}
                    <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                      <img src={Logo} alt="" />
                    </div>
                    <div>
                      <div className="flex gap-[6px]">
                        <h6 className="text-[14px] font-medium">
                          ABS opportunities
                        </h6>
                        <p className="text-[12px] font-medium text-[#8A8A8A]">
                          4h
                        </p>
                      </div>
                      <div className="py-[2px] rounded-lg px-[6px] bg-[#F6F5FF]">
                        <p className="text-[12px] font-medium text-[#6E58FF]">
                          Scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[14px] font-bold mt-4">
                    Scholarship opportunity for undergraduate in ...
                  </h1>
                  <p className="text-[11px] mt-2 font-medium">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel...
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* card 5 */}
          <div className="bg-[#FFFFFF] shadow-lg rounded-md">
            <div>
              <div className="relative mb-3">
                <img
                  src={schoolLogo}
                  alt=""
                  className=" object-cover w-[386px] h-[196px]"
                />
                <div className="absolute py-2 px-3 bg-[#6E58FF] rounded-xl bottom-2 right-2">
                  <div className="flex gap-2">
                    <img src={SchoolChrome} alt="" />{" "}
                    <p className="underline text-white">Harvard.com</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div
                  className="text-left flex flex-col justify-start items-start 
              "
                >
                  <div className="flex gap-2 justify-center items-center place-content-center">
                    {" "}
                    <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                      <img src={Logo} alt="" />
                    </div>
                    <div>
                      <div className="flex gap-[6px]">
                        <h6 className="text-[14px] font-medium">
                          ABS opportunities
                        </h6>
                        <p className="text-[12px] font-medium text-[#8A8A8A]">
                          4h
                        </p>
                      </div>
                      <div className="py-[2px] rounded-lg px-[6px] bg-[#F6F5FF]">
                        <p className="text-[12px] font-medium text-[#6E58FF]">
                          Scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[14px] font-bold mt-4">
                    Scholarship opportunity for undergraduate in ...
                  </h1>
                  <p className="text-[11px] mt-2 font-medium">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel...
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* card 6 */}
          <div className="bg-[#FFFFFF] shadow-lg rounded-md">
            <div>
              <div className="relative mb-3">
                <img
                  src={schoolLogo}
                  alt=""
                  className=" object-cover w-[386px] h-[196px]"
                />
                <div className="absolute py-2 px-3 bg-[#6E58FF] rounded-xl bottom-2 right-2">
                  <div className="flex gap-2">
                    <img src={SchoolChrome} alt="" />{" "}
                    <p className="underline text-white">Harvard.com</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div
                  className="text-left flex flex-col justify-start items-start 
              "
                >
                  <div className="flex gap-2 justify-center items-center place-content-center">
                    {" "}
                    <div className="bg-[#F2F2F2] mb-3 flex px-[6.46px] rounded-[100%] justify-center items-center py-[11.22px]">
                      <img src={Logo} alt="" />
                    </div>
                    <div>
                      <div className="flex gap-[6px]">
                        <h6 className="text-[14px] font-medium">
                          ABS opportunities
                        </h6>
                        <p className="text-[12px] font-medium text-[#8A8A8A]">
                          4h
                        </p>
                      </div>
                      <div className="py-[2px] rounded-lg px-[6px] bg-[#F6F5FF]">
                        <p className="text-[12px] font-medium text-[#6E58FF]">
                          Scholarship
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-[14px] font-bold mt-4">
                    Scholarship opportunity for undergraduate in ...
                  </h1>
                  <p className="text-[11px] mt-2 font-medium">
                    The RTF Scholarships is specifically designed to pay for
                    tuition fees, help with living costs, and provide other
                    allowances that covers travel...
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Scholarship;
