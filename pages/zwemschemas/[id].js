import { Fragment } from 'react'
import { getAllProductIds, getproductData } from '../../lib/products'

export async function getStaticProps({ params }) {
  const productData = getproductData(params.id)
  return {
    props: {
      productData
    }
  }
}


export default function Zwemschema({ productData }) {
    return (
      <Fragment>
        {productData.title}
        <br />
        {productData.id}
        <br />
        {productData.date}
      </Fragment>
    )
  }

export async function getStaticPaths() {
    const paths = getAllProductIds()
    return {
      paths,
      fallback: false
    }
  }
