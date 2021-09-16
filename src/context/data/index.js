import mockData from "../../../public/data/mockData.json";

const { cols, data } = mockData;

const list = data.map((d) => {
  const dateStamp = d[3].split("/");
  let date = new Date();
  date.setFullYear(parseInt(dateStamp[2]));
  date.setMonth(parseInt(dateStamp[1]) + 1);
  date.setDate(parseInt(dateStamp[0]));

  return {
    [cols[0]]: d[0],
    [cols[1]]: d[1],
    [cols[2]]: d[2],
    [cols[3]]: date,
    [cols[4]]: d[4],
    [cols[5]]: d[5],
  };
});

const filter = (keyword) => {
  let filtered = [];

  filtered = list.filter(
    (f) =>
      f.NameSurname.toLowerCase().includes(keyword.toLowerCase()) ||
      f.Company.toLowerCase().includes(keyword.toLowerCase()) ||
      f.Email.toLowerCase().includes(keyword.toLowerCase()) ||
      f.Date.getFullYear() == keyword ||
      f.Country.toLowerCase().includes(keyword.toLowerCase()) ||
      f.City.toLowerCase().includes(keyword.toLowerCase())
  );

  return filtered;
};

const filterAndSort = (keyword, sortBy, orderBy, page, take = 6) => {
  let filtered = filter(keyword);

  if (sortBy) {
    filtered.sort((a, b) => {
      let fa =
        typeof a[sortBy] == "string" ? a[sortBy].toLowerCase() : a[sortBy];
      let fb =
        typeof b[sortBy] == "string" ? b[sortBy].toLowerCase() : b[sortBy];
      if (parseInt(orderBy)) {
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      } else {
        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      }
    });
  }

  let pageCount = Math.ceil(filtered.length / take);
  let list = filtered.slice((page - 1) * take, page * take);
  return { list, pageCount };
};

export { filter, filterAndSort };
