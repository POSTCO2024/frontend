import React from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core";

const SearchBar: React.FC = () => (
  <FormGroup
    label="스케줄 ID"
    labelFor="schedule-id-input"
    labelInfo="(required)"
  >
    <InputGroup id="schedule-id-input" placeholder="Enter Schedule ID..." />
  </FormGroup>
);

export default SearchBar;
