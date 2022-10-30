import { Row, Col} from 'react-bootstrap';

import EmployeeSelect from './employee-select';
import EmployeeCard from './employee-card';

function EmployeeList({selectedTeam, handleChange, handleSelectClick, selectedEmployees, selectEmployee}){

    return (<Row className='justify-content-center mt-3 mb-3'>
                <Col md={8}>
                    <EmployeeSelect
                            selectedTeam={selectedTeam} 
                            handleChange={handleChange}
                            handleSelectClick={handleSelectClick}
                        />
                    <Row className='justify-content-center mt-3 mb-3'>
                        {selectedEmployees.map(employee => (
                            <EmployeeCard key={employee.id} employee={employee} selectEmployee={selectEmployee} selectedTeam={selectedTeam}/>
                        ))} 
                    </Row>                       
                </Col>                    
            </Row>)
}

export default EmployeeList;