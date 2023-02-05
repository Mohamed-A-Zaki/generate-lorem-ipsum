import data from "../json/data.json";

type Props = {
  pcount: number;
};

const Text = ({ pcount }: Props) => {
  let p_arr = pcount < 0 ? [] : data.slice(0, pcount);

  return (
    <div className="text">
      {p_arr.map((ele, index) => {
        return (
          <div className="parag" key={index}>
            <div className="parg-num">{index + 1}</div>
            <p>{ele}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Text;
