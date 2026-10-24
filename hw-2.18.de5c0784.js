// import { getStudents } from "./data.js";
// import { postStudents } from "./data.js";
// import { renderStudents } from "./data.js";
// import { updateStudent } from "./data.js";
// import { deleteStudent } from "./data.js";
// const getBtn = document.querySelector(".get-students-btn");
// const container = document.querySelector(".stud-container");
// const submit = document.querySelector(".submit");
// const submitTwo = document.querySelector(".submit-two");
// const name = document.querySelector("#name");
// const age = document.querySelector("#age");
// const course = document.querySelector("#course");
// const skills = document.querySelector("#skills");
// const email = document.querySelector("#email");
// // const handleGetterStudents = async (event) => {
// //   try {
// //     const data = await getStudents();
// //     container.innerHTML = "";
// //     console.log(
// //       data.map((stud) => {
// //         return stud;
// //       }),
// //     );
// //     container.innerHTML = `
// //         <ul class="list">
// //   ${data
// //         .map((stud) => {
// //           return `<li>
// //       <article data-id="${stud.id}">
// //         <h2>${stud.name}</h2>
// //         <p>${stud.age}</p>
// //         <p>${stud.course}</p>
// //         <p>${stud.email}</p>
// //         <p>${stud.skills}</p>
// //         <div class="actions">
// //           <button data-action="edit">Edit</button>
// //           <button data-action="delete">Delete</button>
// //         </div>
// //       </article>
// //     </li>`;
// //         })
// //         .join("")}
// // </ul>
// //             `;
// //   }
// //   const list = document.querySelectorAll("list");
// //   list.forEach((btnEdit) => {
// //     btnEdit.addEventListener("click", async (e) => {
// //       e.preventDefault();
// //       const studentId = btnEdit.closest("[data-id]").dataset.id;
// //       const studCard = {
// //         name: e.target.name.value,
// //         age: e.target.age.name.value,
// //         course: e.target.course.name.value,
// //         skills: e.target.skills.name.value,
// //         email: e.target.email.name.value,
// //       };
// //       console.log(studCard);
// //       if (studCard) {
// //         try {
// //           await updateStudent(studentId, studCard);
// //         } catch (err) {
// //           console.log(err);
// //         }
// //       }
// //     });
// //   });
// // } catch (err) {
// //   console.log(err);
// // }
// // getBtn.addEventListener("click", handleGetterStudents);
// // container.addEventListener("click", async (e) => {
// //   const target = e.target;
// //   if (target.dataset.action === "delete") {
// //     const studCard = target.closest("[data-id]");
// //     if (studCard) {
// //       const bookId = studCard.dataset.id;
// //       try {
// //         await deleteStudent(bookId);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //       const bookItem = studCard.closest("li");
// //       bookItem.remove();
// //     }
// //   }
// // });

//# sourceMappingURL=hw-2.18.de5c0784.js.map
