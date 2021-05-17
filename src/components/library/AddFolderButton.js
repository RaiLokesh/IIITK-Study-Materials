import React, { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons"
import { database } from "../../firebase"
import { ROOT_FOLDER } from "../../hooks/useFolder"
import { faFolder } from "@fortawesome/free-solid-svg-icons"

export default function AddFolderButton({ currentFolder }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  //console.log(currentFolder)
  //console.log(ROOT_FOLDER)
  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }
  
  function handleSubmit(e) {
    //console.log("heehehehehe")
    e.preventDefault()

    if (currentFolder == null) return

    const path = [...currentFolder.path]
    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id })
    }
    
    database.folders.add({
      
      name: name,
      parentId: currentFolder.id,
      path: path,
      createdAt: database.getCurrentTimestamp(),
    })
    setName("")
    closeModal()
  }

  return (
    <>
      <Button onClick={openModal} variant="outline-success" className="folderupload">
        <FontAwesomeIcon icon={faFolderPlus} />
      </Button>
      <Modal show={open} onHide={closeModal}>
        <div className="deadlift"></div>
        <Form onSubmit={handleSubmit} className="formfolder">
          
          <Modal.Body>
            <Form.Group>
              <Form.Label>
                <label className="faf">
                  <FontAwesomeIcon icon={faFolder} />
                </label>
                <h className="mr-2">New Folder Name</h>
              </Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button style={{color: " #FF7276"}} className="btn1" variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button style={{color: "#08FF08"}} className="btn1" variant="success" type="submit">
              Create
              
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
