import {Card, Col} from 'react-bootstrap';

import femaleProfile from '../../images/femaleProfile.jpg';
import maleProfile from '../../images/maleProfile.jpg';

function EmployeeCard({employee, selectedTeam, selectEmployee}){
    return ((<Col lg={4} md={6}>
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
                        <Card.Title>{employee.fullName}</Card.Title>
                        <Card.Text>
                            {employee.designation} ({employee.teamName ? employee.teamName : 'unassigned'})
                        </Card.Text>
                    </Card.Body>
                </Card>            
            </Col>))
}

export default EmployeeCard;