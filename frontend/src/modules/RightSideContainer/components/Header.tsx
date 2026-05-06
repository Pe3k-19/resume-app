export const Header = ({ data }: { data?: AboutItem }) => (
  <div className="flex relative gap-15 h-150 header">
    <div className="h-full relative bg-accent separator" />
    <div className="flex items-start justify-center flex-col">
      <div className="flex gap-1">
        <span className="uppercase weight-800 text-header">
          {data?.name ?? ""}
        </span>
        <span className="uppercase weight-800 text-accent text-header">
          {data?.surname ?? ""}
        </span>
      </div>
      <span className="flex items-start uppercase gap-1 weight-800 size-24 text-gray">
        {data?.position ?? ""}
      </span>
    </div>
  </div>
);
