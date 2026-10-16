{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "https://channels.nixos.org/nixpkgs-unstable/nixexprs.tar.zst";
  };

  outputs = { self, nixpkgs }: {
    # packages = builtins.mapAttrs (system: pkgs: {
    #   hello = pkgs.hello;
    #
    #   default = inputs.self.packages.${system}.hello;
    # }) inputs.nixpkgs.legacyPackages;
    devShells = builtins.mapAttrs 
    (system: _: 
      let
        pkgs = import nixpkgs { 
          inherit system;
          config.allowUnfree = true;
        };
      in
      {
        default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs
            postman
          ];
        };
      }) nixpkgs.legacyPackages;
  };
}
