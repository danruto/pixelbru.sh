#![allow(non_snake_case)]

use axum::{response::Html, routing::get, Router};
use dioxus::prelude::*;
use tower_http::services::ServeDir;

mod components;
use crate::components::landing::Landing;

use log::LevelFilter;

#[derive(Clone, Routable, Debug, PartialEq, serde::Serialize, serde::Deserialize)]
enum Route {
    #[route("/")]
    Landing {},
}

#[tokio::main]
async fn main() {
    // Init debug
    // dioxus_logger::init(dioxus_logger::tracing::Level::DEBUG).expect("failed to init logger");
    dioxus_logger::init(LevelFilter::Debug).expect("failed to init logger");
    // console_error_panic_hook::set_once();

    let mut vdom = VirtualDom::prebuilt(App);

    let html = dioxus_ssr::pre_render(&vdom);
    let html = format!("<!DOCTYPE html><html lang='en'>{html}</html>");
    let html = Html(html);

    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();

    println!("listening on http://127.0.0.1:3000");

    axum::serve(
        listener,
        Router::new()
            .nest_service("/public", ServeDir::new("public"))
            .route("/", get(html))
            .into_make_service(),
    )
    .await
    .unwrap();
}

fn App() -> Element {
    let mga_snippet = r#"
        (function(a,b,c){var d=a.history,e=document,f=navigator||{},g=localStorage,
        h=encodeURIComponent,i=d.pushState,k=function(){return Math.random().toString(36)},
        l=function(){return g.cid||(g.cid=k()),g.cid},m=function(r){var s=[];for(var t in r)
        r.hasOwnProperty(t)&&void 0!==r[t]&&s.push(h(t)+"="+h(r[t]));return s.join("&")},
        n=function(r,s,t,u,v,w,x){var z="https://www.google-analytics.com/collect",
        A=m({v:"1",ds:"web",aip:c.anonymizeIp?1:void 0,tid:b,cid:l(),t:r||"pageview",
        sd:c.colorDepth&&screen.colorDepth?screen.colorDepth+"-bits":void 0,dr:e.referrer||
        void 0,dt:e.title,dl:e.location.origin+e.location.pathname+e.location.search,ul:c.language?
        (f.language||"").toLowerCase():void 0,de:c.characterSet?e.characterSet:void 0,
        sr:c.screenSize?(a.screen||{}).width+"x"+(a.screen||{}).height:void 0,vp:c.screenSize&&
        a.visualViewport?(a.visualViewport||{}).width+"x"+(a.visualViewport||{}).height:void 0,
        ec:s||void 0,ea:t||void 0,el:u||void 0,ev:v||void 0,exd:w||void 0,exf:"undefined"!=typeof x&&
        !1==!!x?0:void 0});if(f.sendBeacon)f.sendBeacon(z,A);else{var y=new XMLHttpRequest;
        y.open("POST",z,!0),y.send(A)}};d.pushState=function(r){return"function"==typeof d.onpushstate&&
        d.onpushstate({state:r}),setTimeout(n,c.delay||10),i.apply(d,arguments)},n(),
        a.ma={trackEvent:function o(r,s,t,u){return n("event",r,s,t,u)},
        trackException:function q(r,s){return n("exception",null,null,null,null,r,s)}}})
        (window,"G-WB2SQPS453",{anonymizeIp:true,colorDepth:true,characterSet:true,screenSize:true,language:true});
    "#;

    rsx! {
        head {
            script {
                dangerous_inner_html: "{mga_snippet}"
            },
            link {
                rel: "stylesheet",
                href: "/public/main.css",
                "type": "text/css"
            },
            link {
                rel: "stylesheet",
                href: "/public/tailwind.css",
                "type": "text/css"
            }
        },
        Router::<Route> {}
    }
}
