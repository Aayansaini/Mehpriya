import './Footer.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
export function Footer() {
  return (
    <>
      <div className="section Section1_Box">
        <div className="container Container1_Box">
          <div className="row">
            <div className="col-sm-6 Col1_Box_1">
              <h1>MEHPRIYA</h1>
              <input type={"email"} placeholder={"Your Email"} className="footerinput"></input>
              <button>SUBSCRIBE</button>
            </div>
            <div className="col-sm-6 Col2_Box_2">
                <ul>
                <li>About Us</li>
                <li>Gift Ideas</li>
                <li>Contact Us</li>
                <li>Size Guide</li>
                <li>Sellers</li>
                <li>Releases</li>
                <li>Deals</li>
                <li>Join Team</li>
                </ul>
                <ul>
                <li>Who We Are</li>
                <li>Privacy</li>
                <li>Exchange</li>
                <li>Track Order</li>
                <li>Terms & Conditions</li>
                <li>Information</li>
                <li>Shipping</li>
                <li>Exchange Policy</li>
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








