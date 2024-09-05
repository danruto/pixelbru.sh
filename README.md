# Website for Pixel Brush
[Pixel Brush Website](https://pixelbru.sh)

# Developing
I use NixOS and nix flakes to manage any dependencies I need.
`nix develop` or via direnv `direnv allow`

## Run the tailwind compiler
`make tw`

## Run the axum server with
`cargo r -r`

## To deploy
Run the server with `make dev`
then in another shell run `make static_save_file` to generate the static html

# License
MIT

If any of this repository was interesting, you may contact me via `contact@pixelbru.sh`
