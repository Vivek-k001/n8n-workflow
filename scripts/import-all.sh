echo "Importing all workflows from /workflows folder..."

for file in workflows/*.json; do
    echo "Importing: $file"
    n8n import:workflow --input="$file"
done

echo "Done!"
