# Use Python base image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY utils/requirements.txt .
RUN pip install -r requirements.txt

# Copy the application code
COPY utils/ ./utils/
COPY assets/ ./assets/

# Set environment variables
ENV FLASK_APP=utils/image_finder_web.py
ENV FLASK_ENV=development

# Expose port
EXPOSE 3800

# Run the application
CMD ["python", "utils/image_finder_web.py"]
