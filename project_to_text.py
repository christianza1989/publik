import os

def project_to_text(output_filename="project_output.txt", exclude_dirs=None, exclude_files=None, include_extensions=None, include_root_files=None):
    if exclude_dirs is None:
        exclude_dirs = ["node_modules", ".git", "__pycache__", "dist", "build", ".next"]
    if exclude_files is None:
        exclude_files = ["package-lock.json", output_filename, "project_to_text.py"]
    if include_extensions is None:
        include_extensions = [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".mjs", ".cjs", ".md"]
    if include_root_files is None:
        include_root_files = ["package.json", "tsconfig.json", "postcss.config.mjs", "components.json", "next-env.d.ts"]

    with open(output_filename, "w", encoding="utf-8") as outfile:
        for root, dirs, files in os.walk("."):
            # Modify dirs in-place to exclude directories
            dirs[:] = [d for d in dirs if d not in exclude_dirs]

            for filename in files:
                filepath = os.path.join(root, filename)
                
                # Check if it's a root file to be included
                is_root_file = os.path.dirname(filepath) == "." and filename in include_root_files

                # Check if it's a file with an allowed extension and not explicitly excluded
                is_included_extension = any(filename.endswith(ext) for ext in include_extensions)
                
                if (is_root_file or is_included_extension) and filename not in exclude_files:
                    try:
                        with open(filepath, "r", encoding="utf-8") as infile:
                            outfile.write(f"--- FILE: {filepath} ---\n")
                            outfile.write(infile.read())
                            outfile.write("\n\n")
                    except Exception as e:
                        outfile.write(f"--- ERROR READING FILE: {filepath} ---\n")
                        outfile.write(f"Error: {e}\n\n")

    print(f"Project content written to {output_filename}")

if __name__ == "__main__":
    project_to_text()
