import { getStudents } from "./data.js";
import { renderStudents } from "./data.js";
import { addStudent } from "./data.js";
import { updateStudent } from "./data.js";
import { deleteStudent } from "./data.js";
import Handlebars from "handlebars";
import templateStudents from "bundle-text:../hbs/template-students.hbs";
import _ from "lodash";
const getBtn = document.querySelector("#get-students-btn");
const submit = document.querySelector(".submit");
const tbody = document.querySelector(".tbody");

const madeMarkup = Handlebars.compile(templateStudents);
const handlerReaderStudents = async () => {
  tbody.innerHTML = "";

  try {
    const studs = await getStudents();
    console.log(studs);
  } catch (error) {
    console.log(error);
  }
};

getBtn.addEventListener("click", handlerReaderStudents);

const handlerRenderStudents = async () => {
  try {
    const studs = await getStudents();

    const StudentsData = studs.map((studentData) => {
      return {
        id: studentData.id,
        name: studentData.name,
        age: studentData.age,
        skills: Array.isArray(studentData.skills)
          ? [...studentData.skills]
          : [],

        course: studentData.course,
        email: studentData.email,
        isEnrolled: studentData.isEnrolled,
      };
    });

    const htmlCountry = madeMarkup(StudentsData);
    tbody.insertAdjacentHTML("beforeend", htmlCountry);
  } catch (error) {
    console.log(error);
  }
};

getBtn.addEventListener("click", handlerRenderStudents);

const handleDeleting = async (event) => {
  const target = event.target;

  if (target.dataset.action === "del") {
    const studentIdCard = target.closest("tr");
    if (studentIdCard) {
      console.log(studentIdCard);

      const studentId = studentIdCard.dataset.id;
      try {
        await deleteStudent(studentId);
        console.log("student is deleted");
      } catch (err) {
        console.log(err);
      }

      const studentItem = studentIdCard.closest("tr");
      studentItem.remove();
    }
  }
};

tbody.addEventListener("click", handleDeleting);

const form = document.querySelector("#add-student-form");
const handlePost = async (event) => {
  event.preventDefault();
  const dataNewStudent = Object.fromEntries(new FormData(form));

  await addStudent(dataNewStudent);
  tbody.innerHTML = "";

  await handlerRenderStudents();
};

form.addEventListener("submit", handlePost);

const editForm = document.querySelector("#edit-student-form");

const handleEditing = async (event) => {
  const target = event.target;
  event.preventDefault();
  if (target.dataset.action === "edit") {
    const studentIdCard = target.closest("tr");

    if (studentIdCard) {
      const dataEditedStudent = Object.fromEntries(new FormData(editForm));

      const studentId = studentIdCard.dataset.id;

      try {
        await updateStudent(studentId, dataEditedStudent);
        console.log("student is updated");
        tbody.innerHTML = "";

        await handlerRenderStudents();
      } catch (err) {
        console.log(err);
      }
    }
  }
};

tbody.addEventListener("click", handleEditing);
