import icons from "../../store/icons";

function CarouselArrows({ handleClickLeft, handleClickRight, divClassName }) {
    const ChevronLeft = icons.ChevronLeft;
    const ChevronRight = icons.ChevronRight;

    return (
        <div className={`carousel-arrows ${divClassName}`}>
            <button
                className="carousel-arrows__btn carousel-arrows__btn--left"
                type="button"
                aria-label="move videos left"
                onClick={handleClickLeft}>
                <ChevronLeft className="carousel-arrows__btn__icon" />
            </button>
            <button
                className="carousel-arrows__btn carousel-arrows__btn--right"
                type="button"
                aria-label="move videos right"
                onClick={handleClickRight}>
                <ChevronRight className="carousel-arrows__btn__icon" />
            </button>
        </div>
    );
}

CarouselArrows.defaultProps = {
    handleClickLeft: () => null,
    handleClickRight: () => null,
    divClassName: "",
};

export default CarouselArrows;
