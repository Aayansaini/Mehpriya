import "./Footer.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
export function Footer() {
  return (
    <>
      <div className="section Section1_Box">
        <div className="container Container1_Box">
          <div className="row">
            <div className="col-sm-6 Col1_Box_1">
              <h1>MEHPRIYA</h1>
              <input
                type={"email"}
                placeholder={"Your Email"}
                className="footerinput"
              ></input>
              <button>SUBSCRIBE</button>
            </div>
            <div className="col-sm-6 ml-5 Col2_Box_2 ovrssx">
              <ul>
                <li>
                  <a href="/About">About Us</a>
                </li>
                <li>
                  <a>Gift Ideas</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <a>Size Guide</a>
                </li>
                <li>
                  <a>Sellers</a>
                </li>
                <li>
                  <a>Releases</a>
                </li>
                <li>
                  <a>Deals</a>
                </li>
                <li>
                  <a>Join Team</a>
                </li>
              </ul>
              <ul>
                {/* <li>
                  <a href="/Cart">Cart</a>
                </li> */}
                <li>
                  <a>Who We Are</a>
                </li>
                <li>
                  <a>Privacy</a>
                </li>
                <li>
                  <a>Exchange</a>
                </li>
                <li>
                  <a>Track Order</a>
                </li>
                <li>
                  <a href="/Terms">Terms & Conditions</a>
                </li>
                <li>
                  <a>Information</a>
                </li>
                <li>
                  <a>Shipping</a>
                </li>
                <li>
                  <a>Exchange Policy</a>
                </li>
              </ul>
            </div>
            <div className="Foot">
              <p>©2023 Design by Mehpriya🧡</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
