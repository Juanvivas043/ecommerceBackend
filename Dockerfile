FROM node:20-alpine

# Instalar pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copiamos las dependencias e instalamos dentro del contenedor
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./
RUN pnpm install --frozen-lockfile

# Copiamos el resto del código
COPY . .

EXPOSE 3000

# Arranca en modo desarrollo con auto-recarga
CMD ["pnpm", "run", "dev"]