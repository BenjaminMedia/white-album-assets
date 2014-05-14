require File.expand_path('../lib/theme/version', __FILE__)

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name         = "white_album_theme"
  s.version      = Theme::VERSION
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

  # Use Bootstrap as the CSS framework
  s.add_dependency "bootstrap-sass", "~> 3.1.0"

  # Use Compass mixins and variables when available to keep the CSS clean
  s.add_dependency "compass-rails", "~> 1.1.2"

  # RGBA plugin for Compass
  s.add_dependency "compass-rgbapng", "~> 0.2.1"

  # font-awesome provides a collection of icon-fonts - use them instead of images if possible
  s.add_dependency "font-awesome-sass", "~> 4.0.3"
end
