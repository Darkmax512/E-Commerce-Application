import React from "react";
import DataTableBase from "./table/DataTableBase";

// documentation : https://react-data-table-component.netlify.app/

const columns = [
  {
    name: "order",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "status",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "zip",
    selector: (row) => row.zip,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    status: "shipped",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

function Orders() {
  return (
    <div className=" mx-auto min-h-screen max-w-2xl px-4 py-8 sm:px-6 md:max-w-7xl lg:px-8">
      <DataTableBase
        columns={columns}
        data={data}
        progressPending={false}
        selectableRows
      />
    </div>
  );
}

export default Orders;
