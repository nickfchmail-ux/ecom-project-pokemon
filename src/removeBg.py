from rembg import remove
from PIL import Image

# Define input and output paths
input_path = "input.jpg"  # Replace with your input image file
output_path = "output.png" # The output will be a PNG with transparency

# Open the input image
with open(input_path, "rb") as input_file:
    input_data = input_file.read()

# Remove the background
output_data = remove(input_data)

# Save the output image
with open(output_path, "wb") as output_file:
    output_file.write(output_data)

print(f"Background removed! Saved to {output_path}")

# Optional: Display the output image
# Image.open(output_path).show()
