import React from 'react';
import {Dropdown, Button} from 'react-materialize';

const DropdownItem = ({name}) =>
  <Dropdown trigger={
    <Button>Drop me!</Button>
  }>
    <p>Test1</p>
    <p>Test2</p>
    <p>Test3</p>
    <p>Test4</p>
  </Dropdown>;

export default DropdownItem;
