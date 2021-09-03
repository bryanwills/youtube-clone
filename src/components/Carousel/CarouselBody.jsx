import CarouselVideo from "./CarouselVideo";

function CarouselBody({ videos, videoWidth, videoHeight }) {
    return (
        <section className="carousel-videos">
            <ul className="carousel-videos-list">
                {videos.length > 0 &&
                    videos.map((vid) => (
                        <CarouselVideo
                            key={vid.id}
                            title={vid.title}
                            image={vid.url}
                            alt={vid.title}
                            imgWidth={videoWidth}
                            imgHeight={videoHeight}
                        />
                    ))}
            </ul>
        </section>
    );
}

CarouselBody.defaultProps = {
    videos: [],
    videoWidth: 250,
    videoHeight: 150,
};

export default CarouselBody;
