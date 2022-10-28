import Card from 'react-bootstrap/card';

import femaleProfile from '../../images/femaleProfile.jpg';
import maleProfile from '../../images/maleProfile.jpg';

function EmployeeCard({employee, selectedTeam, selectEmployee}){
    return ((
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
                                </Card>))
}

export default EmployeeCard;