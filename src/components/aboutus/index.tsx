import "./styles.css";
import smilingStudent from "../../assets/smiling-student.svg";
import smilingStudentMobile from "../../assets/smiling-student-mobile.svg";
import cardImage from "../../assets/cardImage.svg";
import happyStudents from "../../assets/happy-uni-students.svg";
import menhandshake from "../../assets/men-handshake.svg";
import polygon from "../../assets/polygon-marker.svg";
import Arrow from "../../assets/arrow.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/Caret-Right.svg";
import person1 from "../../assets/Handsome_bearded_businessman_rubbing_hands__having_deal-removebg-preview 1.svg";
import person2 from "../../assets/Cute_young_woman_posing_with_a_guitar_indoors-removebg-preview 1.svg";
import customersImage from "../../assets/customersImage.svg";
// import AboutUsSlide from "@/components/slick-slider/AboutUsSlide";

function AboutUs() {
  const teamMembers = [
    { name: "Oluwatobiloba Akinleye", image: person1, role: "Web Developer" },
    { name: "Maria Gonzalez", image: person2, role: "UI/UX designer" },
    { name: "Oluwatobiloba Akinleye", image: person1, role: "UI/UX designer" },
    { name: "Oluwatobiloba Akinleye", image: person1, role: "UI/UX designer" },
  ];

  return (
    <div>
      {/* Header */}
      <div>
        {/* Hero section */}
        <div className="mb-[5.5rem] mt-[5.5rem] ">
          <div className="md:ml-[3rem] lg:ml-[5.5rem] flex flex-col-reverse md:flex-row md:gap-x-3 md:items-center md:justify-between pl-[1rem] md:pl-0 md:gap-y-[1.5rem] ">
            <div className="w-full md:w-[50vw] px-[0.5rem] md:px-0">
              <h2 className="text-[1.3rem] md:text-[2rem] text-[#6e58ff] font-[700]">
                About Us
              </h2>
              <p className="text-[#3d3d3d] text-[1rem] leading-[1.5rem] font-[500]">
                ABS is a cutting-edge mobile application designed to cater to
                the unique needs of university students. With its user-friendly
                interface and a wide array of services, UniConnect aims to
                streamline the academic journey and enhance the overall
                university experience.
              </p>
            </div>
            <div className="w-full md:w-[50vw] shrink-0">
              <img
                src={smilingStudentMobile}
                width={150}
                height={100}
                alt="student smiling"
                className="w-full md:hidden"
              />
              <img
                src={smilingStudent}
                width={150}
                height={100}
                alt="student smiling"
                className="w-full hidden md:block"
              />
            </div>
          </div>
          {/* Our services section */}
          <div className="md:px-[3rem] lg:px-[5.5rem] flex flex-col md:flex-row gap-y-[1.5rem] md:gap-x-5 lg:gap-x-10 mt-10 items-center justify-between">
            <div className="w-full md:w-[46vw] lg:w-[60vw]">
              <img
                src={happyStudents}
                width={150}
                height={100}
                alt="people"
                className="w-full"
              />
            </div>
            <div className="w-full md:w-[30vw] px-[1rem] md:px-0">
              <h2 className="text-[1rem] text-[#6e58ff] font-[600]">
                We Are ABS
              </h2>
              <h2 className="text-[#161616] text-[1.4rem] md:text-[2.3rem] font-[700]">
                Our Services
              </h2>
              <p className="text-[#3d3d3d] text-[1rem] leading-[1.5rem] font-[500] ">
                ABS provides a one-stop platform for students to access study
                materials, lecture notes, and assignment reminders. It offers a
                built-in calendar to help students stay organized and never miss
                important deadlines.
              </p>
            </div>
          </div>
        </div>
        {/* What we serve section */}
        <div className="what-we-serve-bg flex flex-col lg:flex-row lg:items-center justify-evenly lg:justify-between md:px-[3rem] lg:pl-[5.5rem]">
          <div className="px-4 md:px-0 lg:w-[40vw] shrink-0">
            <h2 className="text-[0.9rem] text-[#6e58ff] font-[500] md:font-[700] md:text-[1.1rem] tracking-wider leading-[1.5rem] ">
              What we serve
            </h2>
            <h2 className="text-[#161616] font-[500] text-[1.3rem] mt-2 md:text-[1.6rem] lg:text-[2rem] ">
              We will help you before, during and after your university days.
            </h2>
            <p className="text-[#646464] text-[0.7rem] md:text-[1.2rem]  mt-[1.2rem] tracking-wide leading-[1.2rem] md:leading-[1.7rem] ">
              ABS is the ultimate companion for university students, offering
              them convenience, connectivity, and support throughout their
              academic journey. With this app, students can make the most of
              their university experience and excel in their studies while
              staying connected with their campus community.
            </p>
          </div>

          {/* <AboutUsSlide /> */}
        </div>

        {/* Work with us section */}
        <div className="relative my-[2.8rem] md:flex md:flex-col-reverse lg:flex-row lg:justify-end items-center md:justify-between  md:px-[3rem] lg:px-[5.5rem]">
          <div className="lg:mt-0 shrink-0 px-[0.8rem] md:px-[3rem] lg:px-[5.5rem] py-8 work-with-us-bg rounded-[1rem] relative">
            <div className="hidden lg:block absolute lg:top-[-10%] xlg:top-[10%] right-[90%] shrink-0 lg:w-[85%] xlg:w-[35rem] md:mt-6 lg:mt-0">
              <img
                src={menhandshake}
                className="h-[633px] w-[726px]"
                alt="Men shaking hands"
              />
            </div>

            <div className="absolute right-[1.5rem] top-[-1.7rem] lg:top-[70%]  lg:left-[-3.5rem] rounded-[50%] bg-[#6e58ff] w-[5.2rem] md:hidden shrink-0 text-center h-[5.2rem] text-white flex items-center justify-center">
              <p className="w-[4.7rem] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem]">
                Why work with us
              </p>
            </div>
            <div>
              <div>
                <div className="flex gap-x-[0.4rem] md:gap-x-[0.75rem] items-center">
                  <img
                    src={polygon}
                    className="w-[0.5rem] h-[0.5rem] md:w-[0.7rem] md:h-[0.7rem]"
                    alt="marker"
                  />
                  <h2 className="text-[#3d3d3d] text-[0.9rem] md:text-[1.4rem] md:leading-[2rem] font-[700] tracking-wide leading-[1.5rem] ">
                    Academic Excellence
                  </h2>
                </div>
                <p className="mt-2 text-[#646464] text-[0.8rem] md:text-[1rem] md:leading-[1.5rem] font-[500] leading-[1.2rem] tracking-wide">
                  ABS provides a one-stop platform for students to access study
                  materials, lecture notes, and assignment reminders.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex gap-x-[0.4rem] md:gap-x-[0.75rem] items-center">
                  <img
                    src={polygon}
                    className="w-[0.5rem] h-[0.5rem] md:w-[0.7rem] md:h-[0.7rem]"
                    alt="marker"
                  />
                  <h2 className="text-[#3d3d3d] text-[0.9rem] md:text-[1.4rem] md:leading-[2rem] font-[700] tracking-wide leading-[1.5rem] ">
                    Campus Newsfeed
                  </h2>
                </div>
                <p className="mt-2 text-[#646464] text-[0.8rem] md:text-[1rem] md:leading-[1.5rem] font-[500] leading-[1.2rem] tracking-wide">
                  Receive the latest news and announcements from the university
                  administration through the app&apos;s newsfeed, ensuring that
                  students are well-informed about campus updates.
                </p>
              </div>
              <div className="mt-8">
                <div className="flex gap-x-[0.4rem] md:gap-x-[0.75rem] items-center">
                  <img
                    src={polygon}
                    className="w-[0.5rem] h-[0.5rem] md:w-[0.7rem] md:h-[0.7rem]"
                    alt="marker"
                  />
                  <h2 className="text-[#3d3d3d] text-[0.9rem] md:text-[1.4rem] md:leading-[2rem] font-[700] tracking-wide leading-[1.5rem] ">
                    Social Networking
                  </h2>
                </div>
                <p className="mt-2 text-[#646464] text-[0.8rem] md:text-[1rem] md:leading-[1.5rem] font-[500] leading-[1.2rem] tracking-wide">
                  The app includes a feature for students to connect with peers,
                  join clubs and societies, and participate in extracurricular
                  activities. It fosters a sense of community among students and
                  encourages collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our team */}
        <div className="px-4 md:px-14  mb-10 overflow-x-hidden">
          <div className="w-full flex justify-between px-4 md:px-14  mb-1 ">
            <div className="flex self-end text-[12px] lg:text-[24px] font-bold text-[#6E58FF]">
              Our team
            </div>
            <div>
              <div className="flex lg:gap-x-16 gap-x-10">
                <h1 className="text-[16px] lg:text-[57px] font-bold">
                  Designers
                </h1>
                <h1 className="text-[16px] lg:text-[57px] text-[#646464] font-bold ">
                  Developers
                </h1>
              </div>
            </div>
          </div>

          <div className="flex relative justify-between items-center md:gap-10 mt-4">
            <div className="absolute gap-5 hidden md:flex right-6 top-[-10px]">
              <button>
                <img src={arrowLeft} alt="" />
              </button>{" "}
              <button>
                <img src={arrowRight} alt="" />
              </button>
            </div>
            <div className="bg-[#6E58FF] hidden md:block p-5 rounded-2xl">
              <div className="h-[462px] w-[344px]">
                <p className="mb-5 mt-2 text-[22px] text-white font-bold">
                  Creative designers
                </p>
                <h2 className="text-[32px]  text-white font-bold">
                  “Our design team helps to make sure the idea is intact while
                  trying to design what would bring a good change to students of
                  this age”{" "}
                </h2>
                <div className="flex justify-between">
                  <div></div>{" "}
                  <button>
                    <img
                      src={Arrow}
                      alt="arrow"
                      className="w-[48px] h-[48px]"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly gap-5">
              {teamMembers.map(
                (
                  person: { name: string; image: string; role: string },
                  index: number
                ) => (
                  <div key={index} className="bg-[#F2F2F2] relative w-[195px] md:w-[366px] h-[222px] md:h-[430px] px-4 md:pt-6 rounded-2xl">
                    <h4 className="text-sm md:text-[20px] text-[#3D3D3D] font-bold mt-4">
                      {person.name}
                    </h4>
                    <img
                      src={person.image}
                      alt="person"
                      className="absolute bottom-0 w-[141px] h-[163px] md:w-[296px] md:h-[336px]"
                    />
                    <div className="bg-[#6E58FF] px-[12px] py-[4px] w-[108px] md:w-[139px] absolute bottom-6 right-3 rounded-xl">
                      <p className="text-white font-medium text-[11px] md:text-[16px]">
                        {person.role}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Testimonies */}
        <div className="px-4 md:px-14  mb-10 overflow-x-hidden">
          <div className="flex flex-col justify-start text-left mb-7 ">
            <img
              src={customersImage}
              alt="hello"
              className="w-[80px] h-[56px]"
            />
            <h2 className="text-[22px] mt-4 mb-2 md:text-[33px] font-bold">
              What are our Customers Saying??
            </h2>
            <p className="text-[16px] md:text-[19px] md:w-[675px] w-[358px] text-[#646464]">
              Our Mission at Evolve is to help thousands of users get connected,
              carry out daily activities involving calls very easily.
            </p>
          </div>

          <div className="flex gap-10">
            <div className="bg-[#FAFAFA] w-[358px] flex flex-col justify-center lg:w-[771px] md:h-[449px] h-[310px] relative rounded-xl">
              <h1 className="font-medium text-[14px] lg:text-[32px] lg:w-[691px] w-[319px] text-[#161616] px-[16px]">
                “I've been using ABS for a few months now and it's completely
                transformed the way I send money to my family abroad. The
                platform is so easy to use and transfers are always fast and
                secure.{" "}
              </h1>
              <div className="bg-[#F8F8F8] absolute bottom-0 w-full rounded-b-xl">
                <div className="flex gap-[12px] px-5 md:px-10 md:py-5 py-2">
                  <img src={cardImage} alt="" />
                  <div>
                    <h3 className="text-[14px] md:text-[19px] font-medium">
                      Carl Rowan
                    </h3>
                    <p className="text-[12px] md:text-[16px] font-medium">
                      Aglets Inc
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FAFAFA] w-[358px] flex flex-col justify-center lg:w-[771px] md:h-[449px] h-[310px] relative rounded-xl">
              <h1 className="font-medium text-[14px] lg:text-[32px] lg:w-[691px] w-[319px] text-[#161616] px-[16px]">
                “I've been using ABS for a few months now and it's completely
                transformed the way I send money to my family abroad. The
                platform is so easy to use and transfers are always fast and
                secure.{" "}
              </h1>
              <div className="bg-[#F8F8F8] absolute bottom-0 w-full rounded-b-xl">
                <div className="flex gap-[12px] px-5 md:px-10 md:py-5 py-2">
                  <img src={cardImage} alt="" />
                  <div>
                    <h3 className="text-[14px] md:text-[19px] font-medium">
                      Carl Rowan
                    </h3>
                    <p className="text-[12px] md:text-[16px] font-medium">
                      Aglets Inc
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FAFAFA] w-[358px] flex flex-col justify-center lg:w-[771px] md:h-[449px] h-[310px] relative rounded-xl">
              <h1 className="font-medium text-[14px] lg:text-[32px] lg:w-[691px] w-[319px] text-[#161616] px-[16px]">
                “I've been using ABS for a few months now and it's completely
                transformed the way I send money to my family abroad. The
                platform is so easy to use and transfers are always fast and
                secure.{" "}
              </h1>
              <div className="bg-[#F8F8F8] absolute bottom-0 w-full rounded-b-xl">
                <div className="flex gap-[12px] px-5 md:px-10 md:py-5 py-2">
                  <img src={cardImage} alt="" />
                  <div>
                    <h3 className="text-[14px] md:text-[19px] font-medium">
                      Carl Rowan
                    </h3>
                    <p className="text-[12px] md:text-[16px] font-medium">
                      Aglets Inc
                    </p>
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

export default AboutUs;
