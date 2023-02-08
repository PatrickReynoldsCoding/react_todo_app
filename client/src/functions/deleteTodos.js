export const deleteTodos = async (todo) => {
  try {
    const res = await fetch("http://localhost:8080/deleteAll", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Deleting all todos");
  } catch (err) {}
};
