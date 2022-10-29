import { Form } from "react-bootstrap";

function EmployeeSelect({selectedTeam, handleChange, handleSelectClick}){
    return (<>
    
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
    </>)
}

export default EmployeeSelect;