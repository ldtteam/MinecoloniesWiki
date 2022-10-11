import { graphql } from "gatsby"
import { PageProps } from "gatsby"
import BuildingLayout from "../../../components/layouts/wiki/building"

export default function WorkerTemplate({ data }: PageProps<Queries.WorkerTemplateQuery>) {
  return (
    <BuildingLayout building="apiary">
    </BuildingLayout>
  )
}

export const pageQuery = graphql`
  query WorkerTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        worker
      }
    }
  }
`