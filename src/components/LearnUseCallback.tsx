import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const Button = React.memo(({ onClick, text }: { onClick: () => void, text: string }) => {
  console.log(`Button ${text} rendered`);
  return <button onClick={onClick}>{text}</button>;
});

export default function LearnUseCallback() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const rhf = useForm({ mode: "onChange" });
  rhf.setError("test", {
    type: "validate",
    message:"",
  })

  rhf.trigger("test")

  // This function is recreated on every render
  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  const handleClick2 = () => {
    setCount2(count2 + 1);
  };


  alert("Parent rendered");
  return (
    <div>
      <h2>Without useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}