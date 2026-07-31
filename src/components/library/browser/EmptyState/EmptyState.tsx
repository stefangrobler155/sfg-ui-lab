interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-border p-12 text-center">

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-muted-foreground">
        {description}
      </p>

    </div>
  );
}