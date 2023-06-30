import gofOfWar from '../assets/images/godofwar2.jpg';
import horizonZeroDown from '../assets/images/horizondawn.jpg';
import deathStranding from '../assets/images/ds.jpeg';
import deathStrandingBanner from '../assets/images/deathstranding.jpg';
import mariobros from '../assets/images/mariobros.jpg';
import redDead from '../assets/images/redDead.jpg';
import skyrim from '../assets/images/skyrim.jpg';
import sotn from '../assets/images/sotn.jpg';

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={gofOfWar} className="d-block w-100" alt="banner1" />
          </div>
          <div className="carousel-item">
            <img src={horizonZeroDown} className="d-block w-100" alt="banner2" />
          </div>
          <div className="carousel-item">
            <img src={deathStranding} className="d-block w-100" alt="banner3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid" style={{ height: '400px', background: '#282828' }}>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="card m-3" style={{ width: '200px', height: '300px' }}>
              <img src={deathStrandingBanner} className="card-img-top" alt="" style={{ height: '150px' }} />
              <div className="card-body">
                <h5 className="card-title">Death Stranding</h5>
                <p className="card-text">Preço: $59.99</p>
              </div>
            </div>
            <div className="card m-3" style={{ width: '200px', height: '300px' }}>
              <img src={redDead} className="card-img-top" alt="" style={{ height: '150px' }} />
              <div className="card-body">
                <h5 className="card-title">Red Dead Redemption 2</h5>
                <p className="card-text">Preço: $49.99</p>
              </div>
            </div>
            <div className="card m-3" style={{ width: '200px', height: '300px' }}>
              <img src={mariobros} className="card-img-top" alt="" style={{ height: '150px' }} />
              <div className="card-body">
                <h5 className="card-title">Super Mario Bros</h5>
                <p className="card-text">Preço: $29.99</p>
              </div>
            </div>
            <div className="card m-3" style={{ width: '200px', height: '300px' }}>
              <img src={skyrim} className="card-img-top" alt="" style={{ height: '150px' }} />
              <div className="card-body">
                <h5 className="card-title">The Elder Scrolls V: Skyrim</h5>
                <p className="card-text">Preço: $39.99</p>
              </div>
            </div>
            <div className="card m-3" style={{ width: '200px', height: '300px' }}>
              <img src={sotn} className="card-img-top" alt="" style={{ height: '150px' }} />
              <div className="card-body">
                <h5 className="card-title">Castlevania: Symphony of the Night</h5>
                <p className="card-text">Preço: $19.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

