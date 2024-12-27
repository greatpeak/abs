import "./styles.css";
import facebook from "../../assets/footer-fb.svg";
import linkedIn from "../../assets/footer-linkedin.svg";
import twitter from "../../assets/footer-twitter.svg";

function MobileBanner() {
  return (
    <div className="md:hidden contactus-banner mt-[4rem] px-8 text-white mb-8 pt-3  space-x-[2rem] items-center justify-between">
      <div className="text-center">
        <h2 className="text-[1rem] font-[500] leading-[1.2rem] tracking-[0.002rem] mt-8">
          We will help you <span className="text-[#f7be39]">before</span>,
          during and <span className="text-[#f7be39]">after</span> your{" "}
          <span className="text-[#f7be39]">university days</span>
        </h2>
        <p className="text-[0.75rem] font-[500] leading-[1rem] mt-4">
          ABS is a cutting-edge mobile application designed to cater to the
          unique needs of university students. With its user-friendly interface
          and a wide array of services, UniConnect aims to streamline the
          academic journey and enhance the overall university experience.
        </p>
        <a
          href="#top"
          className="block w-max mx-auto text-[#161616] text-[0.75rem] font-[500] leading-[1rem] mt-4 bg-[#f7be39] hover:bg-[#d1a43d] p-2 rounded-[0.4rem] "
        >
          Contact Us
        </a>

        <div className="flex gap-x-8 items-center justify-center mt-4 mb-8">
          <div className="flex gap-x-2 items-end">
            <img
              src={facebook}
              width={100}
              height={100}
              alt=""
              className="w-[1rem] h-[1rem]"
            />
            <p className="text-[0.6rem] leading-[1rem] tracking-[0.003] mt-2">
              Facebook
            </p>
          </div>
          <div className="flex gap-x-2 items-end">
            <img
              src={linkedIn}
              width={100}
              height={100}
              alt=""
              className="w-[1rem] h-[1rem]"
            />
            <p className="text-[0.6rem] leading-[1rem] tracking-[0.003] mt-2">
              Linkedin
            </p>
          </div>
          <div className="flex gap-x-2 items-end">
            <img
              src={twitter}
              width={100}
              height={100}
              alt=""
              className="w-[1rem] h-[1rem]"
            />
            <p className="text-[0.6rem] leading-[1rem] tracking-[0.003] mt-2">
              Twitter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileBanner;
