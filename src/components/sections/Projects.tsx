"use client";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  categoryLabels,
  projectCategories,
  projects,
  type ProjectFilter,
} from "@/data/services";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("todos");

  const filteredProjects =
    activeFilter === "todos"
      ? projects.slice(0, 4)
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="casos" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Casos de éxito"
          subtitle="Proyectos reales con impacto en productividad, decisiones y crecimiento"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={cn(
                "rounded-full px-3 py-2 text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm",
                activeFilter === category.id
                  ? "bg-secondary text-white shadow-lg shadow-secondary/25 dark:bg-accent dark:text-primary dark:shadow-accent/25"
                  : "border border-gray-200 bg-white text-text-secondary hover:border-secondary hover:text-secondary dark:border-gray-700 dark:bg-primary/60 dark:text-text-dark-secondary dark:hover:border-accent dark:hover:text-accent"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={project.id} delay={index * 0.05} className="group">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary dark:bg-accent/10 dark:text-accent">
                      {categoryLabels[project.category]}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-primary dark:text-white">
                      {project.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-text-secondary dark:bg-primary/60 dark:text-text-dark-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-text-secondary dark:text-text-dark-secondary">
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        Resultado:
                      </span>{" "}
                      {project.result}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
