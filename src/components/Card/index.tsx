import * as React from 'react';

import { Card as OriginalCard } from 'antd';

const Card: any = (props: any) => {
  return <OriginalCard {...props} />;
};

Card.Meta = OriginalCard.Meta;

export default Card;
