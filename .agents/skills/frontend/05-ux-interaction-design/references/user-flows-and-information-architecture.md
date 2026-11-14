# User Flows and Information Architecture

## Model the journey

For each important task, identify the actor, entry point, prerequisites, actions, decisions, system responses, completion state, and recovery path. Include permission denial, empty data, interrupted network requests, and cancellation where relevant.

## Navigation structure

Organize information around the user's mental model and tasks. Use labels that describe destinations and outcomes rather than internal database terminology. Keep global navigation, local navigation, page-level actions, and in-content links visually and semantically distinct.

## Route and URL state

Use URL state for information users may need to bookmark, share, refresh, or navigate with browser history, such as search queries, filters, sorting, and pagination. Do not encode sensitive data or secrets in URLs.

## Progressive disclosure

Reveal details when they are needed, but do not hide essential information behind unnecessary clicks. Use steps only when they reduce cognitive load or preserve a meaningful sequence.

## Flow acceptance

A flow is complete when users can start, understand progress, recover from expected failure, and confirm the outcome. A screenshot of the happy path is not sufficient evidence.
