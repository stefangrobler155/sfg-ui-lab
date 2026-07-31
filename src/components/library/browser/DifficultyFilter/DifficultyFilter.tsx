import type { Difficulty } from "@/types/difficulty";
import { difficulties } from "@/config/difficulties";

interface DifficultyFilterProps {
  selectedDifficulty: Difficulty | "all";
  onDifficultyChange: (
    difficulty: Difficulty | "all"
  ) => void;
}

export function DifficultyFilter({
  selectedDifficulty,
  onDifficultyChange,
}: DifficultyFilterProps) {
  return (
    <div className="flex items-center gap-3">

      <label className="text-sm font-medium">
        Difficulty
      </label>

      <select
        value={selectedDifficulty}
        onChange={(e) =>
          onDifficultyChange(
            e.target.value as Difficulty | "all"
          )
        }
        className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
      >
        {difficulties.map((difficulty) => (
          <option
            key={difficulty.value}
            value={difficulty.value}
          >
            {difficulty.label}
          </option>
        ))}
      </select>

    </div>
  );
}