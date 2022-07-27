export const getData = async () => {
  try {
    const res = await fetch("http://localhost:8080/");

    return await res.json();
  } catch (err) {}
};
