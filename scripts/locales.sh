# shellcheck disable=SC2148

# extract messages
poetry run pybabel extract --input-dirs=. -o locales/messages.pot

# update localized messages
for lang in en ru; do
  poetry run pybabel update -i locales/messages.pot -d locales -D messages -l $lang
done

# Compile translations
poetry run pybabel compile -d locales -D messages