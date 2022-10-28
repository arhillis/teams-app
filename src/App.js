import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import EmployeeList from './components/employee-list';
import ErrorPage from './components/error-page';
import Footer from './components/footer';
import Header from './components/header';
import Menu from './components/menu';
import Teams from './components/teams';

function App() {
    const [employees, setEmployees] = useState(
      JSON.parse(localStorage.getItem('employees')) ||
      [
        {
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA"
        },
        {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA"
        },
        {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB"
        },
        {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB"
        },
        {
          id: 7,
          fullName: "James Bennet",
          designation: "Angular Developer",
          gender: "male",
          teamName: "TeamC"
        },
        {
          id: 8,
          fullName: "Jessica Faye",
          designation: "API Developer",
          gender: "female",
          teamName: "TeamC"
        },
        {
          id: 9,
          fullName: "Lita Stone",
          designation: "C++ Developer",
          gender: "female",
          teamName: "TeamC"
        },
        {
          id: 10,
          fullName: "Daniel Young",
          designation: "Python Developer",
          gender: "male",
          teamName: "TeamD"
        },
        {
          id: 11,
          fullName: "Adrian Jacobs",
          designation: "Vue Developer",
          gender: "male",
          teamName: "TeamD"
        },
        {
          id: 12,
          fullName: "Devin Monroe",
          designation: "Graphic Designer",
          gender: "male",
          teamName: "TeamD"
        }
    ]);

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

    console.log()

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
