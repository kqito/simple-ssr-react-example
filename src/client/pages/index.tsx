import React from "react";
import { Link } from "react-router-dom";

export const Index: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <p>/index</p>
    <Link to="/">index</Link>
    <Link to="/about">about</Link>
    <Link to="/me">me</Link>
  </div>
);
