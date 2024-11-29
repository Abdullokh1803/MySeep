export default function OurMastersCardText() {

  const lineClamp2: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <p
      style={lineClamp2}
      className="w400f18 w-[252px] m-auto leading-[23.80px] text-base sm:w400f18 md:w400f18 lg:w400f18"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. dolor Nesciunt
      aut dolorem dolor vero temporibus dwedwex dolor wedwe necessitatibus
      eosearum vitae ullam omnis! Fuga itaque voluptates eius optio facilis eum
      fugit repellat aliquam itaque voluptates eius optio facilis eum fugit
      repellat aliquam temporibus!
    </p>
  );
}
