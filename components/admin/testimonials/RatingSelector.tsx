import React from "react";
import { Star } from "lucide-react";

interface RatingSelectorProps {
  value: number;
  onChange?: (rating: number) => void;
  disabled?: boolean;
}

export default function RatingSelector({ value, onChange, disabled }: RatingSelectorProps) {
  const isReadOnly = !onChange;

  const handleClick = (rating: number) => {
    if (isReadOnly || disabled) return;
    onChange(rating);
  };

  return (
    <div className="flex items-center gap-1 select-none">
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = star <= value;
        return (
          <button
            key={star}
            type="button"
            disabled={isReadOnly || disabled}
            onClick={() => handleClick(star)}
            className={`transition-all ${
              isReadOnly 
                ? "cursor-default text-slate-200" 
                : "cursor-pointer hover:scale-110 disabled:opacity-40 disabled:pointer-events-none"
            }`}
          >
            <Star 
              className={`h-4.5 w-4.5 stroke-1.5 ${
                isActive 
                  ? "fill-amber-400 text-amber-400" 
                  : "text-slate-300"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
