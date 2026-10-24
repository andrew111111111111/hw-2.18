// export function getStudents() {
// const url = "http://localhost:3000/students";
// return fetch(url)
// .then((response) => {
// if (!response.ok) {
// throw new Error(`Error: ${response.statusText}`);
// }
// return response.json();
// })
// .catch((err) => console.error(err));
// }
export const getStudents = async () => {
  const url = "http://localhost:3000/students";
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  return response.json();
};

// Функція для відображення студентів у таблиці

// export function renderStudents(students) {
// const url = "http://localhost:3000/students";
// return // return fetch(url, {
// method: "POST",
// headers: { "content-Type": "application/json" },
// body: JSON.stringify(students),
// })
// .then((response) => {
// if (!response.ok) {
// throw new Error(`Error: ${response.statusText}`);
// }
// return response.json();
// })
// .catch((err) => console.error(err));
// }
export const renderStudents = async (students) => {
  const url = "http://localhost:3000/students";
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(students),
  });
  if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  return await response.json();
};
// Функція для додавання нового студента

// export function addStudent(e) {
//   const url = "http://localhost:3000/students/";
//   return fetch(url, {
//     method: "POST",
//     headers: { "content-Type": "application/json" },
//     body: JSON.stringify(e),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
//       return response.json();
//     })
//     .catch((err) => console.error(err));
// }
export const addStudent = async (student) => {
  const url = "http://localhost:3000/students";
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  return await response.json();
};
// Функція для оновлення студента

// export function updateStudent(id) {
//   const url = `http://localhost:3000/students/${id}`;
//   return fetch(url, {
//     method: "PUT",
//     headers: { "content-Type": "application/json" },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
//       return response.json();
//     })
//     .catch((err) => console.error(err));
// }
export const updateStudent = async (id, stud) => {
  const url = `http://localhost:3000/students/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(stud),
  });
  if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  return await response.json();
};
// Функція для видалення студента

// export function deleteStudent(id) {
//   const url = `http://localhost:3000/students/${id}`;
//   return fetch(url, {
//     method: "DELETE",
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
//       return response.json();
//     })
//     .catch((err) => console.error(err));
// }
export const deleteStudent = async (id) => {
  const url = `http://localhost:3000/students/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  return await response.json();
};
