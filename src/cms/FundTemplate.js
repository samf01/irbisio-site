import React from 'react'

import GridContent from '../components/UI/grid-content'
import { AnimatedTextBlock } from '../components/UI/news/animations'

const FundTemplate = ({ data, brand, images }) => {
  const { title, page_1, page_2, page_3 } = data

  return (
    <>
      <GridContent
        layout="--center-4"
        mode="dark-mode"
        background={images.page_1}
      >
        <h4>{page_1.section}</h4>
        <img src={brand} alt={title} style={{ width: '100%' }} />
        <h6>{page_1.sub_heading}</h6>
        <h4>opportunity</h4>
        <p>{page_1.opportunity}</p>
      </GridContent>
      <GridContent
        layout="--center-6"
        mode="light-mode"
        hide="true"
        background={images.page_2}
      >
        {page_2.stats.map((stat, i) => {
          return (
            <div
              key={stat.name}
              style={{ alignSelf: i % 2 === 1 && 'flex-end' }}
            >
              <AnimatedTextBlock direction="-80px">
                <h4 style={{ margin: '0' }}>{stat.name}</h4>
              </AnimatedTextBlock>
              <AnimatedTextBlock direction="120px">
                <h1 className="h0">{stat.main}</h1>
              </AnimatedTextBlock>
              <AnimatedTextBlock direction="-120px">
                <p>
                  <small>{stat.subscript}</small>
                </p>
              </AnimatedTextBlock>
            </div>
          )
        })}
      </GridContent>
      <GridContent
        layout="--center-4"
        mode="dark-mode"
        background={images.page_3}
      >
        {page_3.bullets.map(node => {
          return (
            <div key={node.title}>
              <h4>{node.title}</h4>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  flexDirection:
                    node.order === 'last' ? 'column-reverse' : 'column',
                }}
              >
                {node.statement && (
                  <p style={{ margin: '12px 0' }}>{node.statement}</p>
                )}
                <ul>
                  {node.list.map((item, i) => {
                    return <li key={i}>{item.point}</li>
                  })}
                </ul>
              </div>
            </div>
          )
        })}
        <a href="/strategy/#funds" className="mock-button">
          Back to Funds
        </a>
      </GridContent>
    </>
  )
}

export default FundTemplate
