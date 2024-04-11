#![allow(non_snake_case)]

use dioxus::prelude::*;

mod components;
use crate::components::landing::Landing;

use log::LevelFilter;

const _TAILWIND_URL: &str = manganis::mg!(file("public/tailwind.css"));

#[derive(Clone, Routable, Debug, PartialEq, serde::Serialize, serde::Deserialize)]
enum Route {
    #[route("/")]
    Landing {},
}

fn main() {
    // Init debug
    dioxus_logger::init(LevelFilter::Info).expect("failed to init logger");
    // console_error_panic_hook::set_once();

    launch(App);
}

fn App() -> Element {
    rsx! {
        Router::<Route> {}
    }
}
