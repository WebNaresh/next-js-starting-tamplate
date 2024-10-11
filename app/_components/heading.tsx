type Props = {
  heading: string;
  highlighted_heading: string;
  direction?: "flex-row" | "flex-row-reverse";
};

const Heading = (props: Props) => {
  return (
    <div
      className={`flex w-full font-bold text-2xl items-center justify-center `}
    >
      “ &nbsp;
      <h4 className={`font-bold flex text-2xl  ${props.direction}`}>
        {props.heading} &nbsp;
        <h4 className="text-primary">{props.highlighted_heading} &nbsp;</h4>
      </h4>
      ”
    </div>
  );
};

export default Heading;
