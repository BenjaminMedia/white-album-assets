require File.expand_path('../../core/lib/white_album/version', __FILE__)

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name         = "white_album_theme"
  s.version      = WhiteAlbum::VERSION
  s.platform     = Gem::Platform::RUBY
  s.author       = ["Bonnier Publications - Interactive"]
  s.email        = ["feedback@benjamin.dk"]
  s.homepage     = "https://github.com/BenjaminMedia/WhiteAlbum"
  s.summary      = "WhiteAlbum Theme."
  s.description  = "The assets for the WhiteAlbum and Bonnier Drupal platforms."

  s.require_path = "lib"
  s.files        = Dir["{app,config,db,lib}/**/*", "Rakefile"]
  s.test_files   = Dir["spec/**/*"]

  s.add_dependency "white_album_core", WhiteAlbum::VERSION
end
