import {} from "react";
import { CSSProp } from "styled-components";

declare module "react" {
  // see: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/46250250fba7d8fd970850025bc373dea7771493/types/styled-components/cssprop.d.ts#L4-L19
  interface Attributes {
    css?: CSSProp;
  }
}
