export function ReConstructTheURL({ url }: { url: string[] }) {
  const decodedComp = url.map((item) => decodeURIComponent(item));
  return decodedComp.join("/");
}
