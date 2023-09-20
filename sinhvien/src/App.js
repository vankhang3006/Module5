import logo from './logo.svg';
import './App.css';
import {Component} from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: {
        name: "",
        phone: "",
        email: ""
      },
    isValid: false,
    indexSelected: -1
    }
  }
  handleChange = (event) => {
    this.setState((state) => {
      const form = state.form
      form[event.target.name] = event.target.value
      return { form }
    }, () => this.checkInvalidForm())
  }
  handleSelect = (studentSelected, index) => {
    this.setState({
      form: JSON.parse(JSON.stringify(studentSelected)),
      indexSelected: index
    })
  }
  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form
    const value = name && phone && email
    this.setState({
      isValid: value
    })
  }
  handleSubmit = () => {
    if(this.state.isValid){
      const newList = this.state.studentList
      if (this.state.indexSelected > -1) {

      } else {

      }
      this.setState()
    }
  }
  handleDelete = (index) => {
  }
  render() {
    return <div>
      <center>
        <h1>Todo List</h1>
        <div>
          <input  onChange={(event => this.handleChange(event))} type="item" value={this.state.item}/>
          <button onClick={this.handleAddItem}>Add</button>
        </div>
        <table>
          <tbody>
          {this.state.list.map((todo,index) =>(
              <tr key={index}>
                <td>{todo}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </center>
    </div>
  }
}


export default App;
