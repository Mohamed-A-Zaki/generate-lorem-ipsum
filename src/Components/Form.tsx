import { useId, useState } from "react";

type Props = {
  setPcount: React.Dispatch<React.SetStateAction<number>>;
};

const Form = ({ setPcount }: Props) => {
  const [count, setCount] = useState<number>(0);
  const count_id = useId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>  {
    e.preventDefault();
    setPcount(count);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={count_id}>paragraphs :</label>
      <input
        type="number"
        value={count}
        id={count_id}
        onChange={(e) => setCount(+e.target.value)}
      />
      <button type="submit">Generate</button>
    </form>
  );
};

export default Form;
