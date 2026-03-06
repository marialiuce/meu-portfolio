import type { Experience, Project } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Agente de Reservas",
    company: "Setor Hoteleiro",
    period: "Setembro 2025 - Presente",
    description: "Atendimento ao cliente e gestão ágil de reservas, com foco em resolução de problemas e experiência do usuário."
  },
  {
    id: "2",
    role: "Técnico de Informática",
    company: "Jaguar Cursos",
    period: "Fevereiro 2023 - Fevereiro 2025",
    description: "Suporte técnico, manutenção de equipamentos e auxílio direto aos usuários, garantindo o funcionamento contínuo das operações."
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Kanban Board",
    description: "Um quadro Kanban interativo para gestão de tarefas, focado em organização visual e produtividade.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    linkGithub: "#",
  },
  {
    id: "2",
    title: "Wizard Form",
    description: "Formulário multi-etapas complexo com validação de dados avançada e foco na experiência do usuário (UX).",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    linkGithub: "#",
  },
  {
    id: "3",
    title: "DevFinder",
    description: "Aplicação que consome a API do GitHub para buscar e exibir perfis de desenvolvedores de forma limpa e responsiva.",
    techStack: ["React", "TypeScript"],
    linkGithub: "https://github.com/marialiuce/devfinder-react",
  },
  {
    id: "4",
    title: "Markdown Notes",
    description: "Aplicativo para criação, edição e organização de notas em tempo real utilizando o formato Markdown.",
    techStack: ["React", "TypeScript"],
    linkGithub: "https://github.com/marialiuce/react-markdown-notes",
  }
];