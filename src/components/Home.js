/*-----------------WORKING OF MIDDLE PART OF MEHPRIYA----------------------*/

import "../Css Factory/Home.css";
export function Home() {
  return (
    <>
      <div className="section Section_Box">
        <div className="container Content_Box">
          <div className="col-sm-12 Col_Box_1">
            <p>MEHPRIYA</p>
          </div>
          <div className="col-sm-12 Col_Box_2">
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner Slider_Box">
                <div class="carousel-item active" data-bs-interval="10000">
                  <p>
                    WELCOME <span>TO</span><br></br>MEHPRIYA
                  </p>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <p>
                    WELCOME <span>TO</span><br></br>MEHPRIYA
                  </p>
                </div>
                <div class="carousel-item">
                  <p>
                    WELCOME <span>TO</span><br></br>MEHPRIYA
                  </p>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="Button_Preview">
            <button>Buy Now</button>
            </div>
        </div>
      </div>
    </>
  );
}
