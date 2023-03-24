import { Button, ListGroup } from "react-bootstrap";

const AppointmentInfo = ({appointment, onDeleteAppointment})=>{
    return(
            <>
            
                  <ListGroup.Item>
                    <p><small>Date: {appointment.appDate}</small></p>
                    <p><small>First Name: {appointment.firstName}</small></p>
                    <p><small>Last Name: {appointment.lastName}</small></p>
                    <p><small>Note: {appointment.aptNote}</small></p>
                    <Button onClick={()=> onDeleteAppointment(appointment.id)} size="sm" variant="danger">  Delete</Button>
                  </ListGroup.Item>
                 
            </>
    );
}

export default AppointmentInfo;