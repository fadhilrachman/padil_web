import React from "react";

interface Column {
  index: string;
  title?: string;
  render?: React.ReactNode;
}

export default Column;
