const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML  y CSS",
        "Curso PRáctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // }
};
Student.prototype.aprobarCurso = function (nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de introducción a los Videojuegos",
        "Curso de creación de personajes",
    ],
);

// Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de responsive design")


// Prototipos con las sintaxis de clases
class Student2 {
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        }
    aprobarCurso(nuevoCursito) {
            this.cursosAprobados.push(nuevoCursito);
        }
};

const miguelito = new Student2(
    "Miguel",
    28,
    [
        "Curso Ánalisis de Negocios para Ciencia de Datos",
        "Curso de Principios de visualización para BI"
    ],
);


class LearnigPath {
    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
        
    }
    addCourse(newCourse) {
        this.courses.push(newCourse);
    }
    removeCourse(CourseToRemove) {
        this.courses = this.courses.filter(
            function(item) {
                return item != CourseToRemove;
            }
        );
    }
};

const escuelaWeb = new LearnigPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        "CursoHTML",
        "CursoCSS",
        "CursoJS"
    ],
});
const escuelaData = new LearnigPath({
    name: "Escuela de Ciencia de Datos",
    courses: [
        "CursoGitGithub",
        "CursoPython",
        "CursoCalculo",
    ],
});
const escuelaVGs  =new LearnigPath({
    name: "Escuela de Videojuegos",
    courses: [
        "CursoC#",
        "CursoUnity",
        "CursoUnrealEngine",
    ],
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    };
}

const juan2 = new Student({
    name: "Alfonsoamt",
    username: "Alfonsoamt_",
    email: "alfonso@email.com",
    twitter: "alfonsoamt_"
});

const miguelito2 = new Student({
    name: "Miguel Alvarez",
    username: "miguelo",
    email: "miguel@email.com",
    twitter: "miguelon"
});