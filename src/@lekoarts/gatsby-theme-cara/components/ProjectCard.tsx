import React from "react"
import { Link } from "gatsby"

type ProjectCardProps = {
  title: string
  link: string
  link2: string
  bg: string
  children: React.ReactNode
  tags: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, link, link2, bg, children, tags }) => (
  <div style={{ background: bg }}>
    <h2>{title}</h2>
    <a href={link}>GitHub</a>
    {link2 && <a href={link2}>Website</a>}
    <p>{children}</p>
    {tags && <p>{tags.join(', ')}</p>}
  </div>
)

export default ProjectCard
