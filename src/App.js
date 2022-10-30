import {useState, useEffect, useReducer} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import { defaultEmployees } from './default-employees';
import EmployeeList from './components/employee-list';
import ErrorPage from './components/error-page';
import Footer from './components/footer';
import Header from './components/header';
import Menu from './components/menu';
import Teams from './components/teams';

function App() {

  const initialState = {
    selectedTeam: 'TeamA',
    showSelectedOnly: false,
    employees: JSON.parse(localStorage.getItem('employees')) || defaultEmployees
  };

  const reducer = (state, action) =>{
    const {type, payload} = action;
    const {selectedTeam, showSelectedOnly} = state;
    if(type === 'SELECT_TEAM')
      return {
        ...state,
        selectedTeam: payload,
        selectedEmployees: state.employees.filter(employee => employee.teamName === payload)
      }
    
    if(type === 'TOGGLE_SHOW_ONLY_SELECTED')
      return {
        ...state,
        showSelectedOnly: !showSelectedOnly,
        selectedEmployees: !showSelectedOnly ? state.employees.filter(employee => employee.teamName === selectedTeam) : state.employees
      }

    if(type === 'SELECT_EMPLOYEE'){
      localStorage.setItem('employees', JSON.stringify(payload));
      return {
        ...state,
        employees: payload,
      }
    }

    console.log('No state change')
    return state;
  }

  const [state, dispactch] = useReducer(reducer, initialState)

  
    const handleChange = e =>{
      dispactch({type: 'SELECT_TEAM', payload: e.target.value})
    }

   const handleSelectClick = () =>{
    dispactch({type: 'TOGGLE_SHOW_ONLY_SELECTED'})
   }

    const selectEmployee = (e) =>{
        const {id} = e.currentTarget
        
        const {employees, selectedTeam} = state
        const newEmployeeList = employees.map(employee => employee.id === parseInt(id) ? 
                                                    employee.teamName === selectedTeam ?
                                                        {...employee, teamName: ''} : 
                                                        {...employee, teamName: selectedTeam}
                                                        : employee);

        dispactch({type: 'SELECT_EMPLOYEE', payload: newEmployeeList})
    }

    const setSelectedTeam = (team) =>{
      dispactch({type: 'SELECT_TEAM', payload: team})
    }
  
  const selectedTeamMembers = state.employees.filter(employee => employee.teamName === state.selectedTeam);
  const selectedEmployees = state.showSelectedOnly ? selectedTeamMembers : state.employees;

  return (<div className='App'>
            <Router>
              <Menu />
              <Header 
                selectedTeam={state.selectedTeam}
                teamMemberCount={selectedTeamMembers.length}
              />
              <Routes>
                <Route path='/' element={<EmployeeList 
                  selectedTeam={state.selectedTeam}
                  handleChange={handleChange}
                  handleSelectClick={handleSelectClick}
                  selectEmployee={selectEmployee}
                  selectedEmployees={selectedEmployees}
                />}></Route>
                <Route path='/teams' element={<Teams 
                  employees={state.employees}  
                  selectedTeam={state.selectedTeam}
                  setSelectedTeam={setSelectedTeam}
                />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
              </Routes>
              <Footer />
            </Router>
          </div>)
  //   const [employees, setEmployees] = useState(
  //     JSON.parse(localStorage.getItem('employees')) || [...defaultEmployees]);

  //   const [selectedTeam, setSelectedTeam] = useState('TeamA');
  //   const [showSelectedOnly, toggleShowSelected] = useState(false);
  //   const selectedTeamMembers = employees.filter(employee => employee.teamName === selectedTeam);

  //   const selectedEmployees = showSelectedOnly ? 
  //                 [...selectedTeamMembers]
  //               : [...employees];

  //   useEffect(() =>{
  //     localStorage.setItem('employees', JSON.stringify(employees));
  //   }, [employees])

  //                 selectedEmployees={selectedEmployees}
  //                 
  //                 
  //                 handleSelectClick={handleSelectClick}
  //               
  //         
  //         
  //               
  //                 

  //         
  //         
  //       
  //       
  //     

}

export default App;
