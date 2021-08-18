import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import './Header.css'

export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark" className="Header py-5" >
                <Container className='text-light justify-content-center' >
                    <h1>JavaScript, essentials everybody should know.</h1>
                </Container>
            </Navbar>
        </>
    )
}

// style={{ height:"25vh" }}
