import React from "react";
import "@blueprintjs/table/lib/css/table.css";
import { Table2, Column, Cell } from "@blueprintjs/table";

const DataTable: React.FC = () => (
  <Table2 numRows={30}>
    <Column name="No" cellRenderer={i => <Cell>{i + 1}</Cell>} />
    <Column name="날짜" cellRenderer={i => <Cell>2024-08-05</Cell>} />
    <Column name="코일 ID" cellRenderer={i => <Cell>+923335261279</Cell>} />
    <Column name="폭" cellRenderer={i => <Cell>Testpak@giro.com</Cell>} />
    <Column name="두께" cellRenderer={i => <Cell>Panic Alarm</Cell>} />
    <Column name="Info1" cellRenderer={i => <Cell>Free Trial</Cell>} />
    <Column name="Info2" cellRenderer={i => <Cell>Close</Cell>} />
  </Table2>
);

export default DataTable;
