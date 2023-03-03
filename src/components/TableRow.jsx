import React from "react";

const TableRow = ({user}) => {
    const { name, email} = user
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default TableRow;
