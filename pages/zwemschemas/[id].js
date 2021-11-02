import { Fragment } from 'react'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}


export default function Zwemschema({ postData }) {
    return (
      <Fragment>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Fragment>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
