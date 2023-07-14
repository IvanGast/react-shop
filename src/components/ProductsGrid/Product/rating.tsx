import star from "../../../star.png";

const Rating = ({ rating }: RatingProps) => {
  return (
    <div>
      <img
        style={{ marginRight: "3px" }}
        alt=""
        src={star}
        width={"12px"}
        height={"12px"}
      />
      {rating.rate} · {rating.count}
    </div>
  );
};
export default Rating;
