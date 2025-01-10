import downArrow from "../../assets/downArrow.svg";
import schoolLogo from "../../assets/schoolLogo.svg";
import SchoolChrome from "../../assets/bi_browser-chrome.svg";
import Logo from "../../assets/logo.svg";
import HarvardLogo from "../../assets/harvardLogo.svg";
import UniPicture from "../../assets/uni.svg";
function Scholarship() {
  return (
    <div className="md:py-[60px] md:px-[90px]">
      <div className="flex justify-between mb-[36px]">
        <div>
          <h2 className="md:text-[28px] mb-2 font-medium">Location category</h2>
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
  );
}

export default Scholarship;
