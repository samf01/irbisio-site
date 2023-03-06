import loadable from '@loadable/component'

const AboutTemplate = loadable(() => import('./AboutTemplate.js'))

const AboutPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return <AboutTemplate data={data} />
}

export default AboutPreview
