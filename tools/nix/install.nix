{
  ref ? "master"
, rev ? "HEAD"
}:
let
  src = builtins.fetchGit {
    url = "https://github.com/brokad/synth.git";
    inherit ref rev;
  };
in (import "${src}/nix/release.nix" {}).override { inherit src; }
