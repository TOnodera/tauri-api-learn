FROM ubuntu:20.04

RUN apt update -y

RUN apt install -y curl \
    && curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh \
    && bash /tmp/nodesource_setup.sh \
    && apt install -y nodejs

RUN apt install -y tzdata 
ENV TZ Asia/Tokyo

RUN DEBIAN_FRONTEND=noninteractive apt install -y libwebkit2gtk-4.0-dev 
RUN apt install -y build-essential wget libssl-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev
RUN apt install -y git vim
RUN apt clean && rm -rf /var/lib/apt/lists/*

RUN useradd -u 1000 -m tauri -s /bin/bash
RUN apt update -y && apt install -y language-pack-ja
RUN locale-gen ja_JP.utf8 
ENV LANG ja_JP.utf8
RUN apt install -y fonts-takao
USER tauri

RUN curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh -s -- -y

ENV DISPLAY host.docker.internal:0.0