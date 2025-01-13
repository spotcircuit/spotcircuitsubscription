# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install Python and build dependencies
RUN apk add --no-cache python3 py3-pip make g++

# Create and activate Python virtual environment
RUN python3 -m venv /app/venv
ENV PATH="/app/venv/bin:$PATH"

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy Python requirements first
COPY SpotCircuit/medical_spa_offers/aeo_offer/utils/requirements.txt ./requirements.txt
RUN . /app/venv/bin/activate && pip3 install -r requirements.txt

# Copy project files
COPY . .

# Expose ports for Next.js and Flask
EXPOSE 3000 5000

# Create a script to run both services
RUN echo '#!/bin/sh\n\
source /app/venv/bin/activate\n\
cd SpotCircuit/medical_spa_offers/aeo_offer/utils && python3 image_finder_web.py &\n\
npm run dev' > /app/start.sh && chmod +x /app/start.sh

# Start both services
CMD ["/app/start.sh"]
