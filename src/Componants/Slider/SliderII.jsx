import "../Slider/SliderII.css";
import a from "../../../src/Assets/a.jpeg";
import b from "../../../src/Assets/b.jpeg";
import c from "../../../src/Assets/c.jpeg";
import d from "../../../src/Assets/d.jpeg"; /*<<<<<<<<<<<-------------JUST TRY THAT'S IT !*/
import e from "../../../src/Assets/e.jpeg";
import f from "../../../src/Assets/f.jpeg";
import g from "../../../src/Assets/g.jpeg";
import h from "../../../src/Assets/h.jpeg";
import i from "../../../src/Assets/i.jpeg";
export function SliderII() {
  return (
    <>
      <div className="section section_box3">
        <div className="col-sm-12 Tranding">
          <p>Trending Outfits</p>
        </div>
        <div className="container container_box3">
          <div className="row row_box3">
            <div className="col-sm-4 col_box3">
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide slider_pic_container"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={a} class="d-block w-100 new_prfct" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={b} class="d-block w-100 new_prfct" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={c} class="d-block w-100 new_prfct" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col_box3">
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide slider_pic_container"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={d} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={e} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={f} class="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col_box3">
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide slider_pic_container"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={g} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={h} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={i} class="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
