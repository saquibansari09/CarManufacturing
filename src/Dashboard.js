import React from "react";
import ReactFlow, { MiniMap, Controls } from "react-flow-renderer";

const HorizontalFlowDiagram = () => {
  const elements = [
    {
      id: "1",
      type: "input",
      data: { label: "Market Research" },
      position: { x: 50, y: 50 },
    },
    {
      id: "2",
      type: "default",
      data: { label: "Planning" },
      position: { x: 250, y: 50 },
    },
    {
      id: "3",
      type: "default",
      data: { label: "Design" },
      position: { x: 450, y: 50 },
    },
    {
      id: "4",
      type: "default",
      data: { label: "Manufacturing" },
      position: { x: 650, y: 50 },
    },
    {
      id: "5",
      type: "output",
      data: { label: "Sales" },
      position: { x: 850, y: 50 },
    },
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e3-4", source: "3", target: "4" },
    { id: "e4-5", source: "4", target: "5" },
  ];

  return (
    <div style={{ height: 200, width: "100%" }}>
      <ReactFlow
        elements={elements}
        snapToGrid={true}
        snapGrid={[15, 15]}
        style={{ height: "100%", width: "100%" }}
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === "input") return "#0041d0";
            if (n.type === "output") return "#ff0072";
            if (n.type === "default") return "#1a192b";
            return "#eee";
          }}
          nodeColor={(n) => {
            if (n.type === "input") return "#0041d0";
            if (n.type === "output") return "#ff0072";
            if (n.type === "default") return "#1a192b";
            return "#eee";
          }}
          nodeBorderRadius={2}
        />
        <Controls />
      </ReactFlow>
      <h4
        style={{
          position: "absolute",
          color: "gray",
          float: "jus",
          bottom: 20,
          left: 900,
        }}
      >
        Frontend/Full Stack Intership Assignment 2024|Lizmoters Mobility
      </h4>
    </div>
  );
};

export default HorizontalFlowDiagram;
