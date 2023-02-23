import "./CarrouselImage.css";
const CarrouselImage = ({ item }) => {
  return item.map(({ imagen, alt }) => {
    return (
      <div class="slide">
        <img src={imagen} height="100" width="250" alt={alt} />
      </div>
    );
  });
};

export default CarrouselImage;
