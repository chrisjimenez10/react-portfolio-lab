//Inline Styling
import "./App.css"

const body = {
  boxSizing: "border-box",
  display: "grid",
  gridTemplateColumns: "1fr",
  justifyItems: "center",
  fontFamily: "Arial",
  color: "hsla(0, 0%, 80%, 1)",
  background: "linear-gradient(to right bottom, #424141, #323232, #242323, #151515, #000000)",
  textShadow: "3px 3px 2px black",
};

const endStatus = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "hsla(0, 0%, 0%, 0.20)",
  borderRadius: "10px",
}

const languageDetailsCss = {
  backgroundColor: "hsla(0, 0%, 0%, 0.20)",
  borderRadius: "10px",
  margin: "5px",
  padding: "15px",
}

const heading = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

//Data Rendering

class Person {
  constructor(firstName, lastName, career, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.career = career;
    this.age = age;
  }
  greeting() {
    return <h5>Hello my name is {this.firstName}, Welcome to my Portfolio</h5>
  }
  fullName() {
    return <h1>{this.firstName + this.lastName}</h1>
  }
}
let person1 = new Person("Christopher", "Jimenez", "Full-Stack Software Engineer", 29);
console.log(person1);

const mySkills = [
  {
    name:'JavaScript',
    comfort: 9,
    frontEnd: true,
    backend: true
  },
  {
    name:'CSS',
    comfort: 8,
    frontEnd: true,
    backend: false
  },
  {
    name:'HTML',
    comfort: 10,
    frontEnd: true,
    backend: false
  },
  {
    name: "Express.js",
    comfort: 10,
    frontEnd: false,
    backend: true,
  },
  {
    name: "Python",
    comfort: 5,
    frontEnd: true,
    backend: true,
  },
]

// const mySkillsCopy = [...mySkills];
// const [javaScript, CSS, HTML] = mySkills;

const backEndStatus = mySkills.filter(language => language.backend === true).map((language, index) =>{
  return <li key={index}>{language.name}</li>
})

//We can use filter() method to create a new array with the logic we desire - this way we can avoid rendering a blank space/element if we just use map() method
const frontEndStatus = mySkills.filter(language => language.frontEnd === true).map((language, index)=>{
  return <li key={index}>{language.name}</li>
})

//Dynamic Rendering 
const languageDetails = mySkills.map((language, index)=>{
  return (
  <div key={index} style={languageDetailsCss}>
    <h2>{language.name}</h2>
    <ul>
      <li>Comfort Level: {language.comfort}</li>
      <li>Front-End: {language.frontEnd ? <strong>Yes</strong> : <strong>No</strong>}</li>
      <li>Back-End: {language.backend ? <strong>Yes</strong> : <strong>No</strong>}</li>
    </ul>
  </div>
  );
})

const App = () => {

  return (
    <>
      <div style={body}>
        <div className="heading" style={heading}>
          {person1.fullName()}
          {person1.career}
          {person1.greeting()}
        </div>
        <div className="languages">
          <hr />  
          <h2>+ Programming Languages +</h2>
          <div id="end-status" style={endStatus}>
            <div>
              <h3>Front-End</h3>
              <ul>{frontEndStatus}</ul>
            </div>
            <div>
              <h3>Back-End</h3>
              <ul>{backEndStatus}</ul>
            </div>
          </div>
        </div>
        {/* Dynamic rendering */}
        {languageDetails}

        {/* Rendering using variables */}
        {/* <div className="JavaScript">
          <h2>{javaScript.name}</h2>
          <ul>
            <li>Comfort Level: {javaScript.comfort}</li>
            <li>Front-End: {javaScript.frontEnd === true ? <strong>Yes</strong> : <strong>No</strong>}</li>
            <li>Back-End: {javaScript.backend === true ? <strong>Yes</strong> : <strong>No</strong>}</li>
          </ul>
        </div>
        <div className="CSS">
          <h2>{CSS.name}</h2>
          <ul>
            <li>Comfort Level: {CSS.comfort}</li>
            <li>Front-End: {CSS.frontEnd === true ? <strong>Yes</strong>: <strong>No</strong>}</li>
            <li>Back-End: {CSS.backend === true ? <strong>Yes</strong> : <strong>No</strong>}</li>
          </ul>
        </div>
        <div className="HTML">
          <h2>{HTML.name}</h2>
          <ul>
            <li>Comfort Level: {HTML.comfort}</li>
            <li>Front-End: {HTML.frontEnd === true ? <strong>Yes</strong> : <strong>No</strong>}</li>
            <li>Back-End: {HTML.backend === true ? <strong>Yes</strong> : <strong>No</strong>}</li>
          </ul>
        </div> */}
      </div>
      
    </>
  )
}

//Export
export default App
