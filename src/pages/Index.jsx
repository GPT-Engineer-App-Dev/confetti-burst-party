import { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Confetti Celebration!</h1>
      <Button onClick={handleButtonClick} className="px-6 py-3 text-lg">
        Celebrate!
      </Button>
      {showConfetti && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
    </div>
  );
};

export default Index;
