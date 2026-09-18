const storageKey = "projects-data";

const defaultProjects = [
  {
    title: "Northline",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Une expérience numérique conçue pour rendre les décisions plus claires."
  },
  {
    title: "Atelier 9",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    description:
      "Un système de design pensé pour créer avec simplicité et cohérence."
  },
  {
    title: "Lune Studio",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    description:
      "Une identité et une plateforme pour présenter les idées autrement."
  }
];

let projects = JSON.parse(
  localStorage.getItem(storageKey)
) || defaultProjects;

const grid = document.querySelector("#project-grid");
const form = document.querySelector("#project-form");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderProjects() {
  grid.innerHTML = projects
    .map(function (project) {
      return `
        <article class="project-card">
          <div
            class="project-image"
            style="background-image: url('${encodeURI(project.image)}')"
          ></div>

          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
        </article>
      `;
    })
    .join("");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const newProject = {
    title: formData.get("title").trim(),
    image: formData.get("image").trim(),
    description: formData.get("description").trim()
  };

  projects.unshift(newProject);

  localStorage.setItem(
    storageKey,
    JSON.stringify(projects)
  );

  renderProjects();
  form.reset();

  document
    .querySelector("#projects")
    .scrollIntoView({ behavior: "smooth" });
});

renderProjects();