import * as React from 'react';

import { Grid as OriginalGrid, Row, Col } from 'antd';

const Grid: any = () => {
  return OriginalGrid;
};

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
