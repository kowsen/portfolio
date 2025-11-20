#!/bin/bash

# Check if input file is provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <input_file> <output_file>"
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_FILE="$2"
MODEL="gemma3:12b"

# Check if input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: Input file '$INPUT_FILE' not found."
    exit 1
fi

# Clear the output file if it exists
> "$OUTPUT_FILE"

echo "Starting translation..."

# Loop through each line of the input file
while IFS= read -r word || [ -n "$word" ]; do
    # Skip empty lines or lines with only whitespace
    if [[ -z "${word// }" ]]; then
        continue
    fi

    echo "Processing: $word"

    # Construct the Prompt
    PROMPT="You are an Emoji Translator. Your only task is to convert the input word into the single emoji that best represents it. Do not provide explanations.

Examples:
Input: Fire
Output: 🔥
Input: Happy
Output: 😊
Input: Coding
Output: 💻
Input: Mystery
Output: 🕵️

Input: $word
Output:"

    # --- THE FIX IS HERE ---
    # We add ' < /dev/null' so ollama doesn't consume the input file
    EMOJI=$(ollama run "$MODEL" "$PROMPT" < /dev/null)

    # Clean up output (remove whitespace)
    CLEAN_EMOJI=$(echo "$EMOJI" | tr -d '[:space:]')

    # Write to output file
    {
        echo "Input: $word"
        echo "Output: $CLEAN_EMOJI"
        echo "" 
    } >> "$OUTPUT_FILE"

done < "$INPUT_FILE"

echo "--------------------------------"
echo "Done! Results saved to $OUTPUT_FILE"