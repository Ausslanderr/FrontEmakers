import img1 from "../assets/images/godofwar2.jpg";
import img2 from "../assets/images/horizondawn.jpg";
import img3 from "../assets/images/ds.jpeg";
function Carousel(){
    return <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={img1} className="d-block w-100"  alt="banner1"/> 
        </div>
      <div className="carousel-item">
        <img src={img2} className="d-block w-100" alt="banner2"/>
      </div>
      <div className="carousel-item">
        <img src={img3} className="d-block w-100"  alt="banner3"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}

export default Carousel;