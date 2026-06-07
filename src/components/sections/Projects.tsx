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
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("todos");

  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="section-padding bg-gray-50/50 dark:bg-primary/30">
      <div className="container-custom">
        <SectionHeading
          title="Portafolio de Proyectos"
          subtitle="Casos de éxito que demuestran resultados tangibles"
        />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                activeFilter === category.id
                  ? "bg-secondary text-white shadow-lg shadow-secondary/25 dark:bg-accent dark:text-primary dark:shadow-accent/25"
                  : "border border-gray-200 bg-white text-text-secondary hover:border-secondary hover:text-secondary dark:border-gray-700 dark:bg-primary/60 dark:text-text-dark-secondary dark:hover:border-accent dark:hover:text-accent"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={project.id} delay={index * 0.05} className="group relative overflow-hidden">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-secondary/10 to-accent/10 transition-transform group-hover:scale-150" />

                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary dark:bg-accent/10 dark:text-accent">
                      {categoryLabels[project.category]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary dark:text-white">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-text-secondary dark:bg-primary/60 dark:text-text-dark-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-text-secondary dark:text-text-dark-secondary">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      Resultado:
                    </span>{" "}
                    {project.result}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100 dark:text-accent">
                    Ver detalles
                    <ArrowUpRight className="h-4 w-4" />
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
