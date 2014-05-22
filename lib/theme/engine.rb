module Theme
  class Engine < ::Rails::Engine
    include WhiteAlbum::Engines::BaseEngine
    isolate_namespace Theme

    engine_name "white_album_theme"
  end
end
