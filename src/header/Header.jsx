import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Header() {
  return (
    <Navbar className='bg-body-secondary'>
      <Container>
        <Navbar.Brand href='#home'>Refs and Portals</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
