FROM python:3.11.9-slim-bullseye AS builder

WORKDIR /app
COPY poetry.lock pyproject.toml ./

ARG POETRY_VERSION=1.8.2

RUN --mount=type=cache,target=/root/.cache \
    python -m pip install poetry==${POETRY_VERSION}

RUN poetry install --without dev

COPY bot bot
COPY locales locales

ENV PYTHONUNBUFFERED=1

CMD ["/bin/bash", "-c", "poetry run bot start"]
