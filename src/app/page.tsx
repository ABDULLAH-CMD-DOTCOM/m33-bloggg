import React from 'react'
import Page2nd from './component/Page2nd'
import About from './about/page'
import Blog from './Blog/page'
import Faq from './faq/page'
import Comment from './component/Comment'
import Contact from './contact/page'
import Herooo from './component/herooo'

const home = () => {
  return (
  <>
<Herooo />
<Page2nd />
<About/>
<Blog />
<Faq />
<Comment />
<Contact />

  </>
  )
}

export default home