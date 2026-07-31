import type { LibrarySort } from "@/types/library";

interface LibrarySortProps {
  value: LibrarySort;
  onChange: (value: LibrarySort) => void;
}
export function LibrarySort({
  value,
  onChange,
}: LibrarySortProps) {
  return (
    <div className="flex items-center gap-3">

      <label className="text-sm font-medium">
        Sort
      </label>

      <select
        value={value}
        onChange={(e) => onChange( e.target.value as LibrarySort)}
        className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
      >
        <option value="featured">
          Featured
        </option>

        <option value="az">
          A–Z
        </option>

        <option value="za">
          Z–A
        </option>

        <option value="newest">
          Newest
        </option>

      </select>

    </div>
  );
}