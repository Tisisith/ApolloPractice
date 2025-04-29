import images from "../utilities/links/images";

const Flexbox4 = () => {
  return (
    <>
      <main className="main bg-[#f9f7f3] w-256 h-380 mx-35.5 mt-0">
        <section className="hero">
          <nav className="hero_with_pic flex mx-27 gap-2.5 pt-18">
            <button className="home__nav-item px-1 py-2 rounded text-gray-800 hover:bg-blue-800 hover:text-white transition">
              Home
            </button>
            <button className="home__nav-item px-4 py-2 rounded text-gray-800 hover:bg-blue-800 hover:text-white transition">
              About
            </button>
            <button className="home__nav-item px-4 py-2 rounded text-gray-800 hover:bg-blue-800 hover:text-white transition">
              About
            </button>
            <button className="home__nav-item px-4 py-2 rounded text-gray-800 hover:bg-blue-800 hover:text-white transition">
              Services
            </button>
            <button className="home__nav-item px-4 py-2 rounded text-gray-800 hover:bg-blue-800 hover:text-white transition">
              Blog
            </button>
            <button className="home__nav-item px-4 py-2 rounded text-gray-800 hover:bg-blue-800 hover:text-white transition">
              Contact
            </button>
            <img
              className="absolute mx-123 z-1 w-50 h-90"
              src={images[0].url}
            ></img>
            <img
              className=" absolute z-0 mx-145 w-1xl rounded"
              src={images[1].url}
            ></img>
          </nav>

          <div className="we_help_lorem_buttom_3pics flex mt-12 justify-center">
            <div className="mx-13">
              <h1 className="text-6xl font-bold text-black-900 mb-4 px-14 w-3/5">
                We help you build your product
              </h1>
              <div className="mb-12">
                <p className="text-gray-700 py-3 px-13 w-89">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor it. estep edit sporole mantis.
                </p>
                <button className="bg-blue-900 text-white py-2 px-4 rounded ml-13 mt-7">
                  Get started
                </button>
              </div>
            </div>
            <div className="two_pics flex-col absolute ml-11">
              <img
                className="w-[95px] h-[140px] rounded"
                src={images[2].url}
              ></img>
              <img
                className="-ml-22 mt-3 h-[158px] w-[100px] rounded"
                src={images[3].url}
              ></img>
            </div>
          </div>
        </section>
        <section className="ml-26 company_how_to_build_contact_us flex justify-start -mt-4 gap-8">
          <h2>Company</h2>
          <h2>Company</h2>
          <h2>Company</h2>
          <div className="how_to_build_pic -mt-22 ml-13">
            <img className="w-45 h-60" src={images[4].url}></img>
            <div className="bg-white w-45 h-28 -mt-20 ml-1 text-[19px] absolute">
              <h2 className="my-3.5 mx-5 font-bold">
                How to build products faster
              </h2>
              <p className="mx-6 text-[12px] -mt-4">May 29, 2027</p>
            </div>
            <div className="bg-[#F8F8E1] w-65 h-95 rounded-2xl ml-55 -mt-108 absolute z-10 pl-6 pr-6">
              <h1 className="font-bold pt-5 pl-1.5 text-xl mb-14 ml-1 z-3">
                Contact us
              </h1>
              <input
                className="bg-white mb-2 ml-2"
                type="text"
                id="username"
                name="username"
                placeholder="Name"
              ></input>
              <input
                className="bg-white mb-2 ml-2"
                type="text"
                id="email"
                name="username"
                placeholder="Email"
              ></input>
              <input
                className="bg-white mb-6 h-32 ml-2"
                type="textarea"
                id="message"
                name="message"
                placeholder="Message"
              ></input>
              <br></br>
              <button className="bg-blue-900 text-white py-2 px-16 rounded ml-2 -mt-6">
                Submit
              </button>
            </div>
          </div>
        </section>

        <section className="features_product_design_about_us flex align-middle -mt-16">
          <div className="">
            <h2 className="text-3xl font-bold text-black-900 mb-4 px-14 w-3/5 ml-12 mt-13">
              Features
            </h2>
            <div className="three-features flex mx-26 mt-7">
              <div>
                <img className="w-20 h-19" src={images[5].url}></img>
                <h3 className="mt-3 text-[20px] font-bold">Feature 1</h3>
                <p className="w-1/2 text-[10]">Lorem ipsum door sit amet</p>
              </div>
              <div className="-ml-19">
                <img className="w-20 h-19" src={images[6].url}></img>
                <h3 className="mt-3 text-[20px] font-bold ">Feature 2</h3>
                <p className="w-1/2 text-[10]">Lorem ipsum door sit amet</p>
              </div>
              <div className="-ml-19">
                <img className="w-20 h-19" src={images[7].url}></img>
                <h3 className="mt-3 text-[20px] font-bold">Feature 3</h3>
                <p className="w-1/2 text-[10]">Lorem ipsum door sit amet</p>
              </div>
            </div>
            <div className="product_design">
              <img src={images[8].url} className=" w-47 ml-115 -mt-20"></img>
              <div className="bg-white w-47 h-20 -mt-8 ml-115 absolute">
                <h2 className="my-0 mx-5 font-bold text-[18px]">
                  5 tlas for better product design
                </h2>
                <p className="mx-5 text-[12px]">April 19, 2022</p>
              </div>
            </div>
          </div>
          <div className="last_column bg-white w-60 h-190 absolute mt-16 ml-172">
            <div className="last_column_contents px-6">
              <h2 className="pt-14 font-bold text-[25px]">About us</h2>
              <p className="w-42 pb-7">
                Lorem ipsum dolor sit amet, consectetur adiossing elit, sed do
                eiusmod tempor incididunt
              </p>
              <img src={images[9].url}></img>
              <h2 className="client text-[28px] font-bold">Client Stories</h2>
              <div className="testimonial flex">
                <img
                  className="w-11 h-11 mt-3 -ml-1"
                  src={images[10].url}
                ></img>
                <h2 className="user_testimonial mt-3 ml-2.5">Jane Doe</h2>
              </div>
              <div className="comment ml-13 -mt-2 text-[14px]">
                <p>"Lorem ipsum dolo sit amet consectetur ac eiusimg elit."</p>
                <p>Jane Doe</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sign_up ml-25">
          <div>
            <h2 className="w-[250px] -mt-2 text-[30px] font-bold ">
              Sign up for our newsletter
            </h2>
            <div className="flex"></div>
            <input
              className="bg-white mb-2 ml-2 py-2"
              type="text"
              id="email_sign_up"
              name="email_sign_up"
              placeholder="Email"
            ></input>
            <button className="bg-blue-900 text-white py-2 px-6 rounded ml-9 mt-3">
              Nauaut
            </button>
          </div>
        </section>
        <section className="contact_about_us flex mt-9"></section>
        <h2 className="w-[250px] -mt-2 text-[30px] font-bold mx-25">
          Contact Us
        </h2>
        <div className="flex ml-25 mt-5">
          <div>
            <img src={images[12].url} className="w-42 h-50 mr-8"></img>
            <h3 className="info_num mt-5">(555) 555 5555</h3>
            <p className="two_paragraph ">info@company.com</p>
          </div>
          <div>
            <img src={images[13].url} className="w-30 h-50"></img>
            <p className="two_paragraph mt-5 ">info@company.com</p>
          </div>
          <div className="flex-col">
            <div className="bg-white w-47 h-48 -mt-42 ml-5 absolute">
              <h2 className="mx-4 font-bold text-[28px] pt-6">About Us</h2>
              <p className="mx-4 w-5/5 mt-2 ">
                Lorem ipsum dolor sit amet, consectotur adipiscing elit,sed do
                eiusmud tempor,
              </p>
            </div>
            <img src={images[14].url} className="ml-6 w-46 mt-4 h-62"></img>
          </div>
        </div>

        <h1></h1>
      </main>
    </>
  );
};

export default Flexbox4;
