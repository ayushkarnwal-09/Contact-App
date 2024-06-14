import React, { useState } from "react";

const useDisclose = () => {
  // const [isUpdate, setUpdate] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return { onOpen, isOpen, onClose };
};

export default useDisclose;
