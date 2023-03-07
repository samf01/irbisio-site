//make sure you aren't SSR.

export function useAdmin() {
  //make sure we aren't SSR...
  const isBrowser = () => typeof window !== 'undefined'
  //Creat a test for CMS previews, need to remove GatsbyImage
  if (isBrowser()) return window.location.href.indexOf('admin') > -1
}
