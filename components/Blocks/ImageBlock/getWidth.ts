import { ImageWidthOptions } from "../../../screens/Blog/BlogPage/types"

export default (width?: ImageWidthOptions) => {
    switch(width) {
        case ImageWidthOptions.SMALL: {  return '60%' }
        case ImageWidthOptions.MEDIUM: {  return '80%' }
        case ImageWidthOptions.LARGE: {  return '95%' }
        default: {  return '60%' }
    }
}