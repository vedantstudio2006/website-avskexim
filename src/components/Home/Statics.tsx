
import AnimatedCounter from "./AnimatedCounter";

export const Statics = () => {
  return (
    <>
    <br />
    <br />
      <div className="statics">
        <h1>OUR REACH</h1>
        <div className="line"></div>
        <br />
        <br />
        <ul>
          <AnimatedCounter target={99} label="Quality" />
          <AnimatedCounter target={95} label="Delivered With Care" />
          <AnimatedCounter target={100} label="Excellent Service" />
          <AnimatedCounter target={98} label="Client Satisfaction" />
        </ul>
      </div>

      <br />
      <br />
      <div className="line"></div>
    </>
  );
};
