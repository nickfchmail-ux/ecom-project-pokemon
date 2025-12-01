function PokemonInput({
  label,
  register,
  errors,
  disabled,
  type = "text",
  as = "input",
  accept,
  setValue,
  trigger,
  options = {},
}) {
  const isFileInput = type === "file";
  const InputElement = as === "textarea" ? "textarea" : "input";

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label}
        className="text-sm font-medium text-gray-700 capitalize"
      >
        {label.replace(/([A-Z])/g, " $1")}
      </label>

      <InputElement
        type={type}
        id={label}
        disabled={disabled}
        {...(isFileInput
          ? {
              // Don't use register() for files
              onChange: (e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setValue(label, file); // Manually set the File object
                  trigger?.(label); // Optional: re-run validation
                }
              },
            }
          : register(label, options))}
        className="hover:file:bg-600 rounded-lg border border-gray-300 px-4 py-2 file:mr-4 file:rounded file:border-0 file:bg-amber-500 file:px-4 file:py-2 file:text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none disabled:bg-gray-50"
        rows={as === "textarea" ? 4 : undefined}
      />

      {errors?.[label] && (
        <p className="text-sm text-red-600">{errors[label].message}</p>
      )}
    </div>
  );
}

export default PokemonInput;
