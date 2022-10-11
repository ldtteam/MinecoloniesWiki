import * as React from "react"
import Layout from "./src/components/layouts";
import type { GatsbyBrowser } from "gatsby"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <Layout>{element}</Layout>
}
