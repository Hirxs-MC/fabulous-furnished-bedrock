import os

# Function to get relative path while preserving some directory structure
def custom_relpath(path, start):
    # Get the relative path
    relpath = os.path.relpath(path, start)
    # Split the relative path into parts
    parts = relpath.split(os.path.sep)
    # Join parts, but keep only the first directory and the filename
    return os.path.join(parts[0], *parts[2:]) if len(parts) > 2 else relpath

# Get MODNAME input from user
mod_name = input("Enter MODNAME: ").strip()

# Define input and output folder paths
input_folder = "C:/Users/ale_y/AppData/Local/com.bridge.dev/bridge/projects/Nature's Journey/BP/input"
output_file_path = "C:/Users/ale_y/AppData/Local/com.bridge.dev/bridge/projects/Nature's Journey/BP/input/en_US.lang"
list_file_path = os.path.join(input_folder, "list.txt")

# Initialize a list to store all filenames
all_filenames = []

# Recursively walk through the input folder and its subfolders
for root, _, files in os.walk(input_folder):
    for filename in files:
        # Check if the file ends with .json
        if filename.endswith('.json'):
            # Get the full path of the file
            file_path = os.path.join(root, filename)
            # Get the relative path of the file using custom_relpath
            relative_path = custom_relpath(file_path, input_folder)
            # Remove file extensions from filenames
            filename_without_extension = os.path.splitext(relative_path)[0]
            all_filenames.append(filename_without_extension)

# Write filenames to the list file
with open(list_file_path, "w") as list_file:
    list_file.write('\n'.join(all_filenames))

# Open input list file and output file
with open(list_file_path) as f:
    with open(output_file_path, "w") as outfile:
        for line in f:
            line = line.strip()
            
            # Determine the type (block, item, entity) and extract the name
            if line.startswith("blocks\\"):
                type_prefix = "tile"
                name = line[len("blocks\\"):]  # Extract the name after "blocks\"
            elif line.startswith("entities\\"):
                type_prefix = "entity"
                name = line[len("entities\\"):]  # Extract the name after "entities\"
            elif line.startswith("items\\"):
                type_prefix = "item"
                name = line[len("items\\"):]  # Extract the name after "items\"
            else:
                continue  # Skip lines that don't match expected prefixes
            
            # Capitalize the name appropriately
            capitalized_name = ' '.join(word.capitalize() for word in name.split('_'))
            
            # Generate the output line
            if type_prefix == "entity":
                # Special case for entity, which also needs a spawn egg item entry
                entity_line = "{type}.{modname}:{name}.name={capitalized_name}".format(
                    type=type_prefix, modname=mod_name, name=name, capitalized_name=capitalized_name
                )
                spawn_egg_line = "item.spawn_egg.{type}.{modname}:{name}.name=Spawn {capitalized_name}".format(
                    type=type_prefix, modname=mod_name, name=name, capitalized_name=capitalized_name
                )
                outfile.write(entity_line + "\n" + spawn_egg_line + "\n")
            else:
                # Normal case for block and item
                line = "{type}.{modname}:{name}.name={capitalized_name}".format(
                    type=type_prefix, modname=mod_name, name=name, capitalized_name=capitalized_name
                )
                outfile.write(line + "\n")

print("en_US created!")
