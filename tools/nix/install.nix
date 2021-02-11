{
  ref ? "master"
, rev ? "HEAD"
}:
let
  src = builtins.fetchGit {
    url = "https://github.com/brokad/synth.git";
    inherit ref rev;
  };
in {
  synth = (import "${src}/nix/release.nix" {}).override { inherit src; };
}
