import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function File({ file }) {
  //console.log(file.name)
  return (
    <div className="filed">
    <a
      href={file.url}
      target="_blank"
    >
      <FontAwesomeIcon icon={faFile} className="mr-2" />
      {file.name}
    </a>
    </div>
  )
}
