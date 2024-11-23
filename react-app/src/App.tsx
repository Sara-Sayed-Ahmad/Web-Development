// import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["Jerusalem", "Ramallah", "Bethlehem", "Hebron", "Nablus"];

  const handelSelect = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisiblity] = useState(false);

  return (
    <div>
      <Button color="danger" click={() => setAlertVisiblity(true)}>
        My Button
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}>
          Hello <b>Sara</b>
        </Alert>
      )}
      <ListGroup items={items} heading="Cistes" onSelectItem={handelSelect} />
    </div>
  );
}

export default App;
