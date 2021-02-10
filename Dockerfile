FROM nixos/nix
RUN nix-env -iA cachix -f https://cachix.org/api/v1/install
RUN cachix use getsynth

RUN mkdir -p /opt/src
ADD Cargo.lock Cargo.toml default.nix /opt/src/
ADD core /opt/src/core
ADD synth /opt/src/synth
ADD gen /opt/src/gen
ADD nix /opt/src/nix
RUN nix-env -f /opt/src/nix/release.nix -i

ENTRYPOINT [ "/root/.nix-profile/bin/synth" ]