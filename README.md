# FoxxCyber Web Application

## Docker Deployment Guide

This guide will help you deploy the FoxxCyber web application on your VPS using Docker.

### Prerequisites

- A VPS with Docker and Docker Compose installed
- Git installed on your VPS
- Domain name (optional but recommended)

### Installation Steps

1. Clone the repository:
```bash
git clone [your-repository-url]
cd foxxcyber.web
```

2. Set up environment variables:
```bash
cp .env.production.example .env.production
```
Edit `.env.production` with your actual values:
- Set `TWENTY_CRM_URL` to your Twenty CRM instance URL
- Set `TWENTY_API_KEY` to your Twenty CRM API key

3. Build and start the containers:
```bash
docker compose up -d
```

The application will be available at `http://your-server-ip:3001`

### Configuration

- The application runs on port 3001 by default (mapped from container port 3000)
- Redis is used for rate limiting and caching
- All data persists through Docker volumes

### Resource Usage

The Docker configuration includes resource limits:
- Web application: Max 1 CPU, 1GB RAM
- Redis: Max 0.5 CPU, 512MB RAM

### Health Checks

Both services include health checks:
- Web application: Checks `/api/health` endpoint every 30 seconds
- Redis: Performs PING command every 30 seconds

### Maintenance

To view logs:
```bash
docker compose logs -f
```

To update the application:
```bash
git pull
docker compose down
docker compose up -d --build
```

### Backup

Redis data is persisted in a Docker volume. To backup the data:
```bash
docker run --rm -v foxxcyber.web_redis_data:/data -v $(pwd)/backup:/backup alpine tar czf /backup/redis-backup.tar.gz /data
```

### Troubleshooting

If the application fails to start:
1. Check logs: `docker compose logs`
2. Verify environment variables in `.env.production`
3. Ensure all required ports are available
4. Check system resources

For more detailed logs:
```bash
docker compose logs -f --tail=100
