class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this,studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}




function videoPlay(id){
    const urlSecret = "https://platzi.clases.com" + id;
    console.log("se está reproduciendo la clase " + urlSecret);
};
function videoStop(id){
    const urlSecret = "https://platzi.clases.com" + id;
    console.log("se pasuó la clase " + urlSecret);
};

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }

    pausar() {
        videoStop(this.videoID);
    }
}










class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName === "CursoMalo"){
            console.error("web ... no")
        } else {
            this._name = newName;
        }
    }
};

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

const cursoProgramacionBasica = new Course({
    name: "Curso programación básica",
    classes: [],
    isFree: true,
});

const cursoHTML = new Course({
    name: "CursoHTML",
    classes: [],
    lang: "english",
});

const cursoCSS = new Course({
    name: "CursoCSS",
    classes: [],
});

const cursoJS = new Course({
    name: "CursoJS",
    classes: [],
});

const cursoGitGithub = new Course({
    name: "CursoGitGithub",
    classes: [],
});

const cursoCalculo = new Course({
    name: "CursoCalculo",
    classes: [],
});

const cursoPython = new Course({
    name: "CursoPython",
    classes: [],
});

const cursoCSharp = new Course({
    name: "CursoC#",
    classes: [],
});

const cursoUnity = new Course({
    name: "CursoUnity",
    classes: [],
});

const escuelaWeb = new LearnigPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgramacionBasica,
        cursoHTML,
        cursoCSS,
        cursoJS,
    ],
});
const escuelaData = new LearnigPath({
    name: "Escuela de Ciencia de Datos",
    courses: [
        cursoProgramacionBasica,
        cursoGitGithub,
        cursoPython,
        cursoCalculo,
    ],
});
const escuelaVGs  =new LearnigPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgramacionBasica,
        cursoCSharp,
        cursoUnity,
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

    publicarcomentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student {
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + " no puedes tomar ese curso");
        }
    }
};

class BasicStudent  extends Student {
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if (newCourse.lang != "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + " no puedes tomar ese curso");
        }
    }
};

class ExpertStudent extends Student {
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        
        this.approvedCourses.push(newCourse);
        
    }
};

class TeacherStudent extends Student {
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        
        this.approvedCourses.push(newCourse);
        
    }

    publicarcomentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
};




const juan2 = new FreeStudent({
    name: "Alfonsoamt",
    username: "Alfonsoamt_",
    email: "alfonso@email.com",
    twitter: "alfonsoamt_",
    learningPaths: [escuelaData, escuelaWeb],
});

const miguelito2 = new BasicStudent({
    name: "Miguel Alvarez",
    username: "miguelo",
    email: "miguel@email.com",
    twitter: "miguelon",
    LearnigPaths: [escuelaVGs],
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "Freddier",
    email: "freddier@email.com",
    instagram: "freddier",
});