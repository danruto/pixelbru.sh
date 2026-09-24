interface ISectionHeadingProps {
    eyebrow: string
    title: string
    description?: string
}

const SectionHeading: React.FC<ISectionHeadingProps> = ({ eyebrow, title, description }) => (
    <header className="mb-10 flex flex-col gap-3 md:mb-14">
        <p className="font-pixel text-brand text-sm tracking-widest uppercase">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">{title}</h2>
        {description && <p className="text-muted-foreground max-w-2xl text-pretty md:text-lg">{description}</p>}
    </header>
)

export { SectionHeading }
export default SectionHeading
