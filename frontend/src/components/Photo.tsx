import photo_black from "../assets/photo_black.png";

export const Photo = () => (
  <div className="flex justify-center items-center relative w-full photo">
    <div className="bg-white w-200 h-200 photo-line">
      <div
        className="w-200 h-200 photo-block"
        style={{ backgroundImage: `url(${photo_black})` }}
      />
    </div>
  </div>
);
