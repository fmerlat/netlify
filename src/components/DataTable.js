import React from 'react';
import { Table } from 'reactstrap';

export default function DataTable() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Client</th>
          <th>URL</th>
          <th>Shortlink</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}
      </tbody>
    </Table>
  );
}