use dioxus::prelude::*;

const COLOURS: [&str; 6] = [
    "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-4 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 my-2",
    "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-4 py-1.5 rounded-full purple:bg-purple-900 purple:text-purple-300 my-2",
    "bg-green-100 text-green-800 text-xs font-medium me-2 px-4 py-1.5 rounded-full dark:bg-green-900 dark:text-green-300 my-2",
    "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-4 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300 my-2",
    "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-4 py-1.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300 my-2",
    "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-4 py-1.5 rounded-full dark:bg-pink-900 dark:text-pink-300 my-2",
];

#[derive(PartialEq, Props, Clone)]
struct BadgeProps {
    number: usize,
    text: String,
}

fn Badge(props: BadgeProps) -> Element {
    let index = props.number % COLOURS.len();

    rsx! {
        span {
            class: COLOURS[index],
            "{props.text}"
        }
    }
}

#[derive(Clone, PartialEq)]
struct Skillset {
    name: String,
    skills: Vec<String>,
}

#[component]
fn ChevronUpIcon() -> Element {
    rsx! {
        svg {
            class: "w-3 h-3 shrink-0",
            fill: "none",
            view_box: "0 0 10 6",
            path {
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                stroke_width: "2",
                d: "M9 5 5 1 1 5"
            }
        }
    }
}

#[component]
fn ChevronDownIcon() -> Element {
    rsx! {
        svg {
            class: "w-3 h-3 rotate-180 shrink-0",
            fill: "none",
            view_box: "0 0 10 6",
            path {
                stroke: "currentColor",
                stroke_linecap: "round",
                stroke_linejoin: "round",
                stroke_width: "2",
                d: "M9 5 5 1 1 5"
            }
        }
    }
}

#[derive(PartialEq, Props, Clone)]
struct SkillsFlashProps {
    skillsets: Vec<Skillset>,
}

// We know the length of skillsets is 10 so hardcode for TW to compile it
#[component]
fn SkillsFlash(props: SkillsFlashProps) -> Element {
    let first_name = props.skillsets.first().unwrap().name.clone();

    rsx! {
        div {
            class: "font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200",
            "Experienced in ",
            span {
                class: "inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden text-indigo-500",
                ul {
                    class: "block animate-text-slide-10 text-left leading-tight [&_li]:block",
                    for skillset in props.skillsets {
                        li { "{skillset.name}" }
                    }
                    li {
                        aria_hidden: "true",
                        "{first_name}"
                    }
                }
            }
        }
    }
}

#[component]
pub fn Skills() -> Element {
    let mut is_open = use_signal(|| false);

    let skillsets = [
        Skillset {
            name: "DevOps".to_string(),
            skills: vec![
                "AWS",
                "AWS CDK",
                "AWS CloudFormation",
                "AWS CloudWatch",
                "AWS S3",
                "AWS IAM",
                "AWS Lambda",
                "AWS ECS",
                "AWS EKS",
                "AWS SQS",
                "GCP",
                "Azure",
                "Azure SDK",
                "Vultr",
                "Docker",
                "Kubernetes",
                "Tilt",
                "Nix",
            ]
            .into_iter()
            .map(|skill| skill.to_string())
            .collect(),
        },
        Skillset {
            name: "Typescript".to_string(),
            skills: vec![
                "React",
                "React Native",
                "SolidJS",
                "Deno",
                "Preact",
                "NextJS",
                "Vite",
                "Rollup",
                "Webpack",
                "Express",
            ]
            .into_iter()
            .map(|skill| skill.to_string())
            .collect(),
        },
        Skillset {
            name: "Rust".to_string(),
            skills: vec![
                "Axum", "Dioxus", "Tauri", "Ratatui", "Tokio", "RTen", "eGUI",
            ]
            .into_iter()
            .map(|skill| skill.to_string())
            .collect(),
        },
        Skillset {
            name: "CSS".to_string(),
            skills: vec!["Tailwind", "CSS/CSS3", "SASS"]
                .into_iter()
                .map(|skill| skill.to_string())
                .collect(),
        },
        Skillset {
            name: "Generic Web".to_string(),
            skills: vec![
                "GraphQL", "REST", "curl", "xh", "Insomnia", "Postman", "Httpie",
            ]
            .into_iter()
            .map(|skill| skill.to_string())
            .collect(),
        },
        Skillset {
            name: "Databases".to_string(),
            skills: vec![
                "Postgres", "MongoDB", "MSSQL", "SQLite", "DGraph", "SQL", "Hasura",
            ]
            .into_iter()
            .map(|skill| skill.to_string())
            .collect(),
        },
        Skillset {
            name: "Go".to_string(),
            skills: vec!["Fiber"]
                .into_iter()
                .map(|skill| skill.to_string())
                .collect(),
        },
        Skillset {
            name: "C#".to_string(),
            skills: vec![".NET Core"]
                .into_iter()
                .map(|skill| skill.to_string())
                .collect(),
        },
        Skillset {
            name: "Python".to_string(),
            skills: vec!["FastAPI", "Poetry", "scikit-learn", "Jupyter"]
                .into_iter()
                .map(|skill| skill.to_string())
                .collect(),
        },
        Skillset {
            name: "Operating Systems".to_string(),
            skills: vec!["Windows", "MacOS", "Arch Linux", "NixOS", "Amazon Linux"]
                .into_iter()
                .map(|skill| skill.to_string())
                .collect(),
        },
    ];

    rsx! {
        div {
            class: "",
            div {
                class: "flex px-4 py-4 flex-col items-center justify-center",
                div {
                    class: "flex flex-row items-center",
                    span {
                        button {
                            class: "pr-4",
                            onclick: move |_| {
                                let toggle = !is_open();
                                *is_open.write() = toggle;
                            },
                            if is_open() {
                                ChevronUpIcon {}
                            } else {
                                ChevronDownIcon {}
                            }
                        }
                    },
                    SkillsFlash { skillsets: skillsets.to_vec() },
                }
            }

            div {
                class: "",

                div {
                    class: if is_open() {
                        "flex p-2 flex-wrap max-h-screen overflow-hidden transition-all duration-700"
                    } else {
                        "flex flex-wrap max-h-0 overflow-hidden transition-all duration-700"
                    },
                    for skillset in skillsets {
                        div {
                            class: "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-transparent transform transition hover:scale-105 m-2",
                            h5 {
                                class: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                "{skillset.name}"
                            },
                            div {
                                class: "flex flex-wrap",
                                for (idx, skill) in skillset.skills.iter().enumerate() {
                                    Badge { number: idx, text: skill }
                                },
                            }
                        }
                    }
                }
            }
       }
    }
}
