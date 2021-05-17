import React from "react"
import { Container } from "react-bootstrap"
import { useFolder } from "../../hooks/useFolder"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import Folder from "./Folder"
import File from "./File"
import Navbar from "./Navbar"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import { useParams, useLocation } from "react-router-dom"

export default function Dashboard() {
    const { folderId } = useParams()
    const { state = {} } = useLocation()
    const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)
    //console.log(useFolder(folderId, state.folder))
    //console.log(childFiles)
    //console.log(childFolders)
    //console.log(folder)
    return (
      <>
        <Navbar />
        <Container fluid>
          <div>
            <FolderBreadcrumbs currentFolder={folder} />
            <AddFileButton currentFolder={folder} />
            <AddFolderButton currentFolder={folder} />
          </div>
          <div >
          {childFolders.length > 0 && (
            <div >
              {childFolders.map(childFolder => (
                <div className="filed"
                  key={childFolder.id}
                  
                >
                  <Folder folder={childFolder} />
                </div>
              ))}
            </div>
          )}
          {childFolders.length > 0 && childFiles.length > 0 && <hr />}
          {childFiles.length > 0 && (
            <div >
              {childFiles.map(childFile => (
                <div
                  key={childFile.id}
                  
                >
                  <File file={childFile} />
                </div>
              ))}
            </div>
          )}
          </div>
        </Container>
        <br/><br/>
      </>
      
    )
  }
  