import { useState } from 'react';

type RatingStarsProps = {
    onChange: (rating: number) => void;
};

function RatingStars({ onChange }: RatingStarsProps) {
    const [rating, setRating] = useState(0);

    const handleClick = (selectedRating: number) => {
        setRating(selectedRating);
        onChange(selectedRating);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const selected = i <= rating;
            stars.push(
                <span
                    key={i}
                    onClick={() => handleClick(i)}
                    style={{ color: selected ? 'gold' : 'grey', cursor: 'pointer' }}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return <div className='inline-flex gap-1'>{renderStars()}</div>;
}

export default RatingStars;