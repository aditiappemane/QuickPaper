"use client";
import { useState, useEffect } from "react";

type Field = {
  name: string;
  label: string;
  type: "text" | "textarea" | "date" | "number";
};

export default function FormRenderer({
  fields,
  values,
  onChange,
}: {
  fields: Field[];
  values: Record<string, string>;
  onChange: (values: Record<string, string>) => void;
}) {
  const [local, setLocal] = useState(values);

  useEffect(() => {
    setLocal(values);
  }, [values]);

  function handleChange(name: string, value: string) {
    const updated = { ...local, [name]: value };
    setLocal(updated);
    onChange(updated);
  }

  return (
    <form className="flex flex-col gap-5 w-full max-w-lg">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label
            htmlFor={field.name}
            className="text-sm font-medium text-neutral-700"
          >
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              value={local[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all px-4 py-2 text-base bg-white resize-none shadow-sm"
              rows={4}
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              value={local[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all px-4 py-2 text-base bg-white shadow-sm"
            />
          )}
        </div>
      ))}
    </form>
  );
}
