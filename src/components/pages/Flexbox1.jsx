import "../styles/ExerciseOne.css";

const Flex = () => {
  return (
    <div className="main-container">
      <h2 className="title">CSS Flexbox</h2>

      <div className="flex-container flex">
        <div className="first-main-row">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="box4"></div>
        </div>

        <div className="second-row flex">
          <div className="box5"></div>
          <div className="box6"></div>
        </div>

        <div className="third-row flex">
          <div className="box7"></div>
          <div className="column-flex">
            <div className="box8"></div>
            <div className="box9"></div>
          </div>
          <div className="box10"></div>
        </div>

        <div className="fourth-row flex">
          <div className="box11"></div>
          <div className="second-column flex">
            <div className="box12 a"></div>
            <div className="box13 a"></div>
            <div className="box14 a"></div>
            <div className="box15 a"></div>
          </div>
          <div className="box16"></div>
          <div className="box17"></div>
        </div>

        <div className="last-row flex">
          <div className="box18"></div>
          <div className="box19"></div>
          <div className="third-column flex">
            <div className="box20"></div>
            <div className="box21"></div>
          </div>
          <div className="box22"></div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
