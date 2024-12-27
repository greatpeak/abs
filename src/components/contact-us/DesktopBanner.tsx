import "./styles.css";
import facebook from "../../assets/footer-fb.svg";
import linkedIn from "../../assets/footer-linkedin.svg";
import twitter from "../../assets/footer-twitter.svg";

function DesktopBanner() {
  return (
    <div className="hidden contactus-banner mt-[8rem] px-8 text-white mb-8 pt-3 md:flex items-center justify-between">
      <div className="w-[46vw]">

      </div>

      <div className="w-[50vw] text-left mt-16 lg:mt-8">
        <h2 className="text-[1.6rem] lg:text-[2rem] font-[500] leading-[2.5rem] tracking-[0.002rem] mt-8">
          We will help you <span className="text-[#f7be39]">before</span>,
          during and <span className="text-[#f7be39]">after</span> your{" "}
          <span className="text-[#f7be39]">university days</span>
        </h2>
        <p className="text-[1.2rem] font-[500] leading-[1.5rem] mt-4">
          ABS is a cutting-edge mobile application designed to cater to the
          unique needs of university students. With its user-friendly interface
          and a wide array of services, UniConnect aims to streamline the
          academic journey and enhance the overall university experience.
        </p>
        <a href="#top" className="block w-max text-[#161616] text-[1.2rem] font-[700] md:font-[700] leading-[1.5rem] mt-4 bg-[#f7be39] hover:bg-[#d1a43d] p-4 rounded-[0.4rem] ">
          Contact Us
        </a>

        <div className="flex gap-x-4 items-center justify-start mt-4 mb-8">
          <div className="flex gap-x-2 items-end">
            <img
              src={facebook}
              width={100}
              height={100}
              alt=""
              className="w-[1.6rem] h-[1.6rem]"
            />
            <p className="text-[1rem] leading-[1.4rem] tracking-[0.003] mt-2 lg:mt-0">
              Facebook
            </p>
          </div>
          <div className="flex gap-x-2 items-end">
            <img
              src={linkedIn}
              width={100}
              height={100}
              alt=""
              className="w-[1.6rem] h-[1.6rem]"
            />
            <p className="text-[1rem] leading-[1.4rem] tracking-[0.003] mt-2 lg:mt-0">
              Linkedin
            </p>
          </div>
          <div className="flex gap-x-2 items-end">
            <img
              src={twitter}
              width={100}
              height={100}
              alt=""
              className="w-[1.6rem] h-[1.6rem]"
            />
            <p className="text-[1rem] leading-[1.4rem] tracking-[0.003] mt-2 lg:mt-0">
              Twitter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopBanner;
