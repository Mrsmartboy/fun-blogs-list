import BlogItem from '../BlogItem'
import {BlogListContainer} from './styled'
const BlogList=(props)=>{
    const {blogsList} =props
    return(
       <BlogListContainer>
        {blogsList.map(eachItem=>(
            <BlogItem eachItem={eachItem} key={eachItem.id}/>
        ))}
       </BlogListContainer>
    )
}

export default BlogList