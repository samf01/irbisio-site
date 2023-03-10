import CMS from 'netlify-cms-app'
import './cms.css'
//For the fix to the markdown box cursor jump issue see ./static/admin/admin.css
import './cms-utils'
import '../components/Layout.css'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

CMS.registerBackend('local', {})

CMS.registerPreviewStyle('./cms.css')
//Importing CSS directly gives a pure.css duplication error, so I @import them into cms.css
// import '../components/layout.css'
// import './cms.css'

import BlogPreview from './BlogPreview'
import CasePreview from './CasePreview'
import FundPreview from './FundPreview'
import FooterPreview from './FooterPreview'
import HomePreview from './HomePreview'
import AboutPreview from './AboutPreview'
import StrategyPreview from './StrategyPreview'
//Use loadable-component to stop normal-users from downloading the template pages.

CMS.registerPreviewTemplate('posts', BlogPreview)
CMS.registerPreviewTemplate('cases', CasePreview)
CMS.registerPreviewTemplate('funds', FundPreview)
CMS.registerPreviewTemplate('footer', FooterPreview)
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('about', AboutPreview)
CMS.registerPreviewTemplate('strategy', StrategyPreview)
