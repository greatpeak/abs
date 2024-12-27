import { motion } from "framer-motion";
import { FooterLinks, IconsFooter } from "../../util/util";
import { Link } from "react-router-dom";

const contactItems = [
  { text: "(+234) 812 6600 7344" },
  { text: "Warri, Delta state, Nigeria" },
  { text: "abstechnology.developers@gmail.com" },
];

function Footer() {
  return (
    <div className="w-full bg-[#6e58ff] ">
      <div className="w-[90%] mx-auto text-white">
        <section className="flex items-center justify-between flex-wrap">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="md:items-center px-4 py-3  flex flex-col gap-[20px]"
            >
              <p className="text-[12px] md:text-[1rem] lg:text-[1.3rem] font-[500] leading-normal whitespace-nowrap">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        <hr className="h-[1px] bg-gray-900 " />
        <div className="">
          <div
            className="flex flex-row flex-wrap
        desk-md:gap-[84px] desk-md:p-[11px] gap-[20px] "
          >
            {Object.entries(FooterLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-[500] leading-[20px] text-[14px] my-2 desk-md:text-[24px] desk-md:leading-[32px]">
                  {category}
                </h4>
                <div className="flex items-center flex-col">
                  <div className="w-full mt-2 flex flex-col desk-md:gap-[15px] gap-[5px]">
                    {links.map((link, index) => (
                      <ul key={index}>
                        <li>
                          <Link
                            to={link.url}
                            className="hover:underline text-[12px] leading-[16px] font-[400]"
                          >
                            {link.name}
                          </Link>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="max-[1060px]:w-full min-[1060px]:w-[30%]">
              <fieldset className="relative text-white">
                <h3 className="desk-md:text-[24px] font-[500] leading-[20px] text-[14px] mt-4 mb-3">
                  Subscribe
                </h3>
                <input
                  type="email"
                  className="border text-white bg-[#6e58ff] rounded-[12px] py-[.9rem] px-[1rem] text-left hover:outline-none focus:outline-none outline-none w-full"
                  placeholder="Email address"
                />

                <motion.button className="bg-white rounded-[12px] py-[1rem] px-[19px] absolute right-0 overflow-hidden"></motion.button>
              </fieldset>

              <p className="desk-md:text-[16px] my-3 font-[500] leading-[16px] text-[12px]">
                Get our new updates freshly on your gmail
              </p>
            </div>
          </div>
        </div>
        <hr className=" bg-gray-900" />

        <div className="flex justify-between items-center mt-[1rem]">
          <div className="flex gap-x-5 md:items-center">
            <p className="text-[0.6rem] md:text-[1rem] tracking-[0.003] mt-2 lg:mt-0">
              © {new Date().getFullYear()} abstechnology
            </p>
          </div>

          <div className="items-center gap-[2rem] flex">
            {IconsFooter.map((image: { name: string; url: string }) => (
              <div
                className="gap-[2rem] items-center justify-between flex"
                key={image.name}
              >
                <Link
                  to={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-[.5rem]"
                >
                  <span className="text-white text-[16px] leading-[24px] hidden desk-md:block">
                    {image.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
