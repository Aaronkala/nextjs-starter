import "styled-components";
import type { ThemeShape } from "../styles/themes";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeShape {}
}
