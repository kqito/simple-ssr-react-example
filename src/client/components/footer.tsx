import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Link to="/">index</Link>
    <Link to="/about">about</Link>
    <Link to="/me">me</Link>
  </div>
);
