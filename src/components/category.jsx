import "../styles/takeOrder.css";
import desayuno from "../img/Cafe_nuevo.png";
import almuerzo from "../img/Lunch1.png";
import cena from "../img/Tomar.png";
const viewMore = "View more >";

export const Category = () => {
  return (
    <div className="div-Category">
      <div id="choose-category">
        <h2 id="select"> Choose Category</h2>
        <section className="optionContainer">
          <div className="buttonContainer">
            <div id="name-option">
              <button
                className="menu-btn"
                onClick={() => {
                  alert("Veamos si muestras el desayuno🥰");
                }}
              >
                <img
                  className="breakfast-photo"
                  src={desayuno}
                  alt="desayuno"
                />
              </button>
              <p className="name-menu">Breakfast</p>
            </div>
            <div id="name-option">
              <button
                className="menu-btn"
                onClick={() => {
                  alert("Veamos si muestras el almuerzo🥰");
                }}
              >
                <img
                  className="breakfast-photo"
                  src={almuerzo}
                  alt="desayuno"
                />
              </button>
              <p className="name-menu">Lunch</p>
            </div>
            <div id="name-option">
              <button className="menu-btn">
                <img className="breakfast-photo" src={cena} alt="desayuno" />
              </button>
              <p className="name-menu">Drink</p>
            </div>
          </div>
        </section>
      </div>
      <div className="view-more">
        <p className="more">{viewMore} </p>
      </div>
    </div>
  );
};
