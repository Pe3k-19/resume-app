import photo_black from "../assets/photo_black.png";

export const Photo = () => (
  <div className="photo-block">
    <div className="photo-white-line">
      <div
        className="photo"
        style={{ backgroundImage: `url(${photo_black})` }}
      />
    </div>
  </div>
);
