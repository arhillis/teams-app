import {Container, Row, Col, Accordion, Card} from 'react-bootstrap';

function Teams({employees, selectedTeam, setSelectedTeam}){


    function groupTeamMembers(){
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

    const sortedTeamMembers = groupTeamMembers();

    return (<Container>
        Teams go here...
    </Container>)
}

export default Teams