import React from 'react';
import ReviewIndexItem from './review_index_item';

class Reviews extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let reviews;
        if (this.props.reviews.length > 0){
            reviews = Object.values(this.props.reviews).map(review => <ReviewIndexItem key={review.id} review={review}/>);
        }
        else{
            reviews = '';
        }
        return (
            <div>Reviews
                <ul>
                    {reviews}
                </ul>
            </div>
        )
    }
}

export default Reviews;