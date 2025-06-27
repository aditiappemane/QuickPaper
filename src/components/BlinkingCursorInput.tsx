import React, { useState } from "react";

type BlinkingCursorInputProps =
  | (React.InputHTMLAttributes<HTMLInputElement> & {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      isTextArea?: false;
    })
  | (React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
      isTextArea: true;
    });

export default function BlinkingCursorInput(props: BlinkingCursorInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const showCursor = isFocused && props.value === "";

  if (props.isTextArea) {
    return (
      <div className="relative">
        <textarea
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-white focus:border-blue-500 focus:outline-none resize-none ${
            props.className ?? ""
          }`}
          rows={3}
        />
        {showCursor && (
          <span
            className="absolute top-2 left-3 h-5 w-0.5 bg-blue-600 animate-blink"
            style={{ animationTimingFunction: "steps(1, start)" }}
          />
        )}
      </div>
    );
  } else {
    return (
      <div className="relative">
        <input
          {...props}
          type="text"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full border border-gray-200 rounded-md px-3 py-2 text-sm bg-white focus:border-blue-500 focus:outline-none ${
            props.className ?? ""
          }`}
        />
        {showCursor && (
          <span
            className="absolute top-2 left-3 h-5 w-0.5 bg-blue-600 animate-blink"
            style={{ animationTimingFunction: "steps(1, start)" }}
          />
        )}
      </div>
    );
  }
}
