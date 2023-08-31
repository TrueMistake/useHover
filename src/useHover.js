import {useEffect, useRef, useState} from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseover = () => setHovered(true);
  const handleMouseout = () => setHovered(false)

  useEffect(() => {
    const refs = ref.current;
    if (refs) {
      refs.addEventListener('mouseover', handleMouseover);
      refs.addEventListener('mouseout', handleMouseout);

      return () => {
        refs.removeEventListener('mouseover', handleMouseover);
        refs.removeEventListener('mouseout', handleMouseout);
      }
    }
  },[ref.current]);

  return {hovered, ref};
}