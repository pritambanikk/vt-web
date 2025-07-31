"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

interface HeroBackgroundProps {
  className?: string;
  variant?: "legal" | "default";
}

// Function to generate diverse progressive grid patterns that start from different areas
function generateDiverseProgressiveSquares(gridWidth: number, gridHeight: number, stage: number): Array<[x: number, y: number]> {
  const squares: Array<[x: number, y: number]> = [];
  const maxStages = 4;
  const currentStage = stage % maxStages;
  
  // Define diverse starting patterns for each stage
  const patterns = {
    0: () => {
      // Stage 0: Start from center and expand outward
      const centerSquares = [];
      const centerX = Math.floor(gridWidth / 2);
      const centerY = Math.floor(gridHeight / 2);
      
      // Center cross
      for (let i = -1; i <= 1; i++) {
        centerSquares.push([centerX + i, centerY], [centerX, centerY + i]);
      }
      // Center square
      centerSquares.push([centerX - 1, centerY - 1], [centerX + 1, centerY - 1], [centerX - 1, centerY + 1], [centerX + 1, centerY + 1]);
      
      return centerSquares.filter(([x, y]) => x >= 0 && x < gridWidth && y >= 0 && y < gridHeight);
    },
    1: () => {
      // Stage 1: Expand from center to edges with diagonal connections
      const expansionSquares = [];
      const centerX = Math.floor(gridWidth / 2);
      const centerY = Math.floor(gridHeight / 2);
      
      // Diagonal lines from center to corners
      for (let i = 1; i <= Math.min(centerX, centerY); i++) {
        expansionSquares.push([centerX + i, centerY + i], [centerX - i, centerY - i], [centerX + i, centerY - i], [centerX - i, centerY + i]);
      }
      
      // Horizontal and vertical expansion
      for (let i = 2; i <= Math.max(centerX, centerY); i += 2) {
        if (centerX + i < gridWidth) expansionSquares.push([centerX + i, centerY]);
        if (centerX - i >= 0) expansionSquares.push([centerX - i, centerY]);
        if (centerY + i < gridHeight) expansionSquares.push([centerX, centerY + i]);
        if (centerY - i >= 0) expansionSquares.push([centerX, centerY - i]);
      }
      
      return expansionSquares.filter(([x, y]) => x >= 0 && x < gridWidth && y >= 0 && y < gridHeight);
    },
    2: () => {
      // Stage 2: Fill corners and create border patterns
      const cornerSquares = [];
      
      // Corner clusters
      const cornerClusters = [
        // Top-left cluster
        [[0, 0], [1, 0], [0, 1], [1, 1], [2, 0], [0, 2]],
        // Top-right cluster
        [[gridWidth - 1, 0], [gridWidth - 2, 0], [gridWidth - 1, 1], [gridWidth - 2, 1], [gridWidth - 3, 0], [gridWidth - 1, 2]],
        // Bottom-left cluster
        [[0, gridHeight - 1], [1, gridHeight - 1], [0, gridHeight - 2], [1, gridHeight - 2], [2, gridHeight - 1], [0, gridHeight - 3]],
        // Bottom-right cluster
        [[gridWidth - 1, gridHeight - 1], [gridWidth - 2, gridHeight - 1], [gridWidth - 1, gridHeight - 2], [gridWidth - 2, gridHeight - 2], [gridWidth - 3, gridHeight - 1], [gridWidth - 1, gridHeight - 3]]
      ];
      
      cornerClusters.forEach(cluster => {
        cornerSquares.push(...cluster);
      });
      
      // Scattered border points
      for (let i = 3; i < gridWidth - 3; i += 3) {
        cornerSquares.push([i, 0], [i, gridHeight - 1]);
      }
      for (let i = 3; i < gridHeight - 3; i += 3) {
        cornerSquares.push([0, i], [gridWidth - 1, i]);
      }
      
      return cornerSquares.filter(([x, y]) => x >= 0 && x < gridWidth && y >= 0 && y < gridHeight);
    },
    3: () => {
      // Stage 3: Fill remaining spaces in a wave-like pattern from different starting points
      const fillSquares = [];
      const startingPoints = [
        [Math.floor(gridWidth / 4), Math.floor(gridHeight / 4)],
        [Math.floor(3 * gridWidth / 4), Math.floor(gridHeight / 4)],
        [Math.floor(gridWidth / 4), Math.floor(3 * gridHeight / 4)],
        [Math.floor(3 * gridWidth / 4), Math.floor(3 * gridHeight / 4)]
      ];
      
      startingPoints.forEach(([startX, startY]) => {
        // Create wave-like patterns from each starting point
        for (let radius = 1; radius <= 3; radius++) {
          for (let angle = 0; angle < 8; angle++) {
            const x = startX + Math.round(radius * Math.cos(angle * Math.PI / 4));
            const y = startY + Math.round(radius * Math.sin(angle * Math.PI / 4));
            fillSquares.push([x, y]);
          }
        }
      });
      
      // Add some random scattered points for variety
      for (let i = 0; i < 8; i++) {
        const x = Math.floor(Math.random() * gridWidth);
        const y = Math.floor(Math.random() * gridHeight);
        fillSquares.push([x, y]);
      }
      
      return fillSquares.filter(([x, y]) => x >= 0 && x < gridWidth && y >= 0 && y < gridHeight);
    }
  };
  
  // Get squares for current stage and all previous stages
  for (let i = 0; i <= currentStage; i++) {
    const stageSquares = patterns[i as keyof typeof patterns]();
    squares.push(...stageSquares as Array<[x: number, y: number]>);
  }
  
  // Remove duplicates
  const uniqueSquares = squares.filter((square, index, self) => 
    index === self.findIndex(s => s[0] === square[0] && s[1] === square[1])
  );
  
  return uniqueSquares;
}

