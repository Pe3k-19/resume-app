export const Header = ({ data }: { data?: AboutItem }) => (
  <div className="header">
    <div className="separator" />
    <div className="flex-center flex-column flex-a-start">
      <div className="flex" style={{ display: "flex", gap: "1rem" }}>
        <span className="text-header">{data?.name ?? ""}</span>
        <span className="text-header color-gold">{data?.surname ?? ""}</span>
      </div>
      <span className="text-profesion color-gray">{data?.position ?? ""}</span>
    </div>
  </div>
);
