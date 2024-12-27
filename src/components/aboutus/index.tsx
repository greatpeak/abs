import "./styles.css";
import smilingStudent from "../../assets/smiling-student.svg";
import smilingStudentMobile from "../../assets/smiling-student-mobile.svg";
import happyStudents from "../../assets/happy-uni-students.svg";
import menhandshake from "../../assets/men-handshake.png";
import polygon from "../../assets/polygon-marker.svg";
// import AboutUsSlide from "@/components/slick-slider/AboutUsSlide";

function AboutUs() {
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
            <div className="hidden lg:block absolute lg:top-[25%] xlg:top-[10%] right-[97%] shrink-0 lg:w-[85%] xlg:w-[35rem] md:mt-6 lg:mt-0">
              <img
                src={menhandshake}
                className="xlg:h-[27rem] w-full"
                alt="Men shaking hands"
              />
            </div>

            <div className="absolute right-[1.5rem] top-[-1.7rem] lg:top-[70%]  lg:left-[-3.5rem] rounded-[50%] bg-[#6e58ff] w-[5.2rem] md:w-[5.5rem] md:h-[5.5rem] lg:h-[7rem] lg:w-[7rem] shrink-0 text-center h-[5.2rem] text-white flex items-center justify-center">
              <p className="w-[4.7rem] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem]">
                Why work with us
              </p>
            </div>

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
    </div>
  );
}

export default AboutUs;
