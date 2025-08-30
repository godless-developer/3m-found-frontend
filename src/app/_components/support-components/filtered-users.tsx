interface User {
  name: string;
  DateOfEmployment: string;
  department: string;
  role: string;
  email: string;
}

export function FilteredUsers({
  Users,
  searchTerm,
  selectedRange,
}: {
  Users: User[];
  searchTerm: string;
  selectedRange: string;
}) {
  return Users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const year = parseInt(user.DateOfEmployment.split("-")[0], 10);

    let matchesRange = true;
    switch (selectedRange) {
      case "before-2015":
        matchesRange = year < 2015;
        break;
      case "2015-2016":
        matchesRange = year >= 2015 && year <= 2016;
        break;
      case "2016-2017":
        matchesRange = year >= 2016 && year <= 2017;
        break;
      case "2017-2018":
        matchesRange = year >= 2017 && year <= 2018;
        break;
      case "2018-2019":
        matchesRange = year >= 2018 && year <= 2019;
        break;
      case "2019-2020":
        matchesRange = year >= 2019 && year <= 2020;
        break;
      case "2020-2021":
        matchesRange = year >= 2020 && year <= 2021;
        break;
      case "2021-2022":
        matchesRange = year >= 2021 && year <= 2022;
        break;
      case "2022-2023":
        matchesRange = year >= 2022 && year <= 2023;
        break;
      case "2023-2024":
        matchesRange = year >= 2023 && year <= 2024;
        break;
      case "2024-2025":
        matchesRange = year >= 2024 && year <= 2025;
        break;
      case "this-year":
        matchesRange = year === new Date().getFullYear();
        break;
      default:
        matchesRange = true;
    }

    return matchesSearch && matchesRange;
  });
}
