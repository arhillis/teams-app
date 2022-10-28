import {Container, Row, Col, Accordion} from 'react-bootstrap';

function Teams({employees, selectedTeam, setSelectedTeam}){

    const groupTeamMembers = () => {
        const teams = {}

        employees.forEach(employee =>{
            const {teamName} = employee;
            if(!teams[teamName])
                teams[teamName] = {
                    name: teamName,
                    selected: teamName === selectedTeam,
                    members: []
                }

            teams[teamName].members.push(employee)
        })

        return teams;
    }

    const handleTeamClick = (e) =>{
        const {id} = e.currentTarget;
        if(id !== selectedTeam)
            setSelectedTeam(id);
    }

    const sortedTeams = groupTeamMembers();

    return (<Container>
        <Row className='justify-content-center'>
            <Col md={8}>
                <Accordion defaultActiveKey={selectedTeam}>
                    {Object.keys(sortedTeams).map((key) =>(
                          <Accordion.Item id={key} eventKey={key} key={key} onClick={handleTeamClick}>
                            <Accordion.Header>{key}</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    {sortedTeams[key].members.map((member, i) =>(
                                        <li key={i}>
                                            {member.fullName} - {member.designation}
                                        </li>
                                    ))}
                                </ul>                                
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Col>
        </Row>
    </Container>)
}

export default Teams