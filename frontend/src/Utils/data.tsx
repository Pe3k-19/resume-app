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
  firstItemName: string,
) => {
  const firstItem = data.find((item) => item.name === firstItemName);
  const rest = data.filter((item) => item.name !== firstItemName);

  if (!firstItem) {
    throw new Error("firstItem not found");
  }

  return rest.reduce(
    (acc: SkillsGroup, item: SkillItem) => {
      if (acc[0].length !== maxItemsPerColumn) acc[0].push(item);
      else if (acc[1].length !== maxItemsPerColumn) acc[1].push(item);
      else acc[2].push(item);
      return acc;
    },
    { 0: [firstItem], 1: [], 2: [] },
  );
};
