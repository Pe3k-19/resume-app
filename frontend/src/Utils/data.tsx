export function AddressToString(data?: AddressItem): string {
  let res = data?.address ?? "";
  if (data?.postcode) {
    res = res.length ? `${res}, ${data.postcode}` : data.postcode;
  }
  if (data?.city) {
    res = res.length ? `${res}, ${data.city}` : data.city;
  }
  return res;
}

export const DivideDataIntoColumns = (
  data: SkillItem[],
  maxItemsPerColumn: number = 7,
  firstItemName?: string,
): SkillsGroup  => {
  const firstItem = firstItemName
    ? data.find((item) => item.name === firstItemName)
    : undefined;
    const rest = firstItem
    ? data.filter((item) => item.name !== firstItemName)
    : [...data];

  const columns: SkillsGroup = { 0: [], 1: [], 2: [] };
  if (firstItem) columns[0].push(firstItem);

  for (const item of rest) {
    if (columns[0].length < maxItemsPerColumn) columns[0].push(item);
    else if (columns[1].length < maxItemsPerColumn) columns[1].push(item);
    else columns[2].push(item);
  }
  return columns;
};
