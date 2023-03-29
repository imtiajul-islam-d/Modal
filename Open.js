import React from "react";
import Modal from "./Modal";

const Open = () => {
  // modal elements start
  const [opened, setOpened] = useState(false);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };
  // modal elements end
  return (
    <div>
      <button onClick={controlModal}>Open</button>
      <Modal open={opened} control={controlModal} id={id} />
    </div>
  );
};

export default Open;
