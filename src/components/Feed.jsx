import React from 'react';
import '../css/feed.css'
import FruitOnFeed from './FruitOnFeed';

const Feed = ({fruits, addToCartClick}) => {
    return ( 
        <div className="grid">
            {fruits.map((fruit) => (
				<FruitOnFeed
                    key={fruit.id}
					fruit={fruit}
                    addToCartClick={() => addToCartClick(fruit.id)}
				/>
			))}
        </div>
     );
}
 
export default Feed;