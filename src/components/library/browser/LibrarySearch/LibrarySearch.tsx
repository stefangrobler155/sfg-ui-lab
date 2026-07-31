interface LibrarySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function LibrarySearch({
  value,
  onChange,
}: LibrarySearchProps) {
  return (
    <input
      type="text"
      placeholder="Search components..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        rounded-xl
        border
        border-border
        bg-background
        px-4
        py-3
        text-sm
      "
    />
  );
}