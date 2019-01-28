import React, { Component } from "react"



export default class ApplicationViews extends Component {

  state = {
    students: []
  }

  componentDidMount() {

    fetch("http://localhost:5002/students")
        .then(r => r.json())
        .then(students => {this.setState({students: students})})
  }

render() {
  return (
      <section className="students">
            {
                this.state.students.map(student =>
                    <div key={student.id}>
                    <h2>Last Name: {student.firstName}</h2>
                        <h3>First Name: {student.lastName}</h3>
                        <h4>Notes: {student.notes}</h4>
                    </div>
                )
            }
      </section>
        )
    }
  }