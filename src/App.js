import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "research",
    dragHandle: true,
    type: "input",
    sourcePosition: "right",
    data: { label: "Research" },
    position: { x: 0, y: 20 },
    style: {
      background: "#090979",
      color: "white",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "planning",
    dragHandle: true,
    sourcePosition: "right",
    type: "input",
    data: { label: "Planning" },
    position: { x: 0, y: 120 },
    style: {
      background: "#00d4ff",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "designing",
    dragHandle: true,
    type: "input",
    sourcePosition: "right",
    data: { label: "Designing" },
    position: { x: 0, y: 220 },
    style: {
      background: "#e76f20",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "manufacturing",
    dragHandle: true,
    type: "input",
    sourcePosition: "right",
    data: { label: "Manufacturing" },
    position: { x: 0, y: 320 },
    style: {
      background: "#ECC47A",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "sales-marketing",
    dragHandle: true,
    type: "input",
    sourcePosition: "right",
    data: { label: "Sales/Marketing" },
    position: { x: 0, y: 440 },
    style: {
      background: "#7D7AEC",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "b2b",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "B2C" },
    position: { x: 400, y: -50 },
    style: {
      background: "#090979",
      color: "white",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "b2b-2",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "B2C" },
    position: { x: 400, y: 30 },
    style: {
      background: "#090979",
      color: "white",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "external",
    dragHandle: true,
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "External" },
    position: { x: 200, y: 0 },
    style: {
      background: "#090979",
      color: "white",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "internal",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Internal" },
    position: { x: 200, y: 50 },
    style: {
      background: "#090979",
      color: "white",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },

  {
    id: "prd",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Prd" },
    position: { x: 200, y: 150 },
    style: {
      background: "#00d4ff",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "specs",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Specs" },
    position: { x: 200, y: 100 },
    style: {
      background: "#00d4ff",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },

  {
    id: "hardware",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Hardware" },
    position: { x: 200, y: 200 },
    style: {
      background: "#e76f20",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "software",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Software" },
    position: { x: 200, y: 250 },
    style: {
      background: "#e76f20",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },

  {
    id: "material",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Material" },
    position: { x: 200, y: 300 },
    style: {
      background: "#ECC47A",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "production",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Production" },
    position: { x: 200, y: 350 },
    style: {
      background: "#ECC47A",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },

  {
    id: "online",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Online" },
    position: { x: 200, y: 410 },
    style: {
      background: "#7D7AEC",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "dealership",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Dealership" },
    position: { x: 200, y: 460 },
    style: {
      background: "#7D7AEC",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "online-2",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Online" },
    position: { x: 700, y: -100 },
    style: {
      background: "#7D7AEC",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "interview",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Interview" },
    position: { x: 700, y: -50 },
    style: {
      background: "#7D7AEC",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "public-data",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Public Data" },
    position: { x: 700, y: 0 },
    style: {
      background: "#7D7AEC",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
  {
    id: "health",
    dragHandle: true,
    type: "output",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Health" },
    position: { x: 700, y: 50 },
    style: {
      background: "#7D7AEC",
      color: "black",
      border: "none",
      borderRadius: 0,
      fontWeight: "bold",
    },
  },
];

const initialEdges = [
  {
    id: "horizontal-e1-2",
    source: "research",
    type: "smoothstep",
    target: "external",
    animated: false,
  },
  {
    id: "horizontal-e1-3",
    source: "research",
    type: "smoothstep",
    target: "internal",
    animated: false,
  },
  {
    id: "horizontal-e3-5",
    source: "internal",
    type: "smoothstep",
    target: "horizontal-5",
    animated: false,
  },
  {
    id: "horizontal-e3-6",
    source: "internal",
    type: "smoothstep",
    target: "horizontal-6",
    animated: false,
  },
  {
    id: "horizontal-e5-7",
    source: "horizontal-5",
    type: "smoothstep",
    target: "horizontal-7",
    animated: false,
  },
  {
    id: "horizontal-e6-8",
    source: "horizontal-6",
    type: "smoothstep",
    target: "horizontal-8",
    animated: false,
  },
  {
    id: "horizontal-e6-9",
    source: "external",
    type: "smoothstep",
    target: "b2b",
    animated: false,
  },
  {
    id: "horizontal-e6-10",
    source: "external",
    type: "smoothstep",
    target: "b2b-2",
    animated: false,
  },

  {
    id: "horizontal-e2-prd",
    source: "planning",
    type: "smoothstep",
    target: "prd",
    animated: false,
  },
  {
    id: "horizontal-e2-specs",
    source: "planning",
    type: "smoothstep",
    target: "specs",
    animated: false,
  },

  {
    id: "horizontal-e2-prd",
    source: "designing",
    type: "smoothstep",
    target: "software",
    animated: false,
  },
  {
    id: "horizontal-e2-specs",
    source: "designing",
    type: "smoothstep",
    target: "hardware",
    animated: false,
  },

  {
    id: "horizontal-e2-prd",
    source: "manufacturing",
    type: "smoothstep",
    target: "material",
    animated: false,
  },
  {
    id: "horizontal-e2-specs",
    source: "manufacturing",
    type: "smoothstep",
    target: "production",
    animated: false,
  },

  {
    id: "horizontal-e2-prd",
    source: "sales-marketing",
    type: "smoothstep",
    target: "online",
    animated: false,
  },
  {
    id: "horizontal-e2-specs",
    source: "sales-marketing",
    type: "smoothstep",
    target: "dealership",
    animated: false,
  },
  {
    id: "b2b-online",
    source: "b2b",
    type: "smoothstep",
    target: "online-2",
    animated: false,
  },
  {
    id: "b2b-interview",
    source: "b2b",
    type: "smoothstep",
    target: "interview",
    animated: false,
  },
  {
    id: "b2b-public-data",
    source: "b2b",
    type: "smoothstep",
    target: "public-data",
    animated: false,
  },
  {
    id: "b2b-health",
    source: "b2b",
    type: "smoothstep",
    target: "health",
    animated: false,
  },
];

const HorizontalFlow = () => {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      attributionPosition="bottom-left"
    ></ReactFlow>
  );
};

export default HorizontalFlow;
