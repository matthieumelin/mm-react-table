# React Table Plugin

A simple plugin for create table for React.js

# Get started

**Requirements**

- React 18.2.0+

**Installation**

- Using npm `npm install @matthieumelin/mm-react-table`
- Using yarn `yarn add @matthieumelin/mm-react-table`

**Usage**

- `datas` (array): a data list
- `attibutes` (array): a list of attributes

_App.js (default)_

```javascript
import React, { useState } from "react";
import Table from "@matthieumelin/mm-react-table";

const App = () => {
  const attributes = [
    {
      name: "First Name",
      value: "firstName",
    },
    {
      name: "Last Name",
      value: "lastName",
    },
    {
      name: "Start Date",
      value: "startDate",
    },
    {
      name: "Department",
      value: "department",
    },
    {
      name: "Date of Birth",
      value: "dateOfBirth",
    },
    {
      name: "Street",
      value: "street",
    },
    {
      name: "City",
      value: "city",
    },
    {
      name: "State",
      value: "state",
    },
    {
      name: "Zip Code",
      value: "zipCode",
    },
  ];
  const [datas, setDatas] = useState([
    {
      id: 1,
      firstName: "Kenneth",
      lastName: "Langenfeld",
      startDate: "2021-04-12",
      department: "Legal",
      dateOfBirth: "1999-06-20",
      street: "561 Edgewood Avenue",
      city: "Fresno",
      state: "CA",
      zipCode: "93704",
    },
    {
      id: 2,
      firstName: "James",
      lastName: "Maclean",
      startDate: "2018-02-30",
      department: "Sales",
      dateOfBirth: "1961-07-13",
      street: "2633 Freshour Circle",
      city: "San Antonio",
      state: "TX",
      zipCode: "78238",
    },
  ]);
  return (
    <div className="App">
      <Table datas={datas} attributes={attributes} />
    </div>
  );
};
export default App;
```
