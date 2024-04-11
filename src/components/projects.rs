use dioxus::prelude::*;

#[derive(PartialEq, Props, Clone)]
struct BadgeProps {
    text: String,
}

fn Badge(props: BadgeProps) -> Element {
    rsx! {
        span {
            class: "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-4 py-1.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300 my-2",
            "{props.text}"
        }
    }
}

#[derive(Clone, PartialEq)]
struct Project {
    name: String,
    description: String,
    period: String,
    url: Option<String>,
    image: Option<String>,
    stack: Vec<String>,
}

#[derive(PartialEq, Props, Clone)]
struct ProjectsFlashProps {
    projects: Vec<Project>,
}

fn ProjectsFlash(props: ProjectsFlashProps) -> Element {
    let first_name = props.projects.first().unwrap().name.clone();

    rsx! {
        div {
            class: "font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200",
            "Project ",
            span {
                class: "inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden text-indigo-500",
                ul {
                    class: "block animate-text-slide-6 text-left leading-tight [&_li]:block",
                    for project in props.projects {
                        li { "{project.name}" }
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
pub fn Projects() -> Element {
    let projects = [
        Project {
            name: "pixelbru.sh".to_string(),
            description: "This website!".to_string(),
            period: "2024".to_string(),
            url: Some("https://pixelbru.sh".to_string()),
            image: None,
            stack: vec!["Tailwind", "Dioxus"].into_iter().map(str::to_string).collect(),
        },
        Project {
            name: "Retrotool".to_string(),
            description: "A quick and easy ephemeral retro board that has some fun features like copy to clipboard for pasting in Confluence, icebreakers, post-retro questions".to_string(),
            period: "2024".to_string(),
            url: Some("https://retrotool.pixelbru.sh".to_string()),
            image: None,
            stack: vec!["Tailwind", "Dioxus"].into_iter().map(str::to_string).collect(),
        },
        Project {
            name: "GAF Digitisation".to_string(),
            description: "Digitised the GAF calculators from https://piccc.org.au/resources/Tools.html specfiically the SB-GAF and G-GAFs. The project was built in Go and produced results for real-time calculations in under 100ms TRT".to_string(),
            period: "2022-2024".to_string(),
            url: None,
            image: None,
            stack: vec!["Go", "Fiber", "React", "Tailwind", "Hasura", "Postgres", "Tilt", "Kubernetes", "Docker"].into_iter().map(str::to_string).collect(),
        },
        Project {
            name: "Mortgage Lending Management System".to_string(),
            description: "A platform to help brokers and consumers to manage the loan that is being serviced for their mortgage.".to_string(),
            period: "2021-2022".to_string(),
            url: None,
            image: None,
            stack: vec![".NET Core", "Azure", "Azure DevOps", "Go", "React", "Storybook", "Docker"].into_iter().map(str::to_string).collect(),
        },
        Project {
            name: "eNVD".to_string(),
            description: "A platform to help farmers track the movement and other vital information of their livestock.".to_string(),
            period: "2019-2021".to_string(),
            url: Some("https://envd.integritysystems.com.au".to_string()),
            image: None,
            stack: vec!["CSS", "SASS", "React", ".NET Core", "GraphQL", "AWS (CloudFormation, ECS, ECR, Route53, ACM, Lambda, S3, IAM)", "Bitbucket Pipelines", "Python", "Canvas/WebGL", "Storybook", "Docker"].into_iter().map(str::to_string).collect(),
        },
        Project {
            name: "Custom Bridesmaid Dresses".to_string(),
            description: "Built a UI around the concept of building your own bridesmaid dresses. These dresses had multiple components that would change in compatibility based on other selections in any direction (that is a top half, bottom half, side etc). This solution could render the stiched drawing of the calculated dress in under 100ms with full lazy loading.".to_string(),
            period: "2018-2019".to_string(),
            url: None,
            image: None,
            stack: vec!["CSS", "SASS", "Typescript", "React", ".NET Core", "AWS (Lambda, EB, S3, RDS, IAM)", "Ruby on Rails", "CircleCI", "Storybook", "Docker"].into_iter().map(str::to_string).collect(),
        },
        Project {
            name: "CyRisk".to_string(),
            description: "Built the initial solution to CyRisk (later called eDNA) which was a cyber security risk assessment platform.".to_string(),
            period: "2017-2018".to_string(),
            url: None,
            image: None,
            stack: vec!["React", ".NET Core", "MSSQL", "Typescript", "Azure", "Azure DevOps", "Storybook"].into_iter().map(str::to_string).collect(),
        },
    ];

    rsx! {
        div {
            class: "pt-8",
            div {
                class: "flex p-2 flex-wrap",

                for project in projects {
                    div {
                        class: "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 hover:bg-transparent m-2 transform transition hover:scale-105 flex flex-col justify-around",

                        span {
                            class: "flex items-center justify-between",
                            h5 {
                                class: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
                                "{project.name}"
                            },

                            if project.url.is_some() {
                                a {
                                    class: "text-blue-300 hover:text-blue-600 animate-pulse hover:animate-none",
                                    href: project.url.unwrap(),
                                    "Link",
                                }
                            },
                        },

                        p {
                            class: "text-md flex-1",
                            "{project.description}"
                        },

                        div {
                            class: "flex flex-wrap",
                            for stack in project.stack {
                                Badge { text: stack }
                            }
                        },

                        div {
                            class: "text-slate-500/80 text-sm",
                            "{project.period}",
                        }
                    }
                }
            }
        }
    }
}
