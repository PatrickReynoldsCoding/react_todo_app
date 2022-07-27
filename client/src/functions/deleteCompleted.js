export const deleteCompleted = async () => {
  try {
    const res = await fetch("http://localhost:8080/deleteCompleted", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {}
};
