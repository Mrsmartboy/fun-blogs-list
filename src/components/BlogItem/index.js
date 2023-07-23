import {BlogItemContainer,BlogTitleContainer,Title,Publish,Description} from './styled'

const BlogItem =(props)=>{
    const {eachItem}= props
    const {title,description,publishedDate} = eachItem

    return(
        <BlogItemContainer>
          <BlogTitleContainer>
            <Title>{title}</Title>
            <Publish>{publishedDate}</Publish>
          </BlogTitleContainer>
          <Description>{description}</Description>
        </BlogItemContainer>
    )

}

export default BlogItem