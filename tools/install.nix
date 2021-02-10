let
  src = builtins.fetchGit {
    url = "https://github.com/brokad/synth.git";
    ref = "feat/dockerfile";
    rev = "11acb9d901646b04354dbf44a6acafec3bbf7d3f";
  };
in (import "${src}/nix/release.nix" {}).override { inherit src; }
