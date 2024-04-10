use dioxus::prelude::*;

use crate::components::{contact::Contact, skills::Skills};

#[component]
pub fn Landing() -> Element {
    rsx! {
        div {
            class: "flex flex-col justify-between min-h-screen text-slate-500 dark:text-slate-400 bg-slate-900 overflow-x-hidden",
            div {
                class: "",
                div {
                    class: "flex flex-col items-center justify-center px-4 min-h-80 text-slate-300",
                    h1 {
                        class: "font-extrabold text-5xl md:text-8xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-indigo-200/60 to-70% to-indigo-400/80 pb-8",
                        "Pixel Brush"
                    }
                    h4 {
                        class: "text-lg",
                        "Full-stack Software Engineer with 10+ years experience"
                    }
                    h4 {
                        class: "text-lg",
                        "Well equiped to help you from greenfield projects to digital transformations"
                    }
                },
                Skills {}
            },
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
