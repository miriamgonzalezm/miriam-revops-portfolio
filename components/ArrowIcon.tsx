export function ArrowIcon({ external = false }: { external?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none">
      <path d={external ? "M5 11 11 5M6 5h5v5" : "M3 8h10M9 4l4 4-4 4"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
