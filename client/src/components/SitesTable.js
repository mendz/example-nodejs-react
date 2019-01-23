import React from 'react';
import { getStar, getX } from '../utils/getEmojis'

const SitesTable = ({ sites }) => (
  <table style={{ width: '100%' }}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Site</th>
        <th>Stared</th>
        <th>Created</th>
      </tr>
    </thead>
    <tbody>
      {sites.map(site => (
        <tr key={site._id}>
          <td>{site.name}</td>
          <td>{site.url}</td>
          <td>{site.stared ? getStar() : getX()}</td>
          <td>{site.created}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default SitesTable;