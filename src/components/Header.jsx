import { Navbar, Container, Form } from 'react-bootstrap';
import BellIcon from '@heroicons/react/24/solid/BellIcon';
import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';

const Header = () => {
    const location = 'New York, NY';
    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand>Weather Dashboard</Navbar.Brand>
                <Navbar.Text className="me-auto my-2 my-lg-0">
                    <BellIcon width={30} className="icon" />
                    <MapPinIcon width={30} className="icon" />
                    {location}
                </Navbar.Text>
                <Form className="d-flex">
                    <div className="search-container">
                        <MagnifyingGlassIcon id='search' className="search-icon" width={30} />
                        <Form.Control
                            type="search"
                            placeholder="        Search city"
                            className="w-300 search-input"
                            aria-label="Search"
                            onChange={() => document.getElementById('search').style.display = 'none'}
                        />
                    </div>
                </Form>
            </Container>
        </Navbar>
    );
};

export default Header;
