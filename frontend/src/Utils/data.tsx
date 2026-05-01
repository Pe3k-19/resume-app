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
