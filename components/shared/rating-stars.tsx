import { Star } from "lucide-react";

export default function RatingStars({ rating }: { rating: number }) {
  const totalStars = 5;

  return (
    <div className="flex items-center gap-1">
      {[...Array(totalStars)].map((_, i) => {
        const starValue = i + 1;

        return (
          <div key={i} className="relative">
            <Star className="w-6 h-6 text-gray-300" />
            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{
                width:
                  rating >= starValue
                    ? "100%"
                    : rating > i
                      ? `${(rating - i) * 100}%`
                      : "0%",
              }}
            >
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
