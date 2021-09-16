import { describe } from "jest-circus";
import { filter, filterAndSort } from "..";
const getDate = (stringDate) => {
  const dateStamp = stringDate.split("/");
  let date = new Date(
    parseInt(dateStamp[2]),
    parseInt(dateStamp[1]) + 1,
    parseInt(dateStamp[0])
  );

  return date;
};
const mockData = [
  {
    NameSurname: "Hyacinth Vincent",
    Company: "Duis Corporation",
    Email: "iaculis.enim@magnaCrasconvallis.ca",
    Date: getDate("28/06/2022"),
    Country: "Eritrea",
    City: "Lyubertsy",
  },
];

const mockDataSort = {
  list: [
    {
      NameSurname: "Brenden Martinez",
      Company: "Volutpat Nunc Associates",
      Email: "iaculis@estMauris.org",
      Date: getDate("24/03/2021"),
      Country: "British Indian Ocean Territory",
      City: "Colwood",
    },
    {
      NameSurname: "Caesar Odom",
      Company: "Enim Etiam Gravida Consulting",
      Email: "quis@egetvenenatis.edu",
      Date: getDate("20/09/2021"),
      Country: "United Kingdom (Great Britain)",
      City: "Meux",
    },
  ],
  pageCount: 1,
};
describe("data test", () => {
  test("filters data by a keyword", () => {
    expect(filter("Hyacinth Vincent")).toStrictEqual(mockData);
  });

  test("filter data by a keyword and sort it", () => {
    expect(filterAndSort("brit", "City", 1, 1)).toStrictEqual(mockDataSort);
  });
});
