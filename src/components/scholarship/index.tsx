import downArrow from "../../assets/downArrow.svg";
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
      <div className="flex justify-evenly md:gap-[34px]">
        <div></div>
        <div className="bg-[#F2F2F2] h-[569px] w-[2px]"></div>
        <div><div className="py-[12px] px-[16px]"></div></div>
      </div>
    </div>
  );
}

export default Scholarship;
