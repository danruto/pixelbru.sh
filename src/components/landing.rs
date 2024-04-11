use dioxus::prelude::*;

use crate::components::{contact::Contact, projects::Projects, skills::Skills};

#[component]
pub fn Landing() -> Element {
    rsx! {
        div {
            class: "flex flex-col justify-between min-h-screen text-slate-500 dark:text-slate-400 overflow-x-hidden bg-gradient-to-br from-slate-900 to-slate-950",
            div {
                class: "",
                div {
                    class: "flex flex-col items-center justify-center px-4 py-40 min-h-80 text-slate-300",
                    h1 {
                        class: "font-extrabold font-pixelify text-5xl md:text-8xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-indigo-200/60 to-70% to-indigo-400/80 pb-8",
                        "PIXEL BRUSH"
                    }
                    h4 {
                        class: "text-lg",
                        "Full-stack Software Engineer with 10+ years experience"
                    }
                    h4 {
                        class: "text-lg",
                        "Well equiped to help you from greenfield projects to digital transformations"
                    }
                    a {
                        r#type: "button",
                        class: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-8 py-3 text-center text-large my-4",
                        href: "mailto:contact@pixelbru.sh",
                        "Get in contact"
                    }
                },
                Skills {}
                Projects {}
            },
            span { class: "p-8" },
            div {
                class: "h-12 w-screen flex justify-center items-center pb-4 flex flex-col",
                Contact {},
                p {
                    class: "py-2",
                    "© Pixel Brush Pty. Ltd. 2024"
                },
            }
        }
    }
}
