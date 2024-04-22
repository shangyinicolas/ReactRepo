import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // let items = ["New York", "San Francisco", "Bei Jing", "Mel", "Adl"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisiblity] = useState(false);
  return (
    // <div>
    //   {" "}
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>

    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}>Hello</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisiblity(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
