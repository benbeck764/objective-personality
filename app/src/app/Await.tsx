export default async function Await<T>({
  promise,
  enabled = true,
  children,
}: {
  promise: Promise<T>;
  enabled?: boolean;
  children: (value: T) => JSX.Element;
}) {
  if (!enabled) return;
  const data = await promise;
  return children(data);
}
