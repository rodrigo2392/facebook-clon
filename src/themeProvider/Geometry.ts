import {rect} from '@shopify/react-native-skia';

export const inflate = (rct: any, amount: number) =>
  rect(
    rct.x - amount,
    rct.y - amount,
    rct.width + amount * 2,
    rct.height + amount * 2,
  );

export const deflate = (rct: any, amount: number) =>
  rect(
    rct.x + amount,
    rct.y + amount,
    rct.width - amount * 2,
    rct.height - amount * 2,
  );
