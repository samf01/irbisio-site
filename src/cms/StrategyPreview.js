import loadable from '@loadable/component'

const StrategyTemplate = loadable(() => import('./StrategyTemplate.js'))

const StrategyPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return <StrategyTemplate data={data} />
}

export default StrategyPreview
