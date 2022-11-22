function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://assets.ldscdn.org/8c/4c/8c4c4012d70a6d2e6ba6d7ab70ca852818610d2c/santiago_chile_lds_temple.jpeg" className="img-fluid" alt="10" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/foto-gratis/feliz-familia-silueta-puesta-sol_1303-22466.jpg?w=2000" className="img-fluid" alt="10" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.mediterraneannatural.com/wp-content/uploads/2019/03/Curiosidades-de-las-gatas-tricolor-por-que-son-hembras-en-su-mayoria-4.jpg" className="img-fluid" alt="10" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Carousel