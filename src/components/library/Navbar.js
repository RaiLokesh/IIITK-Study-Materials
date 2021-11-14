import React from "react"
import { Navbar } from "react-bootstrap"


export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <div className="main1">
        <Navbar.Brand>
          <h1 className="title">IIIT Kottayam Study Materials</h1>
        </Navbar.Brand>
      </div>
    </Navbar>
  )
}
