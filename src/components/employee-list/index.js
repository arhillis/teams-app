


import { Row, Col, Card, Form } from 'react-bootstrap';

import femaleProfile from '../../images/femaleProfile.jpg';
import maleProfile from '../../images/maleProfile.jpg';

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
                            {selectedEmployees.map(employee => (
                                <Card 
                                    id={employee.id}
                                    key={employee.id}
                                    className={employee.teamName === selectedTeam ? 'm-2 standout' : 'm-2'}
                                    style={{cursor: 'pointer'}}
                                    onClick={selectEmployee}
                                >
                                    <Card.Img variant="top" 
                                        src={employee.gender === 'female' 
                                                ? femaleProfile : maleProfile} 
                                    />   
                                    <Card.Body>
                                        <Card.Title>
                                            {employee.fullName}
                                        </Card.Title>  
                                        <Card.Text>
                                            {employee.designation} ({employee.teamName ? employee.teamName : 'unassigned'})
                                        </Card.Text>                                  
                                    </Card.Body>             
                                </Card>)
                            )}
                        </div>
                    </Col>
                </Row>
                
        
                {/* 

                    <Col md={8}>
                        Left side
                    </Col>
                

                    
                        
                    
                    <Col md={4}>
                        Right side here
                    </Col>
                
         */}
    </main>)
}

export default EmployeeList;