export const FormatDate = (dateInput: string) => {
  const date = new Date(dateInput);

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${month}.${year}`;
};
