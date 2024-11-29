export default function OurMastersCardTitle() {
  const lineClamp2: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <h1
      style={lineClamp2}
      className="w700f24 text-xl sm:w700f24 md:w700f24 lg:w700f24 text-center"
    >
      Алия Бекмамбетб лия Бекмамбетб лия Бекмамбетб
    </h1>
  );
}
