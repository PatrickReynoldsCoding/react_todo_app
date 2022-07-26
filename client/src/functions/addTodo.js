export const addTodo = async (todo) => {
  try {
      const res = await fetch('http://localhost:8080/test', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const json = await res.json(); 
  } catch (err) {}
};