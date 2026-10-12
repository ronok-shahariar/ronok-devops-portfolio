
# DevOps & Software Engineering Portfolio

### Md Shahariar Hassan
**Embedded Software Engineer | DevOps | Systems Engineering**

[![DevOps Portfolio CI](https://github.com/ronok-shahariar/ronok-devops-portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ronok-shahariar/ronok-devops-portfolio/actions/workflows/ci.yml)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://vercel.com/)

A modern, responsive engineering portfolio showcasing my work in **DevOps automation, Linux systems, high-performance networking, containerized infrastructure, and software architecture**.

---

## About Me

I'm an Embedded Software Engineer with hands-on experience in C/Python systems development, DPDK networking, Docker-based environments, automated software validation, and monitoring infrastructure.

My work connects software architecture with the infrastructure required to test, integrate, and operate complex engineering systems.

### Core Expertise

- **Software Engineering:** C, Python, TypeScript, Next.js
- **Systems Programming:** Linux, DPDK, POSIX Shared Memory, IPC
- **DevOps:** Docker, CI/CD, Git, Bitbucket Pipelines, GitHub Actions
- **Service Integration:** Python gRPC, sockets, microservices
- **Observability:** Prometheus, Grafana, Python metrics exporters
- **Testing:** Integration testing, regression validation, virtual packet testing

---

## Featured Engineering Projects

### 01. Hardware-Independent DPDK Testing & CI/CD Automation

Developed a reproducible Docker-based DPDK testing environment that enables developers to validate code changes without waiting for expensive, shared physical networking hardware.

**Engineering contributions:**
- Containerized DPDK build and runtime dependencies.
- Configured virtual packet testing using DPDK testpmd.
- Supported automated code validation through CI/CD.
- Reduced reliance on shared hardware for preliminary testing.

**Technologies:** Docker, DPDK, C, Linux, testpmd, CI/CD

[Explore Case Study](https://ronok-devops-portfolio.vercel.app/projects/hardware-independent-dpdk-testing)

### 02. DPDK-to-gRPC Data Pipeline Architecture

Designed and developed a cross-language data-delivery architecture connecting DPDK shared-memory data to Python gRPC services and remote applications.

**Engineering contributions:**
- Designed the secondary-to-client data pipeline.
- Implemented C and Python integration components.
- Connected DPDK secondary processing with gRPC APIs.
- Supported containerized runtime and dependency management.

**Technologies:** C, Python, DPDK, POSIX Shared Memory, gRPC, Docker

[Explore Case Study](https://ronok-devops-portfolio.vercel.app/projects/dpdk-grpc-data-pipeline)

### 03. Containerized Telemetry & Remote Observability

Developed a Dockerized Python metrics exporter to connect a gRPC-based DPDK system with Prometheus and Grafana.

**Engineering contributions:**
- Implemented Python telemetry exporter integration.
- Containerized monitoring-related services.
- Integrated Prometheus metrics collection.
- Supported remote Grafana visualization.
- Configured automatic exporter startup.

**Technologies:** Python, Docker, gRPC, Prometheus, Grafana, Linux

[Explore Case Study](https://ronok-devops-portfolio.vercel.app/projects/containerized-observability)

---

## Portfolio Technology Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 16, React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Motion for React |
| Icons | Lucide React |
| Version Control | Git, GitHub |
| Continuous Integration | GitHub Actions |
| Hosting | Vercel |

---

## CI/CD Pipeline

This repository uses GitHub Actions for automated quality checks.

### Workflow

```text
Developer Push / Pull Request
              |
              v
       GitHub Actions
              |
              v
       Install Dependencies
              |
              v
          ESLint
              |
              v
      TypeScript Check
              |
              v
      Next.js Build
              |
              v
       CI Pass / Fail
```

### Automated Checks

1. Install dependencies using `npm ci`.
2. Run ESLint.
3. Validate TypeScript.
4. Generate a production Next.js build.
5. Report pipeline execution results.

[View GitHub Actions](https://github.com/ronok-shahariar/ronok-devops-portfolio/actions)

**Deployment:** Vercel is connected to the GitHub repository and manages deployments independently of the GitHub Actions quality checks.

---

## Local Development

### Requirements

- Node.js 20.9 or later
- npm

### Installation

```bash
git clone https://github.com/ronok-shahariar/ronok-devops-portfolio.git

cd ronok-devops-portfolio

npm ci

npm run dev
```

Open http://localhost:3000.

### Quality Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

---

## Project Structure

```text
ronok-devops-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── projects/
│   │       ├── hardware-independent-dpdk-testing/
│   │       ├── dpdk-grpc-data-pipeline/
│   │       └── containerized-observability/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   └── types/
├── package.json
└── README.md
```

---

## Engineering Principles

- Reproducible development environments
- Automated quality validation
- Maintainable software architecture
- Dependency and runtime isolation
- System observability
- Reliable software integration and delivery

---

## Connect

**Md Shahariar Hassan**

GitHub: [ronok-shahariar](https://github.com/ronok-shahariar)

---

*Built with Next.js, TypeScript, Tailwind CSS, and GitHub Actions. Deployed on Vercel.*
