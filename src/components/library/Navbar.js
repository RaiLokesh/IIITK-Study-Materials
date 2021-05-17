import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <div className="main1">
        <Navbar.Brand as={Link} to="/">
          <h1 className="title">IIIT Kottayam Study Materials</h1>
        </Navbar.Brand>
      </div>
    </Navbar>
  )
}
