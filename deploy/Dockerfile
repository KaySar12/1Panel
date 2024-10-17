# Use ubuntu 22.04 as a basic image
FROM ubuntu:22.04

# Set environment variables to avoid interactive configuration
ARG DEBIAN_FRONTEND=noninteractive

# Set the time zone as Asia/Shanghai
ENV TZ=Asia/Ho_Chi_Minh

# Install the required software package and clean up the APT cache
RUN apt-get update && apt-get install -y \
    wget \
    tar \
    unzip \
    zip \
    curl \
    git \
    sudo \
    gnupg \
    sqlite3 \
    tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && \
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg && \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" > /etc/apt/sources.list.d/docker.list && \
    apt-get update && apt-get install -y docker-ce-cli && \
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && \
    ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose && \
    chmod +x /usr/local/bin/docker-compose && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set the working directory as/app
WORKDIR /app

# Copy the necessary files
COPY ./install.sh .
COPY ./update_app_version.sh .
COPY ./nextweb.service .
COPY ./1pctl .
RUN [ ! -f "./build/nextweb" ] && echo "nextweb does not exist" || echo "nextweb found"
COPY ./nextweb . 

# Definition version parameter
ARG PANELVER=$PANELVER

# Set environment variables
ENV PANELVER=$PANELVER

# Download and install 1panel
RUN chmod +x /app/install.sh && \
    chmod +x /app/update_app_version.sh && \
    bash /app/install.sh && \
    cp /app/nextweb.service /etc/systemd/system/nextweb.service && \
    find /app -type f ! -name 'update_app_version.sh' -delete

# Set the working directory as the root directory
WORKDIR /

# 10086
EXPOSE 10086

# Create a roll of docker socket
VOLUME /var/run/docker.sock

# start up
CMD ["/bin/bash", "-c", "/usr/local/bin/nextweb & sleep 3 && kill $(jobs -p) || true && /app/update_app_version.sh && /usr/local/bin/nextweb"]