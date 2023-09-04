import React, { useEffect, useState } from "react";
import { DownIcon } from "./DownIcon";
import { RightIcon } from "./RightIcon";

export function TreeView({
  setSelectedNode,
  selectedNode,
  files,
  indentLevel = 0
}) {
  const [isExpanded, setExpanded] = useState(false);

  function handleFolderSelection(evt, folderId) {
    const newExpanded = !isExpanded;
    setExpanded(newExpanded);
    setSelectedNode(newExpanded ? folderId : "");
  }

  const isSelected = selectedNode === files.id;
  console.log(isSelected, selectedNode, files.id);

  if (files.type === "folder") {
    return (
      <div
        // key={props.files.id}
        className="folder"
        style={{ marginLeft: indentLevel * 10 }}
      >
        <div
          className={`folder-title ${
            // props.selectedNode === props.files.id ? "selected-item" : ""
            isSelected ? "selected-item" : ""
          }`}
          onClick={(evt) => handleFolderSelection(evt, files.id)}
        >
          {isExpanded ? <DownIcon /> : <RightIcon />}
          {files.name}{" "}
        </div>

        {isExpanded &&
          files.children.map((item, index) => (
            <TreeView
              setSelectedNode={setSelectedNode}
              indentLevel={indentLevel + 1}
              key={index}
              files={item}
              selectedNode={selectedNode}
            />
          ))}
      </div>
    );
  }
  return (
    <>
      <div style={{ marginLeft: indentLevel * 10 + 5 }} className="file-name">
        {files.name}
      </div>
    </>
  );
}
