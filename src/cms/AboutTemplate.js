import React from 'react'
import GridContent from '../components/UI/grid-content'
import '../components/Layout.css'
import Carousel from '../components/UI/carousel/carousel'

const AboutTemplate = ({ data }) => {
  const { about, team, partners } = data
  return (
    <>
      <GridContent
        id="about"
        layout="--center-4"
        mode={about.mode}
        background={about.image}
      >
        <h4>{about.section}</h4>
        <h1>{about.title}</h1>
        <p className="markdown" style={{ fontSize: '28px', lineHeight: '1' }}>
          {about.sub_title}
        </p>
        <p className="markdown">{about.body}</p>
      </GridContent>

      <GridContent
        id="partners"
        layout="--center-4"
        mode={partners.mode}
        background={partners.image}
      >
        <h4>{partners.section}</h4>
        {partners.details.map((partner, i) => {
          return (
            <div key={i}>
              <img
                src={partner.logo}
                alt={partner.name}
                style={{ width: '100%' }}
              />
              <p className="markdown">{partner.body}</p>
              <a
                href={partner.button.link}
                style={{ display: 'block', textAlign: 'end' }}
              >
                {partner.button.label}
              </a>
            </div>
          )
        })}
      </GridContent>

      <GridContent
        id="team"
        layout="--center-6-offset"
        mode={team.mode}
        background={team.image}
      >
        <h4>{team.section}</h4>
        <Carousel>
          {team.members.map((member, i) => {
            return (
              <li
                className="slide"
                id={`carousel__slide-${i}`}
                tabIndex="0"
                key={i}
              >
                <div className="team-sheet">
                  <div className="team-details">
                    <h1>{member.name}</h1>
                    <h4>{member.title}</h4>
                    <p className="markdown">{member.body}</p>
                  </div>
                  <div>
                    <img src={member.photo} alt={member.name} />
                  </div>
                </div>
              </li>
            )
          })}
        </Carousel>
      </GridContent>
    </>
  )
}

export default AboutTemplate
