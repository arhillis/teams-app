import './App.css';

import Header from './components/header';
import EmployeeList from './components/employee-list';
import Footer from './components/footer';

function App() {
  return (
    <div className="App container">
      <Header />
      <EmployeeList />
      <Footer />
    </div>
  );
}

export default App;
