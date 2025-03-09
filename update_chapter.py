"""
Actualiza los archivos haciendo que, los archivos presente en en Starpath (obsidian)
Se copian a los archivos del repo y se suban a github.

Esto es necesario porque si no recuerda, github es la base de datos.

"""

import os
from shutil import copy as file_copy

SOURCE_PATH = r"C:\Users\Hyvnt\T\Obsidian\Starpath\es"
TARGET_PATH = r"C:\Users\Hyvnt\T\Svelte\starpath\chapters"

files_in_target = os.listdir(TARGET_PATH)

added_files_log = []

for filename in os.listdir(SOURCE_PATH):
    if filename not in files_in_target:

        added_files_log.append(f"[ + ] {filename}")

        print(added_files_log[-1])

        file_copy(f"{SOURCE_PATH}\\{filename}", f"{TARGET_PATH}\\{filename}")
        
os.system("git add .")
os.system(f"git commit -m \"Added: {', '.join(added_files_log)}\"")
os.system("git push")
