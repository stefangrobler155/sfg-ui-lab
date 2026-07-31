import type { Difficulty } from "@/types/difficulty";

export const difficulties: {
  value: "all" | Difficulty;
  label: string;
}[] = [
  {
    value: "all",
    label: "All Levels",
  },
  {
    value: "Beginner",
    label: "Beginner",
  },
  {
    value: "Intermediate",
    label: "Intermediate",
  },
  {
    value: "Advanced",
    label: "Advanced",
  },
];