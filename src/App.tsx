import "./App.scss";
import { useState } from "react";

import Form from "./Components/Form";
import Text from "./Components/Text";
import Heading from "./Components/Heading";

const App = () => {
  const [pcount, setPcount] = useState(0);

  return (
    <div className="App">
      <Heading />
      <Form setPcount={setPcount}/>
      <Text pcount={pcount} />
    </div>
  );
};

export default App;
