# ===========================
# 🏗️ STAGE 1 - BUILD
# ===========================
FROM node:20-alpine AS builder

# Definindo diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas arquivos de dependência primeiro (para aproveitar cache)
COPY package*.json ./

# Instala dependências necessárias para build
RUN npm ci

# Copia todo o código fonte
COPY . .

# Compila o projeto Angular Universal em modo produção
RUN npm run build

# ===========================
# 🚀 STAGE 2 - RUNTIME
# ===========================
FROM node:20-alpine AS runner

# Define diretório de trabalho
WORKDIR /app

# Copia apenas artefatos finais de build do estágio anterior
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Instala apenas dependências de produção (sem devDependencies)
RUN npm ci --omit=dev

# Variáveis de ambiente para o container
ENV NODE_ENV=production \
    PORT=8080

# Expondo a porta que o Express utiliza
EXPOSE 8080

# Comando padrão para iniciar o servidor SSR
CMD ["node", "dist/barbosa-code-angular/server/server.mjs"]
