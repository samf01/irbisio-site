import CMS from 'netlify-cms-app'
import './cms.css'
import '../components/Layout.css'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

CMS.registerBackend('local', {})

CMS.registerPreviewStyle('./cms.css')

import '../components/layout.css'
import './cms.css'

import BlogPreview from './BlogPreview'
import FooterPreview from './FooterPreview'
import HomePreview from './HomePreview'
import AboutPreview from './AboutPreview'
import StrategyPreview from './StrategyPreview'
//Use loadable-component to stop normal-users from downloading the template pages.

CMS.registerPreviewTemplate('posts', BlogPreview)
CMS.registerPreviewTemplate('footer', FooterPreview)
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('about', AboutPreview)
CMS.registerPreviewTemplate('strategy', StrategyPreview)
