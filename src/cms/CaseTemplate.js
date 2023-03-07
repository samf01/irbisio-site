import React from 'react'
import { AnimatedStatistic } from '../components/UI/news/animations'
import GridContent from '../components/UI/grid-content'

const CaseTemplate = ({ data, body }) => {
  const { title, stats } = data

  return (
    <>
      <GridContent layout="--center-6" mode="dark-mode" hide="true">
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={{ __html: body }} />

        {stats && //Because there might not be any?
          stats.map((stat, i) => {
            return <AnimatedStatistic stat={stat} key={i} />
          })}
        <a href="/case-studies" className="mock-button">
          Back to Case Studies
        </a>
      </GridContent>
    </>
  )
}

export default CaseTemplate
