export default function RatingStars({ rating }: { rating: number }) {
  const totalStars = 5;

  return (
    <div className="flex items-center gap-1">
      {[...Array(totalStars)].map((_, i) => {
        const starValue = i + 1;

        return (
          <div key={i} className="relative">
            <div className="text-gray-300 text-xl">★</div>
            <div
              className="absolute top-0 left-0 overflow-hidden text-yellow-400 text-xl"
              style={{
                width:
                  rating >= starValue
                    ? "100%"
                    : rating > i
                      ? `${(rating - i) * 100}%`
                      : "0%",
              }}
            >
              ★
            </div>
          </div>
        );
      })}
    </div>
  );
}
