import React from 'react'
import CaseTemplate from './CaseTemplate'
import remarkHTML from 'remark-html'
import { remark } from 'remark'

const toHTML = value => remark().use(remarkHTML).processSync(value).toString()

const CasePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const body = entry.getIn(['data', 'body'])
  const asHTML = toHTML(body)
  return <CaseTemplate data={data} body={asHTML} />
}

export default CasePreview
