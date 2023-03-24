import { DropdownButton, FormControl, InputGroup, Dropdown } from "react-bootstrap"

const DropDown = () =>{
    return(
        <>
         <DropdownButton 
            variant="info"
            title="Dropdown">
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Seperated</Dropdown.Item>
        </DropdownButton>
        </>
    )
}

const Search = () => {
  return (
    <>
     <InputGroup className="md-3">
     <FormControl placeholder="Search" />
       <DropDown />
     </InputGroup>
    </>
  )
}

export default Search; 