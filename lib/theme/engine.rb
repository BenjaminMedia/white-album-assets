module Theme
  class Engine < ::Rails::Engine
    include WhiteAlbum::Engines::BaseEngine

    engine_name "white_album_theme"
  end
end
