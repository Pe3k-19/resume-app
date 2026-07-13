const PHOTO_WEBP = "/photo_black.webp";

export const Photo = () => (
  <div className="flex justify-center items-center relative w-full photo">
    <div className="bg-white w-200 h-200 photo-line">
      <img
        src={PHOTO_WEBP}
        alt="Profile photo"
        width={200}
        height={200}
        loading="lazy"
        decoding="async"
        className="w-200 h-200 photo-block"
      />
    </div>
  </div>
);
