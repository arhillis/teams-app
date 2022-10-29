import {useState, useEffect} from 'react';
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
    const [employees, setEmployees] = useState(
      JSON.parse(localStorage.getItem('employees')) || [...defaultEmployees]);

    const [selectedTeam, setSelectedTeam] = useState('TeamA');
    const [showSelectedOnly, toggleShowSelected] = useState(false);

    const handleChange = e =>{
        setSelectedTeam(e.target.value)
    }

    const selectEmployee = (e) =>{
        const {id} = e.currentTarget
        
        const newEmployeeList = employees.map(employee => employee.id === parseInt(id) ? 
                                                    employee.teamName === selectedTeam ?
                                                        {...employee, teamName: ''} : 
                                                        {...employee, teamName: selectedTeam}
                                                        : employee);

        setEmployees(newEmployeeList);
    }
    
    const handleSelectClick = () =>{
        toggleShowSelected(!showSelectedOnly);
    }

    const selectedTeamMembers = employees.filter(employee => employee.teamName === selectedTeam);

    const selectedEmployees = showSelectedOnly ? 
                  [...selectedTeamMembers]
                : [...employees];

    useEffect(() =>{
      localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees])
    
  return (
    <div className="App">
      <Router>
        <Menu />
        <Header 
          selectedTeam={selectedTeam}
          teamMemberCount={selectedTeamMembers.length}
        />
        <Routes>
          <Route path='/' element={
                <EmployeeList 
                  selectedTeam={selectedTeam}
                  selectedEmployees={selectedEmployees}
                  selectEmployee={selectEmployee}
                  handleChange={handleChange}
                  handleSelectClick={handleSelectClick}
                />
          }></Route>
          <Route path='/teams' element={
                <Teams 
                  employees={employees}
                  selectedTeam={selectedTeam}
                  setSelectedTeam={setSelectedTeam}
          />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
