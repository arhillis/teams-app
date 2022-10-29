import { Row, Col} from 'react-bootstrap';

import EmployeeSelect from './employee-select';
import EmployeeCard from './employee-card';

function EmployeeList({selectedTeam, selectedEmployees, selectEmployee, handleChange, handleSelectClick}){
    //    const  = props
    return (<main>
                <Row className='justify-content-center mt-3 mb-3'>
                    <Col md={8}>
                        <EmployeeSelect
                            selectedTeam={selectedTeam} 
                            handleChange={handleChange}
                            handleSelectClick={handleSelectClick}
                        />
                    </Col>
                </Row>
                <Row className='justify-content-center mt-3 mb-3'>
                    <Col md={8}>
                        <div className="cards">
                            {selectedEmployees.map(employee => 
                                <EmployeeCard key={employee.id} employee={employee} selectEmployee={selectEmployee} selectedTeam={selectedTeam}/>
                            )}
                        </div>
                    </Col>
                </Row>
    </main>)
}

export default EmployeeList;