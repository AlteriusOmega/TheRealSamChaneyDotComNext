import svgwrite
import os

output_folder = "G:\My Drive\Design and 3D Printing Laser\Laser Cutting Engraving\Lightburn Inkscape Vector Graphics"
output_filename = "geometry_generator_output.svg"
output_path = os.path.join(output_folder, output_filename)
drawing_global = svgwrite.Drawing(output_path)

x=5
y=7
print(f"x*y is {x*y}")