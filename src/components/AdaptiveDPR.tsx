import { useThree } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import { useEffect,  useState } from "react";

function AdaptiveDPR() {
  const { setDpr } = useThree();
  const [factor, setFactor] = useState(1);

  useEffect(() => {
    setDpr(window.devicePixelRatio * factor);
  }, [factor]);

  return (
    <PerformanceMonitor
      onDecline={() => setFactor(0.5)}
      onIncline={() => setFactor(1)}
      onFallback={() => {
        console.warn("Fallback triggered — locking to low quality");
        setFactor(0.5);
      }}
      flipflops={3}
      onChange={({ factor }) => {
        setFactor(0.5 + 0.5 * factor); // mượt hơn
      }}
    />
  );
}

export default AdaptiveDPR;