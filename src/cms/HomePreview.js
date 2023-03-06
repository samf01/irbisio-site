import loadable from '@loadable/component'

const HomeTemplate = loadable(() => import('./HomeTemplate.js'))

const HomePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return <HomeTemplate data={data} />
}

export default HomePreview
