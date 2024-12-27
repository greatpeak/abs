"use client";
import "./styles.css";
import contactEmail from "../../assets/contact-email.svg";
import contactPhone from "../../assets/contact-phone.svg";
import blueListMarker from "../../assets/blue-list-marker.svg";
import greyExpand from "../../assets/expand-icon.svg";
import MobileBanner from "./MobileBanner";
import DesktopBanner from "./DesktopBanner";
import { useState } from "react";
import Toast, {
  notifyError,
  notifySuccess,
  notifyWarning,
} from "../toastify/index";

function AccordionItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex space-x-2 mt-4">
      <img
        src={blueListMarker}
        width={150}
        height={100}
        alt=""
        className="w-[1.2rem] md:w-[1.7rem] self-start"
      />
      <div className="flex-grow">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <p className="text-[0.9rem] md:text-[1.3rem] font-[500] leading-[1.5rem] text-[#3d3d3d]">
            {title}
          </p>
          <img
            src={greyExpand}
            width={150}
            height={100}
            alt=""
            className={`w-[0.9rem] md:w-[1.7rem] transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
        {isExpanded && (
          <div className="mt-2">
            <p className="text-[0.7rem] md:text-[1rem] text-[#646464] font-[500] leading-[1rem]">
              {description}
            </p>
          </div>
        )}
        <div className="h-[1px] bg-[#f1f1f1] w-full mt-2"></div>
      </div>
    </div>
  );
}

  const items = [
    {
      title: "Fragmented Processes:",
      description:
        "If your educational institution's processes for managing data, communication, or scheduling are inconsistent, we can help streamline them.",
    },
    {
      title: "Inefficient Systems:",
      description:
        "Facing challenges with outdated systems? We can provide modern, scalable solutions.",
    },
    {
      title: "Student Engagement:",
      description:
        "Struggling to keep students engaged? Explore our tools for enhanced interaction and participation.",
    },
  ];



function ContactUs() {
  interface Formdata {
    title: string;
    email: string;
    message: string;
  }

  const [formState, setFormState] = useState<Formdata>({
    title: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Toast />
      <div>
        <div>
          {/* Hero section and form */}
          <div className="hero-bg relative pt-2 lg:flex items-center justify-between md:px-[4rem] lg:gap-x-[6rem]">
            <div className=" text-white lg:w-[45vw]">
              <h2 className="text-center md:text-left text-[1.2rem] md:text-[3rem] font-[700] leading-[1.5rem] md:leading-[3.5rem] mt-[1rem] ">
                Contact Us
              </h2>
              <p className="hidden md:block text-[1.2rem] mt-4 font-[500]">
                ABS is a cutting-edge mobile application designed to cater to
                the unique needs of university students. With its user-friendly
                interface and a wide array of services, UniConnect aims to
                streamline the academic journey and enhance the overall
                university experience.
              </p>
              {/* tablet ab0ve */}
              <div className="hidden md:flex mt-[2.5rem] justify-between gap-x-3">
                <div className="flex gap-x-4 items-center shrink-0">
                  <img
                    src={contactEmail}
                    width={150}
                    height={100}
                    alt=""
                    className="w-[2rem] shrink-0"
                  />
                  <div className="flex flex-col gap-y-1">
                    <p className="text-[1rem] font-[500] leading-[1rem] ">
                      Email
                    </p>
                    <p className="text-[1rem] font-[500] leading-[1rem] ">
                      abstechnology.developers@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4 items-center shrink-0">
                  <img
                    src={contactPhone}
                    width={150}
                    height={100}
                    alt=""
                    className="w-[2rem] shrink-0"
                  />
                  <div className="flex flex-col gap-y-1">
                    <p className="text-[1rem] font-[500] leading-[1rem] ">
                      Phone number
                    </p>
                    <p className="text-[1rem] font-[500] leading-[1rem] ">
                      08126600734
                    </p>
                  </div>
                </div>
              </div>
              {/* mobile */}
              <div className="md:hidden mt-[1.5rem]">
                <div className="flex justify-center gap-x-1">
                  <img
                    src={contactEmail}
                    width={150}
                    height={100}
                    alt=""
                    className="w-[0.9rem]"
                  />
                  <p className="text-[0.8rem] font-[500]">Email</p>
                </div>
                <p className="text-center text-[0.8rem] leading-[1.3rem] ">
                  abstechnology.developers@gmail.com
                </p>
                <div className="flex justify-center gap-x-1">
                  <img
                    src={contactPhone}
                    width={150}
                    height={100}
                    alt=""
                    className="w-[0.9rem]"
                  />
                  <p className="text-[0.8rem] font-[500]">Phone number</p>
                </div>
                <p className="text-center text-[0.8rem] leading-[1.3rem] ">
                  08126600734
                </p>
              </div>
            </div>

            {/* contact form */}
            <form
              className="rounded-[0.6rem] bg-white p-[1.5rem] mx-auto mt-[1.2rem] w-[80vw] md:w-[65vw] md:mt-[3rem] lg:w-[45vw]"
              // onSubmit={(e) => handleSubmit(e)}
            >
              <input
                className="font-[500] outline-offset-[-2px] outline-none bg-[#f2f2f2] rounded-[.4rem] py-[0.5rem] px-4 w-full mt-[1.5rem] placeholder:text-[#b1b1b1] placeholder:text-[0.8rem]"
                placeholder="Name"
                name="title"
                type="text"
                onChange={handleChange}
                required
              />
              <input
                className="font-[500] outline-offset-[-2px] outline-none bg-[#f2f2f2] rounded-[.4rem] py-[0.5rem] px-4 w-full mt-[1.5rem] placeholder:text-[#b1b1b1] placeholder:text-[0.8rem]"
                placeholder="Email address"
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
              <textarea
                className="font-[500] outline-offset-[-2px] outline-none bg-[#f2f2f2] rounded-[.4rem] py-[0.5rem] px-4 w-full mt-[1.5rem] placeholder:text-[#b1b1b1] placeholder:text-[0.8rem]"
                placeholder="Type your message here"
                name="message"
                onChange={handleChange}
                required
              />
              <div className="justify-end flex"></div>
            </form>
          </div>

          <div className="flex flex-col md:gap-x-[2rem] gap-y-[2.5rem] w-full md:flex-row md:justify-between bg-white pt-[20rem] md:pt-[11rem] lg:pt-[4rem] px-[0.8rem] md:px-[3rem] pb-4">
            <div className="w-full md:w-[587px] ">
              <p className="text-[0.9rem] md:text-[2rem] font-[500] leading-[1.3rem] text-[#3d3d3d] md:leading-[2rem] ">
                How do you know you need <br className="hidden md:block" />
                <span className="text-[1.2rem] md:text-[2rem] text-[#6e58ff] ">
                  support from abs?{" "}
                </span>
              </p>
              <p className="text-[0.8rem] md:text-[1.3rem] md:leading-[1.5rem] font-[500] leading-4 mt-4 text-[#646464] ">
                Considering the functionalities abs possesses, reaching out to
                our edu tech startup that offers a comprehensive platform for
                students could be beneficial. Here are some indicators that
                suggest it&apos;s time to contact us:
              </p>
            </div>
<div className="md:w-[557px]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
          </div>

          <MobileBanner />
          <DesktopBanner />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
