type SectionHeadingProps = {
  id: string
  index: string
  children: string
}

export function SectionHeading({ id, index, children }: SectionHeadingProps) {
  return (
    <h2 id={id} className="section-heading">
      <span aria-hidden="true">{index}</span>
      {children}
    </h2>
  )
}
