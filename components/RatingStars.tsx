import { useState } from 'react';

type RatingStarsProps = {
    initialRating: number,
    allowSelection: boolean,
    onChange: (rating: number) => void;
};

function RatingStars({ initialRating, allowSelection, onChange }: RatingStarsProps) {
    const [rating, setRating] = useState<number>(initialRating);

    const handleClick = (selectedRating: number) => {
        setRating(selectedRating);
        onChange(selectedRating);
    };

    const className = allowSelection ? 'cursor-pointer' : 'cursor-default pointer-events-none';
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const selected = i <= rating;
            stars.push(
                <span
                    key={i}
                    onClick={() => handleClick(i)}
                    style={{ color: selected ? 'gold' : 'grey', cursor: 'pointer' }}
                    className={className}
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