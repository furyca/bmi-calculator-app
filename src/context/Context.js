import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [age, setAge] = useState(17);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [gender, setGender] = useState("Female");
  const [bmi, setBmi] = useState();
  const [recordList, setRecordList] = useState(JSON.parse(localStorage.getItem("bmi")) || [{}]);
  const [isOpen, setOpen] = useState(false);

  const values = {
    age,
    setAge,
    gender,
    setGender,
    height,
    setHeight,
    weight,
    setWeight,
    bmi,
    setBmi,
    recordList,
    setRecordList,
    isOpen,
    setOpen,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
