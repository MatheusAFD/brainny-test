export function SpanHead(props: { text: string; className?: string }) {
  return (
    <span
      className={`text-gray-900 font-semibold tracking-[0.02em] ${props.className}`}
    >
      {props.text}
    </span>
  );
}
