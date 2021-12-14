//Importar o React
import React, {useState} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';



//Criar a classe com o nome Headers
function Headers(props){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
        return(
            <Navbar color="primary" dark expand="md">
            <NavbarBrand href="/">Celke</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="https://celke.com.br/">Site Celke</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
            </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
              </DropdownItem>
                            <DropdownItem>
                                Option 2
              </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
              </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
            </Collapse>
        </Navbar>
        );
    }


//Exportar o componente
export default Headers;