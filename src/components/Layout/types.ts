import { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

export enum PagesPaths {
  HOME = "/home",
  WEATHERS = "/weathers",
}
