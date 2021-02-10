{
  ref ? "feat/dockerfile"
, rev ? "11acb9d901646b04354dbf44a6acafec3bbf7d3f"
}:
let
  src = builtins.fetchGit {
    url = "https://github.com/brokad/synth.git";
    inherit ref rev;
  };
in (import "${src}/nix/release.nix" {}).override { inherit src; }
