
dev_web:
	dx serve --port 3001 --hot-reload

build_web:
	rm -rf dist && dx build --release

dev:
	cargo r -r

dev_bg:
	cargo r -r &
	sleep 30

kill_dev_bg:
	ps aux | rg target/release/pixelbrush-portfolio | awk 'NR==1{print $$2}' | xargs kill -9

tw:
	npx tailwindcss -i ./input.css -o ./public/tailwind.css --watch

t:
	npx tailwindcss -i ./input.css -o ./public/tailwind.css

static_save_file:
	rm index.html 2> /dev/null || true
	rm public.zip 2> /dev/null || true
	xh :3000 >> index.html
	zip -r public.zip ./public ./index.html

predeploy_web: t build_web

predeploy: t dev_bg static_save_file kill_dev_bg
