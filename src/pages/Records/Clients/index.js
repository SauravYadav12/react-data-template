import React from 'react';
import { clientsColumn } from './Column';
import MOCK from './Mock';
import DefaultTable from 'pages/dashboard/DefaultTable';

function Clients() {
  return <DefaultTable rowData={MOCK} columns={clientsColumn} />;
}

export default Clients;
