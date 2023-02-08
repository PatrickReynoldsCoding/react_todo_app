export const updateChecked = async (todoId) => {
  try {
    const res = await fetch(`http://localhost:8080/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`updating completed status of ${todoId}`);
  } catch (err) {}
};
