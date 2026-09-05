interface BrandMarkProps {
  className?: string
}

export function BrandMark({ className = 'size-5' }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        className="text-green"
        d="M17.8 5.7a8 8 0 1 0 0 12.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
      <path
        className="text-action"
        d="M14.4 8v8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
    </svg>
  )
}
