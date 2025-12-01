export const getRandomBlobClass = () => {
  const points = [];
  const numPoints = 10 + Math.floor(Math.random() * 6); // 10–15 points for nice blobs

  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2;
    const radius = 35 + Math.random() * 15; // Safe range: stays inside bounds
    let x = 50 + radius * Math.cos(angle);
    let y = 50 + radius * Math.sin(angle);

    // Clamp to avoid any edge issues
    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));

    points.push(`${x.toFixed(1)}% ${y.toFixed(1)}%`);
  }

  // Close the shape
  points.push(points[0]);

  // Create polygon string with spaces, then replace spaces with _
  const polygon = `polygon(${points.join(", ")})`;
  const tailwindValue = polygon.replace(/ /g, "_");

  return `[clip-path:${tailwindValue}]`;
};
