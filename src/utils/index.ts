const getToken = () => {
  return localStorage.getItem("token");
};

const convertDate = (param: Date) => {
  console.log({ param });

  const date = new Date(param);
  const day = date.toLocaleDateString("id-ID", {
    weekday: "long",
  });
  const month = date.toLocaleDateString("id-ID", {
    month: "long",
  });
  const year = date.toLocaleDateString("id-ID", {
    year: "numeric",
  });
  const tanggal = date.toLocaleDateString("id-ID", {
    day: "numeric",
  });
  const result = `${day}, ${tanggal} ${month} ${year}`;
  return result;
};

export { getToken, convertDate };
