"""
Actualiza los archivos haciendo que, los archivos presente en en Starpath (obsidian)
Se copian a los archivos del repo y se suban a github.

Esto es necesario porque si no recuerda, github es la base de datos.

"""

import os

SOURCE_PATH = r"C:\Users\Hyvnt\T\Obsidian\Starpath\es"
TARGET_PATH = r"C:\Users\Hyvnt\T\Svelte\starpath\chapters"

files_in_target = os.listdir(TARGET_PATH)

added_files_log = []

for file in os.listdir(SOURCE_PATH):
    if file not in files_in_target:

        added_files_log.append(f"[ + ] {file}")

        print(added_files_log[-1])

        # copy file
        # why use command line? because I feel like it
        with open(f"{TARGET_PATH}\\{file}", "w", encoding="utf-8") as file:
            source_file = open(f"{SOURCE_PATH}\\{file}", "r", encoding="utf-8")
            file.write(source_file.read())
            source_file.close()


os.system("git add .")
os.system(f"git commit -m \"Added: {', '.join(added_files_log)}\"")
os.system("git push")
