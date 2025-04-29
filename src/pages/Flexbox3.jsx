const Flexbox3 = () => {
  return (
    <>
      <main className="main min-h-screen bg-[#f9f7f3] w-256 h-340 mx-35.5">
        <nav className="home__nav mx-20.5  inline-flex justify-between items-center px-7.5 py-21 flex-wrap">
          <ul className="home__nav-list flex gap-1.5 text-lg">
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
          </ul>
        </nav>

        <section className="home__hero flex justify-between items-start">
          <div className="home__hero-text w-1/2 column">
            <h1 className="text-6xl font-bold text-black-900 mb-4 px-14">
              We help you build your product
            </h1>
            <p className="text-gray-700 mb-6 py-7 px-14 w-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor et. estep edit sporole mantis.
            </p>
            <button className="bg-red-900 text-white py-2 px-4 rounded ml-13">
              Get started
            </button>
          </div>
          <div className="home__hero-images flex gap-4 w-1/2 items-end">
            <div className="">
              <img src="https://img.freepik.com/free-photo/medium-shot-man-video-call_23-2148924735.jpg?ga=GA1.1.1403800864.1745474179&semt=ais_hybrid&w=740"></img>
            </div>
            <div className="">
              <img src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?ga=GA1.1.1403800864.1745474179&semt=ais_hybrid&w=740"></img>
            </div>
            <div className="">
              <img src="https://img.freepik.com/free-photo/portrait-professional-working-laptop_23-2148499902.jpg?ga=GA1.1.1403800864.1745474179&semt=ais_hybrid&w=740"></img>
            </div>
            <div className="">
              <img src="https://img.freepik.com/free-photo/business-man-owner-company-office_1303-16046.jpg?ga=GA1.1.1403800864.1745474179&semt=ais_hybrid&w=740"></img>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Flexbox3;
