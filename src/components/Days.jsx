import { Navbar, Container, Nav } from 'react-bootstrap';
import ForecastCard from './Forecast-Card';
import RainChart from './Rain-Chart';

const Days = () => {
    return (
        <>
            <div className="days">
                <Navbar expand="lg" style={{ width: '70%' }}>
                    <div>
                        <Container className='' fluid>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Today</Nav.Link>
                                <Nav.Link href="#link">Tomorrow</Nav.Link>
                                <Nav.Link href="#link">Next 7 days</Nav.Link>
                            </Nav>
                        </Container>
                        <Nav>
                            <Nav.Link href="#forecast">Forecast</Nav.Link>
                            <Nav.Link href="#airquality">Air Quality</Nav.Link>
                        </Nav>
                        <Nav>
                            <ForecastCard selected={true} day={"Monday"} temp={"16°"} icon='sun-dim.svg' />
                            <ForecastCard selected={false} day={"Tue"} temp={"10°"} icon='logo.svg' />
                            <ForecastCard selected={false} day={"wed"} temp={"15°"} icon='cloud-rain.svg' />
                            <ForecastCard selected={false} day={"Thu"} temp={"11°"} icon='cloud-sun.svg' />
                            <ForecastCard selected={false} day={"Fri"} temp={"18°"} icon='cloud-sun.svg' />
                            <ForecastCard selected={false} day={"Sat"} temp={"12°"} icon='cloud-lightning.svg' />
                            <ForecastCard selected={false} day={"Sun"} temp={"10°"} icon='logo.svg' />
                        </Nav>
                    </div>
                </Navbar>
                <Navbar style={{ width: '30%'}}>
                    <RainChart/>
                </Navbar>
            </div>
        </>
    );
};

export default Days;