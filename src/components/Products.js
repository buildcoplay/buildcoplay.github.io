import * as Locale from '../strings/index';
import StoryOne from '../components/StoryOne';
import StoryTwo from '../components/StoryTwo';

function Products(image, title, content) {
    return (
        <div id="products" className='Story-container'>
            <h1>{Locale.ProductsHeader}</h1>
            <StoryOne />
            <StoryTwo />
        </div>
    );
}

export default Products;