import { graphql } from "gatsby"
import { PageProps } from "gatsby"
import BuildingLayout from "../../../components/layouts/wiki/building"
import { BuildingName } from "../../../data/building"

export default function BuildingTemplate({ data }: PageProps<Queries.BuildingTemplateQuery>) {
  const building = data.markdownRemark?.frontmatter?.building ?? "" as BuildingName;
  const html = data.markdownRemark?.html ?? "";

  return (
    <BuildingLayout building={building}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BuildingLayout>
  )
}

export const pageQuery = graphql`
  query BuildingTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        building
      }
    }
  }
`