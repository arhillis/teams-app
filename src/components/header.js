import {Row, Col} from 'react-bootstrap';

function Header({selectedTeam, teamMemberCount}){
    return (<header>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <h1 className="mt-4 p-5 bg-primary text-white rounded">
                            Team Member Allocation 
                        </h1>
                        {selectedTeam && 
                            (<h2>
                                {selectedTeam} has {teamMemberCount} member
                                {teamMemberCount === 1 ? '' : 's'}                                
                            </h2>)}
                    </Col>
                </Row>
            </header>)
}

export default Header;