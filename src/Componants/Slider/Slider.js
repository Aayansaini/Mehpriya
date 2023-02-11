/*-----------------WORKING OF MIDDLE PART OF MEHPRIYA----------------------*/
import './Slider.css'
export function Slider1() {
    const style ={
        
    }
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
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner Slider_Box">
                <div className="carousel-item active" data-bs-interval="10000">
                  <p>
                  50% OFF ON <span>CLASSIC</span><br></br>SARRES 
                  </p>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <p>
                  20% OFF ON <span>BRANDED</span><br></br>KURTIES 
                  </p>
                </div>
                <div className="carousel-item">
                  <p>
                  30% OFF ON <span>Night</span><br></br>OUTFITS 
                  </p>
                </div>
                <div className="carousel-item">
                  <p>
                  Big Deal<span> Buy 1 Get -1 Free</span><br></br>CLOTHS 
                  </p>
                </div><div className="carousel-item">
                  <p>
                  SHOPPING<span> WITH </span><br></br> Mehpriya🛍 
                  </p>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
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
