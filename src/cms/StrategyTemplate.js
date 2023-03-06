import React from 'react'
import GridContent from '../components/UI/grid-content'

import valueLogo from '../../static/assets/value-fund-logo.svg'
import growthLogo from '../../static/assets/growth-fund-logo.svg'
import valueMark from '../../static/assets/value-fund.svg'
import growthMark from '../../static/assets/growth-fund.svg'
import { SideShape } from '../components/graphics/landing-shape'

const StrategyTemplate = ({ data }) => {
  const { funds, investors, investing, esg } = data
  const fund = [
    {
      brand: valueMark,
      logo: valueLogo,
      sub_heading:
        'the fund introduction sub-heading or explanation would go here. To edit, go to the main menu and click on "funds"',
      title: 'Value Fund',
    },
    {
      brand: growthMark,
      logo: growthLogo,
      sub_heading:
        'the fund introduction sub-heading or explanation would go here. To edit, go to the main menu and click on "funds"',
      title: 'growth Fund',
    },
  ]

  return (
    <>
      <GridContent
        id="investing"
        layout="--center-4"
        mode={investing.mode}
        background={investing.image}
      >
        <div>
          <h4>{investing.section}</h4>
          <h1>{investing.title}</h1>
          <br />
          <p>{investing.body}</p>
        </div>
        <div className="investing-principles">
          {investing.principles.map((principle, i) => {
            return (
              <div
                key={i}
                id={`investing-principle__${i + 1}`}
                style={{ alignSelf: i % 2 === 1 && 'flex-end', width: '50%' }}
              >
                <div>
                  <h2>{principle.title}</h2>
                </div>
                <div>
                  <p>{principle.body}</p>
                </div>
              </div>
            )
          })}
        </div>
        <p>{investing.footer}</p>
        <SideShape />
      </GridContent>

      <GridContent
        id="funds"
        layout="--center-6 mt-auto"
        mode={funds.mode}
        background={funds.image}
        hide="true"
      >
        <h4>{funds.section}</h4>
        <h6>{funds.heading}</h6>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            columnGap: '150px',
          }}
        >
          {fund.map((node, i) => {
            const { brand, logo, sub_heading, title } = node

            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3rem',
                }}
              >
                <img src={brand} alt={title} style={{ width: '100%' }} />

                <img
                  src={logo}
                  className="mock-button"
                  alt={title}
                  style={{ height: '230px', margin: '0 auto' }}
                />

                <p>{sub_heading}</p>
                <a
                  href="/"
                  style={{ alignSelf: 'flex-end', marginTop: 'auto' }}
                >
                  Learn More
                </a>
              </div>
            )
          })}
        </div>
      </GridContent>

      <GridContent
        id="investors"
        layout="--center-6"
        hide="true"
        mode={investors.mode}
        background={investors.image}
      >
        <h4>{investors.section}</h4>
        <div dangerouslySetInnerHTML={{ __html: investors.body }} />
        <div>
          <p>Our investors include:</p>
          {investors.details.map(investor => {
            return (
              <div key={investor.name} className="investor-list">
                {investor.logo ? (
                  <img src={investor.logo} alt={investor.name} />
                ) : (
                  <h1>{investor.name}</h1>
                )}
                <p className="markdown">{investor.body}</p>
                <a
                  href={investor.button.link}
                  style={{ display: 'block', textAlign: 'end' }}
                >
                  {investor.button.label}
                </a>
              </div>
            )
          })}
        </div>
      </GridContent>

      <GridContent
        id="esg"
        layout="--center-6 margin-none"
        mode={esg.mode}
        hide="true"
        background={esg.image}
      >
        <h4>{esg.section}</h4>
        <h3>{esg.heading}</h3>
        <div className="esg-goals">
          {esg.goals.map(goal => {
            return (
              <img
                src={goal.logo}
                alt={goal.name}
                key={goal.name}
                className="mock-button"
              />
            )
          })}
        </div>
      </GridContent>
    </>
  )
}

export default StrategyTemplate
