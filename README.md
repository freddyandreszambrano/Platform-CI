# platform-ci

Repositorio central de **workflows reutilizables de CI/CD** para proyectos Web y Mobile.

Este repositorio define estándares de integración continua utilizados por los distintos proyectos de la organización,
permitiendo reutilizar pipelines de forma segura, versionada y consistente.

---

## 🎯 Objetivo

- Centralizar la lógica de CI/CD
- Evitar duplicación de pipelines entre repositorios
- Garantizar estándares comunes de calidad y seguridad
- Facilitar el mantenimiento y la evolución de los flujos de CI

---

## 📂 Estructura

```text
.github/
└── workflows/
    ├── web/
    │   ├── django-docker.yml
    │   ├── django-test.yml
    └── mobile/
        ├── flutter-ci.yml
        ├── flutter-build.yml
