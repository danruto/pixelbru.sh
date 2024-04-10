
dev:
	dx serve --port 3001 --hot-reload

tw:
	npx tailwindcss -i ./input.css -o ./public/tailwind.css --watch

t:
	npx tailwindcss -i ./input.css -o ./public/tailwind.css

build:
	rm -rf dist && dx build --release

predeploy: t build
