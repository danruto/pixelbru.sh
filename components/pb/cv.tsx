import {
    Timeline,
    TimelineContent,
    TimelineDot,
    TimelineHeading,
    TimelineItem,
    TimelineLine,
} from "~/components/ui/timeline"

const CV: React.FC = () => (
    <Timeline positions="center">
        <TimelineItem status="done">
            <TimelineHeading side="left">
                Orion Integration - <span className="text-indigo-200">Software Development Intern</span>
            </TimelineHeading>
            <TimelineHeading side="right" variant="secondary">
                JUL 2010 - FEB 2011, Sydney
            </TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent side="left">
                <ul className="list-disc rtl pr-4">
                    <li>Troubleshooting and fixing software issues on-site</li>
                    <li>Client liasing and support</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem status="done">
            <TimelineHeading side="right">
                Citrix - <span className="text-indigo-200">Software Engineer</span>
            </TimelineHeading>
            <TimelineHeading side="left" variant="secondary">
                JAN 2014 - FEB 2016, Sydney
            </TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent>
                <ul className="list-disc pl-4">
                    <li>Liasing with clients to build internal tooling for supporting Citrix products</li>
                    <li>
                        R&D on Windows 10 changes for Citrix product suite such as inspecting the new Metro App
                        structures
                    </li>
                    <li>Developing PoC and R&D Technologies for Citrix Healthcare verticals</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem status="done">
            <TimelineHeading side="left">
                Vivant - <span className="text-indigo-200">Full Stack Software Engineer</span>
            </TimelineHeading>
            <TimelineHeading side="right" variant="secondary">
                MAY 2016 - JUL 2017, Sydney
            </TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent side="left">
                <ul className="list-disc rtl pr-4">
                    <li>
                        Implemented smart building access via mobile phone bluetooth for HID controlled systems e.g.
                        Elevators
                    </li>
                    <li>Built R&D tooling to support smart building functionality</li>
                    <li>Built the landing page and partner portal for the smart building</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineHeading>
                Aleron Security - <span className="text-indigo-200">Full Stack Software Engineer</span>
            </TimelineHeading>
            <TimelineHeading side="left" variant="secondary">
                JUL 2017 - OCT 2017, Sydney
            </TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent>
                <ul className="list-disc pl-4">
                    <li>Built out the initial version of EdNA (CyRisk)</li>
                </ul>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineHeading side="left">
                Hello Human - <span className="text-indigo-200">Principal Full Stack Software Engineer</span>
            </TimelineHeading>
            <TimelineHeading side="right" variant="secondary">
                OCT 2017 - OCT 2024, Sydney
            </TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent side="left">
                <ul className="list-disc rtl pr-4">
                    <li>
                        Implemented a custom system that was able to generate{" "}
                        <span className="italic">INFINITE (300 million)</span> customisable briadsmaid dresses on the
                        fly with very fast UX acheving page speeds of &gt;90
                    </li>
                    <li>
                        Built the Agriculture Industry's first GraphQL API reducing developer complexity from chaining
                        multiple different REST endpoints for the dataset
                    </li>
                    <li>
                        Transformed existing systems to use said GraphQL API which improved user productivity manyfold,
                        as evident by NPS surveys and collected metrics, users were able to finish within minutes rather
                        than hours.
                    </li>
                    <li>
                        Research and developed a multitude of PoCs for different scenarios in different stacks e.g. a
                        geo-aware mapping solution, a custom compression for transferring offline data or data in
                        slow/bad internet environments
                    </li>
                    <li>
                        Built out a digitised version of{" "}
                        <a
                            className="text-blue-400"
                            href="https://www.piccc.org.au/resources/Tools"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            PICC GAFs
                        </a>{" "}
                        that can produce almost instant results with less errors
                    </li>
                    <li>Built custom design systems for each client that required one</li>
                    <li>Participated in multiple product transitions and knowledge handover sessions with clients</li>
                    <li>
                        Helped a Legal firm revamp an existing product to migrate from an old WPF application to a
                        modern .NET Core stack with a NextJS frontend
                    </li>
                    <li>
                        Architected, built and deployed a variety of products onto cloud providers such as AWS, Azure
                        and GCP. The infrastructure was all IaC consuming the cloud providers SDK to ensure easy and
                        deterministic deployments of multiple environments.
                    </li>
                    <li>
                        Built the initial offering product for{" "}
                        <a
                            className="text-blue-400"
                            href="https://reflectal.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Reflectal
                        </a>{" "}
                        for their full stack near real time collaboration platform
                    </li>
                </ul>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineDot />
            <TimelineHeading>Could be your organisation!</TimelineHeading>
            <TimelineHeading side="left" variant="secondary">
                Currently available for hire
            </TimelineHeading>
        </TimelineItem>
    </Timeline>
)

export { CV }
export default CV
