"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Layout,
  Database,
  GitBranch,
  Terminal,
} from "lucide-react";

const skills = [
  { icon: Code2, title: "Frontend Development", description: "React, Next.js, TypeScript" },
  { icon: Palette, title: "UI/UX Design", description: "Figma, Adobe XD" },
  { icon: Layout, title: "Responsive Design", description: "Mobile-First Approach" },
  { icon: Database, title: "Backend Development", description: "Node.js, PostgreSQL" },
  { icon: GitBranch, title: "Version Control", description: "Git, GitHub" },
  { icon: Terminal, title: "DevOps", description: "CI/CD, Docker" },
];

export function SkillsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-card hover:bg-card/80 transition-colors"
            >
              <skill.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}