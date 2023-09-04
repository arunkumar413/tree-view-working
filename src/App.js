import "./styles.css";
import { TreeView } from "./TreeView";
import { treeData } from "./treeData";
import React, { useState, useEffect } from "react";

export default function App() {
  const [selectedNode, setSelectedNode] = useState("");

  return (
    <div className="App">
      <TreeView
        files={treeData}
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />
      {selectedNode}
    </div>
  );
}
