// Formats display sizes such as ['21.5"', '32"'] or [43, 55] as `21.5″, 32″`.
export default function formatSizes(sizes) {
  const list = Array.isArray(sizes) ? sizes : [sizes];
  return list.map((size) => `${String(size).trim().replace(/["″]+$/, "")}″`).join(", ");
}