function HeroBackground({ className, variant = "legal" }: HeroBackgroundProps) {
  const [currentPattern, setCurrentPattern] = useState(0);
  
  // Generate diverse progressive pattern variations
  const primaryPatterns = [
    generateDiverseProgressiveSquares(20, 15, 0),
    generateDiverseProgressiveSquares(20, 15, 1),
    generateDiverseProgressiveSquares(20, 15, 2),
    generateDiverseProgressiveSquares(20, 15, 3),
  ];
  
  const secondaryPatterns = [
    generateDiverseProgressiveSquares(15, 10, 0),
    generateDiverseProgressiveSquares(15, 10, 1),
    generateDiverseProgressiveSquares(15, 10, 2),
    generateDiverseProgressiveSquares(15, 10, 3),
  ];
  
  const defaultPatterns = [
    generateDiverseProgressiveSquares(12, 8, 0),
    generateDiverseProgressiveSquares(12, 8, 1),
    generateDiverseProgressiveSquares(12, 8, 2),
    generateDiverseProgressiveSquares(12, 8, 3),
  ];

  // Change pattern every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (variant === "legal") {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        {/* Primary grid pattern with smooth transitions */}
        <div className="transition-opacity duration-1000 ease-in-out">
          <GridPattern
            key={`primary-${currentPattern}`}
            width={40}
            height={40}
            x={-1}
            y={-1}
            squares={primaryPatterns[currentPattern]}
            className={cn(
              "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-20%] h-[140%] skew-y-6",
              "fill-primary/30 stroke-primary/40",
              "transition-all duration-1000 ease-in-out"
            )}
          />
        </div>
        
        {/* Secondary subtle pattern with smooth transitions */}
        <div className="transition-opacity duration-1000 ease-in-out">
          <GridPattern
            key={`secondary-${currentPattern}`}
            width={60}
            height={60}
            x={-1}
            y={-1}
            strokeDasharray="2 4"
            squares={secondaryPatterns[currentPattern]}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
              "absolute inset-0",
              "fill-muted/25 stroke-muted/35",
              "transition-all duration-1000 ease-in-out"
            )}
          />
        </div>
        
        {/* Frosted glass blur effect for better text readability */}
        <div className="absolute inset-0 backdrop-blur-sm bg-background/20" />
        
        {/* Gradient overlay - reduced opacity to show more of the pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/10 to-background/30" />
      </div>
    );
  }

  // Default variant with diverse progressive squares and transitions
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="transition-opacity duration-1000 ease-in-out">
        <GridPattern
          key={`default-${currentPattern}`}
          width={30}
          height={30}
          x={-1}
          y={-1}
          squares={defaultPatterns[currentPattern]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "fill-muted/40 stroke-muted/50",
            "transition-all duration-1000 ease-in-out"
          )}
        />
      </div>
      
      {/* Frosted glass blur effect for better text readability */}
      <div className="absolute inset-0 backdrop-blur-sm bg-background/20" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/20 to-background/50" />
    </div>
  );
}

export { HeroBackground }; 