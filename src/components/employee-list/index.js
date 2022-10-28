import { Row, Col, Form } from 'react-bootstrap';

import EmployeeCard from './employee-card';

function EmployeeList({selectedTeam, selectedEmployees, selectEmployee, handleChange, handleSelectClick}){
    //    const  = props
    return (<main>
                <Row className='justify-content-center mt-3 mb-3'>
                    <Col md={8}>
                        <Form.Select 
                            aria-label="Selected team"
                            value={selectedTeam}
                            onChange={handleChange}
                        >
                            <option value="TeamA">TeamA</option>
                            <option value="TeamB">TeamB</option>
                            <option value="TeamC">TeamC</option>
                            <option value="TeamD">TeamD</option>
                        </Form.Select>
                        <Form.Check 
                            type='checkbox'
                            id='showSelectedOnly'
                            className="mt-2"
                            label='Show only selected team'
                            onClick={handleSelectClick}
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