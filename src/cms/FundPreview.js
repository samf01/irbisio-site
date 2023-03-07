import React from 'react'
import FundTemplate from './FundTemplate'

const FundPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  //FYI netlifyCMS uses immutable.js so their docsa can be useful!
  const brand = getAsset(entry.getIn(['data', 'page_1']).getIn(['brand']))
  const pageImages = {
    page_1: getAsset(entry.getIn(['data', 'page_1']).getIn(['image'])),
    page_2: getAsset(entry.getIn(['data', 'page_2']).getIn(['image'])),
    page_3: getAsset(entry.getIn(['data', 'page_3']).getIn(['image'])),
  }

  console.log(brand)
  return <FundTemplate data={data} brand={brand} images={pageImages} />
}

export default FundPreview
