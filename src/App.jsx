import Student from "./Student";
import StudentMarks from "./StudentMarks";
import Login from "./Login";
import "./App.css";

function App() {
  return (
    <div className="container">

      <Student
        name="Rahul"
        rollNo="101"
        course="BCA"
        college="ABC College"
      />

      <StudentMarks
        name="Rahul"
        subject="Java"
      />

      <Login />

    </div>
  );
}

export default App;