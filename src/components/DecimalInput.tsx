import { useRef, useState } from "react";

export default function DecimalInput() {
  const [value, setValue] = useState("0.7");
  const inputRef = useRef<HTMLInputElement>(null);
  const hasFocused = useRef(false);

  const handleFocus = () => {
    if (hasFocused.current) return;

    const input = inputRef.current;
    if (!input) return;

    hasFocused.current = true;

    // select last digit only once
    input.setSelectionRange(value.length - 1, value.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = inputRef.current;
    if (!input) return;

    const cursor = input.selectionStart ?? 0;

    // allow navigation
    if (
      ["ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
    ) {
      return;
    }

    // backspace handling
    if (e.key === "Backspace") {
      e.preventDefault();

      // prevent deleting dot
      if (value[cursor - 1] === ".") return;

      const newValue =
        value.substring(0, cursor - 1) +
        "0" +
        value.substring(cursor);

      setValue(newValue);

      requestAnimationFrame(() => {
        input.setSelectionRange(cursor - 1, cursor - 1);
      });

      return;
    }

    // only numbers
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    // prevent editing dot
    if (value[cursor] === ".") return;

    const newValue =
      value.substring(0, cursor) +
      e.key +
      value.substring(cursor + 1);

    setValue(newValue);

    requestAnimationFrame(() => {
      input.setSelectionRange(cursor + 1, cursor + 1);
    });
  };

  const handleBlur = () => {
    hasFocused.current = false;
  };

  return (
    <input
      ref={inputRef}
      value={value}
      onFocus={handleFocus}
      onClick={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      inputMode="numeric"
    />
  );
}

