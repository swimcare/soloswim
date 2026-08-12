# syntax=docker/dockerfile:1

FROM node:22-bookworm-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-bookworm-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Public build-time values only (inlined into the client bundle).
# Stripe secrets (STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, SENDGRID_*, MONGODB_URL)
# must come from runtime env via docker-compose env_file / .env — never bake them here.
ARG NEXT_PUBLIC_GOOGLE_ANALYTICS=

ENV NEXT_PUBLIC_GOOGLE_ANALYTICS=$NEXT_PUBLIC_GOOGLE_ANALYTICS

RUN npm run build

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/products ./products
COPY --from=builder /app/styles ./styles

EXPOSE 3000
CMD ["npm", "start"]
