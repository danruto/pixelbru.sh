use crate::components::icons::{FirefoxIcon, GMailIcon, GithubIcon, LinkedInIcon};
use dioxus::prelude::*;

struct ContactPoint {
    name: String,
    url: String,
    icon: String,
}

#[component]
pub fn Contact() -> Element {
    let contacts = [
        ContactPoint {
            name: "Github".to_string(),
            url: "https://github.com/danruto".to_string(),
            icon: "Github".to_string(),
        },
        ContactPoint {
            name: "Website".to_string(),
            url: "https://pixelbru.sh".to_string(),
            icon: "Firefox".to_string(),
        },
        ContactPoint {
            name: "Email".to_string(),
            url: "mailto:contact@pixelbru.sh".to_string(),
            icon: "Gmail".to_string(),
        },
        ContactPoint {
            name: "LinkedIn".to_string(),
            url: "https://au.linkedin.com/in/dannysok".to_string(),
            icon: "LinkedIn".to_string(),
        },
    ];

    rsx! {
        div {
            class: "flex items-center justify-center",
            for contact in contacts {
                a {
                    class: "px-2 bg-clip-text text-indigo-400 hover:text-indigo-800",
                    role: "button",
                    title: contact.name.clone(),
                    alt: contact.name,
                    href: contact.url,
                    span {
                        class: "w-6 h-6 rounded-full block",
                        match contact.icon.as_str() {
                            "Github" => GithubIcon(),
                            "Firefox" => FirefoxIcon(),
                            "Gmail" => GMailIcon(),
                            "LinkedIn" => LinkedInIcon(),

                            _ => GithubIcon()
                        },
                    },
                }
            }
        }
    }
}
