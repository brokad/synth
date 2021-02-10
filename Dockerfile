FROM nixos/nix
RUN mkdir -p /opt/src
ADD Cargo.lock Cargo.toml default.nix /opt/src/
ADD core /opt/src/core
ADD synth /opt/src/synth
ADD gen /opt/src/gen
ADD nix /opt/src/nix
RUN nix-env -f /opt/src/nix/release.nix -i